import React from 'react';
import { Pressable, View, Image, Text, StyleSheet } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';

export default function ProductCard({ product, onPress, style }) {
  return (
    <View style={[styles.card, style]}>
      <View style={styles.imageWrap}>
        <Image source={images[product.imageKey]} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Pressable style={styles.btn} onPress={onPress}>
          <Text style={styles.btnText}>Buy Now</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },
  imageWrap: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: colors.surfaceAlt,
    padding: spacing.xs,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  body: {
    padding: spacing.sm,
    alignItems: 'center',
  },
  title: {
    ...type.bodySmall,
    fontFamily: type.h4.fontFamily,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 8,
    minHeight: 38,
  },
  price: {
    ...type.caption,
    color: colors.textMuted,
    textTransform: 'none',
    marginBottom: 8,
  },
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  btnText: {
    ...type.caption,
    color: colors.white,
    textTransform: 'none',
    fontFamily: type.h4.fontFamily,
  },
});
