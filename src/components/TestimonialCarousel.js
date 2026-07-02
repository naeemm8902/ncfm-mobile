import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';

export default function TestimonialCarousel({ items, style }) {
  const [index, setIndex] = useState(0);
  const t = items[index];
  const total = items.length;

  return (
    <View style={[styles.card, shadow.sm, style]}>
      <Text style={styles.quote}>&ldquo;{t.quote}&rdquo;</Text>
      <Text style={styles.name}>
        {t.name}
        {t.role ? <Text style={styles.role}> — {t.role}</Text> : null}
      </Text>
      <View style={styles.controls}>
        <View style={styles.buttons}>
          <Pressable
            style={styles.btn}
            onPress={() => setIndex((prev) => (prev - 1 + total) % total)}
          >
            <Text style={styles.btnText}>Previous</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => setIndex((prev) => (prev + 1) % total)}>
            <Text style={styles.btnText}>Next</Text>
          </Pressable>
        </View>
        <Text style={styles.count}>{index + 1} / {total}</Text>
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
    padding: spacing.lg,
  },
  quote: {
    ...type.body,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textBody,
    marginBottom: spacing.md,
  },
  name: {
    ...type.h4,
    fontSize: 14,
    color: colors.textPrimary,
  },
  role: {
    fontFamily: type.body.fontFamily,
    fontWeight: '400',
    color: colors.textMuted,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  btnText: {
    ...type.caption,
    color: colors.primary,
    textTransform: 'none',
    fontFamily: type.h4.fontFamily,
  },
  count: {
    ...type.caption,
    color: colors.textFaint,
    textTransform: 'none',
  },
});
