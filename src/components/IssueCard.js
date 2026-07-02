import React from 'react';
import { Pressable, Image, Text, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';

export default function IssueCard({ issue, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.wrap, style]}>
      <Image source={images[issue.imageKey]} style={styles.cover} resizeMode="cover" />
      <Text style={styles.label} numberOfLines={1}>{issue.month}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  cover: {
    width: '100%',
    aspectRatio: 200 / 280,
    borderRadius: radii.sm,
    backgroundColor: colors.surfaceAlt,
    ...shadow.sm,
  },
  label: {
    ...type.h4,
    fontSize: 12.5,
    textAlign: 'center',
    color: colors.textPrimary,
    marginTop: 8,
  },
});
