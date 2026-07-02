import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import { categoryConfig, thumbKeyForIndex } from '../data/categories';

export default function ArticleListCard({ title, articles, onPressArticle, style }) {
  if (!articles.length) return null;
  return (
    <View style={[styles.card, shadow.sm, style]}>
      <Text style={styles.heading}>{title}</Text>
      <View style={{ gap: spacing.sm }}>
        {articles.map((a, i) => (
          <Pressable key={a.slug} onPress={() => onPressArticle(a)} style={styles.row}>
            <Image source={images[thumbKeyForIndex(i)]} style={styles.thumb} resizeMode="cover" />
            <View style={styles.textCol}>
              <Text style={styles.title} numberOfLines={2}>{a.title}</Text>
              <Text style={styles.meta}>{a.date} · {categoryConfig[a.category]?.label || a.category}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
  },
  heading: {
    ...type.eyebrow,
    color: colors.navy,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  thumb: {
    width: 58,
    height: 58,
    borderRadius: radii.sm,
    backgroundColor: colors.navyAlt,
  },
  textCol: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...type.bodySmall,
    fontFamily: type.h4.fontFamily,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  meta: {
    ...type.caption,
    color: colors.textFaint,
    textTransform: 'none',
  },
});
