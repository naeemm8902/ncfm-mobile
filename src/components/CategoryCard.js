import React from 'react';
import { Pressable, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import Pill from './Pill';

export default function CategoryCard({ category, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, style]}>
      <ImageBackground source={images[category.imageKey]} style={styles.image} imageStyle={styles.imageInner}>
        <LinearGradient colors={['rgba(6,20,45,0.15)', 'rgba(6,20,45,0.8)']} style={StyleSheet.absoluteFill} />
        <View style={styles.top}>
          <Pill label={category.label} variant="white" />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.desc}>{category.description}</Text>
          <View style={styles.tags}>
            {category.tags.slice(0, 3).map((t) => (
              <View key={t} style={styles.tag}>
                <Text style={styles.tagText}>{t}</Text>
              </View>
            ))}
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.lg,
    overflow: 'hidden',
  },
  image: {
    height: 220,
    justifyContent: 'space-between',
    padding: spacing.md,
  },
  imageInner: {
    borderRadius: radii.lg,
  },
  top: {
    alignItems: 'center',
  },
  bottom: {},
  desc: {
    ...type.body,
    fontSize: 13,
    color: colors.white,
    fontFamily: type.h4.fontFamily,
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowRadius: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: colors.primary,
    borderRadius: radii.pill,
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  tagText: {
    ...type.caption,
    fontSize: 9.5,
    color: colors.white,
    textTransform: 'none',
  },
});
