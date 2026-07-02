import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';
import images from '../data/images';

export default function SplashScreen({ onFinish }) {
  const scaleAnim = useRef(new Animated.Value(0.85)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(scaleAnim, { toValue: 1, friction: 5, useNativeDriver: true }),
    ]).start();

    const timer = setTimeout(() => {
      onFinish && onFinish();
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={[colors.navyDeep, colors.navy]} style={styles.container}>
      <Animated.View style={{ opacity: opacityAnim, transform: [{ scale: scaleAnim }], alignItems: 'center' }}>
        <Image source={images.logoWhite} style={styles.logo} resizeMode="contain" />
      </Animated.View>
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
    width: 260,
    height: 70,
  },
});
