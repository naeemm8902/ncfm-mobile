import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, type } from '../theme';
import images from '../data/images';

export default function GradientHero({
  imageKey,
  gradientColors,
  overlayColors,
  minHeight = 260,
  eyebrow,
  title,
  subtitle,
  align = 'center',
  children,
  contentStyle,
  imageStyle,
}) {
  const content = (
    <View
      style={[
        styles.content,
        { minHeight, alignItems: align === 'center' ? 'center' : 'flex-start' },
        contentStyle,
      ]}
    >
      {!!eyebrow && <Text style={[styles.eyebrow, { textAlign: align }]}>{eyebrow}</Text>}
      {!!title && <Text style={[styles.title, { textAlign: align }]}>{title}</Text>}
      {!!subtitle && <Text style={[styles.subtitle, { textAlign: align }]}>{subtitle}</Text>}
      {children}
    </View>
  );

  const overlay = overlayColors || ['rgba(6,20,45,0.35)', 'rgba(6,20,45,0.72)'];

  if (imageKey) {
    return (
      <ImageBackground source={images[imageKey]} style={[styles.bg, imageStyle]} resizeMode="cover">
        <LinearGradient colors={overlay} style={StyleSheet.absoluteFill} />
        {content}
      </ImageBackground>
    );
  }

  return (
    <LinearGradient
      colors={gradientColors || [colors.navy, colors.navyAlt]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.bg}
    >
      {content}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    overflow: 'hidden',
  },
  content: {
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
  },
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 8,
  },
  title: {
    ...type.h1,
    color: colors.white,
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    ...type.body,
    fontSize: 15.5,
    lineHeight: 23,
    color: colors.textInverseMuted,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
});
