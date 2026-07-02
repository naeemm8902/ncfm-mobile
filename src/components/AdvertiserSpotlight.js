import React, { useState } from 'react';
import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import { advertisers } from '../data/advertiseData';

export default function AdvertiserSpotlight({ style }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = advertisers[activeIndex];

  return (
    <View style={[styles.card, shadow.sm, style]}>
      <Text style={styles.eyebrow}>Thank you to our advertisers</Text>
      <Text style={styles.title}>{active.name}</Text>
      <Text style={styles.desc}>{active.description}</Text>
      <Pressable onPress={() => Linking.openURL(active.siteUrl)}>
        <Text style={styles.link}>Visit partner site</Text>
      </Pressable>

      <Image source={images[active.logoKey]} style={styles.logo} resizeMode="contain" />

      <View style={styles.divider} />

      <View style={styles.thumbRow}>
        {advertisers.map((a, i) => (
          <Pressable
            key={a.name}
            onPress={() => setActiveIndex(i)}
            style={[styles.thumbBtn, i === activeIndex && styles.thumbBtnActive]}
          >
            <Image source={images[a.thumbKey]} style={styles.thumb} resizeMode="contain" />
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
    borderColor: colors.primaryLight,
    padding: spacing.lg,
  },
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 8,
  },
  title: {
    ...type.h3,
    color: colors.primary,
    marginBottom: 8,
  },
  desc: {
    ...type.bodySmall,
    color: colors.textBody,
    marginBottom: 10,
  },
  link: {
    ...type.bodySmall,
    fontFamily: type.h4.fontFamily,
    color: colors.textPrimary,
    textDecorationLine: 'underline',
    marginBottom: spacing.md,
  },
  logo: {
    width: '100%',
    height: 90,
    marginBottom: spacing.md,
  },
  divider: {
    height: 1.5,
    backgroundColor: colors.border,
    marginBottom: spacing.md,
  },
  thumbRow: {
    flexDirection: 'row',
    gap: 8,
  },
  thumbBtn: {
    flex: 1,
    height: 52,
    borderRadius: radii.md,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  thumbBtnActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primarySoft,
    opacity: 1,
  },
  thumb: {
    width: '80%',
    height: '80%',
  },
});
