import React, { useEffect, useRef } from 'react';
import { View, Image, Text, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, type } from '../theme';
import images from '../data/images';

const TAGLINE = 'Sharing faith. Inspiring families. Serving our community.';
const WORDS = TAGLINE.split(' ');
const WORD_STAGGER = 90;
const WORDS_START = 450;

export default function SplashScreen({ onFinish }) {
  const scaleAnim = useRef(new Animated.Value(0.85)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const wordAnims = useRef(WORDS.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, useNativeDriver: true }),
      ...wordAnims.map((anim, i) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 380,
          delay: WORDS_START + i * WORD_STAGGER,
          useNativeDriver: true,
        })
      ),
    ]).start();

    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={[colors.navyDeep, colors.navy]} style={styles.container}>
      <Animated.View style={{ opacity: opacityAnim, transform: [{ scale: scaleAnim }], alignItems: 'center' }}>
        <Image source={images.logoWhite} style={styles.logo} resizeMode="contain" />
      </Animated.View>

      <View style={styles.taglineRow}>
        {WORDS.map((word, i) => (
          <Animated.Text
            key={`${word}-${i}`}
            style={[
              styles.taglineWord,
              {
                opacity: wordAnims[i],
                transform: [
                  {
                    translateY: wordAnims[i].interpolate({
                      inputRange: [0, 1],
                      outputRange: [10, 0],
                    }),
                  },
                ],
              },
            ]}
          >
            {word}{i < WORDS.length - 1 ? ' ' : ''}
          </Animated.Text>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 430,
    height: 159,
    marginBottom: 22,
  },
  taglineRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 48,
  },
  taglineWord: {
    ...type.body,
    fontSize: 14.5,
    color: 'rgba(255,255,255,0.85)',
    letterSpacing: 0.3,
  },
});
