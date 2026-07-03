import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import PressScale from './PressScale';

export default function IssueCard({ issue, onPress, style }) {
  return (
    <PressScale onPress={onPress} style={[styles.card, shadow.sm, style]} scaleTo={0.96}>
      <Image source={images[issue.imageKey]} style={styles.cover} resizeMode="cover" />
      <View style={styles.body}>
        <Text style={styles.label} numberOfLines={1}>{issue.month}</Text>
        {!!issue.featured && (
          <Text style={styles.featured} numberOfLines={1}>{issue.featured}</Text>
        )}
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
  cover: {
    width: '100%',
    height: 300,
    backgroundColor: colors.navyAlt,
  },
  body: {
    paddingVertical: 14,
    paddingHorizontal: spacing.sm,
  },
  label: {
    ...type.h4,
    fontSize: 12.5,
    textAlign: 'center',
    color: colors.textPrimary,
  },
  featured: {
    ...type.caption,
    fontSize: 10,
    textAlign: 'center',
    color: colors.gold,
    textTransform: 'none',
    marginTop: 2,
  },
});
