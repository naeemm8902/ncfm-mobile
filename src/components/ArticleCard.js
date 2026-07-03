import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import { categoryConfig } from '../data/categories';
import PressScale from './PressScale';

export default function ArticleCard({ article, onPress, style }) {
  const cat = categoryConfig[article.category];
  return (
    <PressScale onPress={onPress} style={[styles.card, shadow.sm, style]}>
      <ImageBackground
        source={images[cat?.imageKey] || images.categorySpiritual}
        style={styles.image}
        imageStyle={{ borderTopLeftRadius: radii.lg, borderTopRightRadius: radii.lg }}
      >
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cat?.label || article.category}</Text>
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <Text style={styles.meta}>{article.date} · {article.author}</Text>
        <Text style={styles.title} numberOfLines={2}>{article.title}</Text>
        <Text style={styles.excerpt} numberOfLines={3}>{article.excerpt}</Text>
        <Text style={styles.readMore}>Read article →</Text>
      </View>
    </PressScale>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
  },
  image: {
    height: 92,
    backgroundColor: colors.navyAlt,
    justifyContent: 'flex-start',
  },
  badge: {
    margin: 10,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: radii.pill,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    ...type.caption,
    color: colors.primary,
    textTransform: 'none',
  },
  body: {
    padding: spacing.md,
  },
  meta: {
    ...type.caption,
    color: colors.textMuted,
    textTransform: 'none',
    marginBottom: 6,
  },
  title: {
    ...type.h4,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  excerpt: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: 10,
  },
  readMore: {
    ...type.caption,
    color: colors.gold,
    textTransform: 'none',
    fontFamily: type.h4.fontFamily,
  },
});
