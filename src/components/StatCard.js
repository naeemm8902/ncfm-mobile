import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';

export default function StatCard({ label, value, style }) {
  return (
    <View style={[styles.card, shadow.sm, style]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '46%',
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    justifyContent: 'center',
    minHeight: 92,
  },
  label: {
    ...type.eyebrow,
    fontSize: 10.5,
    color: colors.gold,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  value: {
    ...type.h2,
    fontSize: 26,
    color: colors.primary,
  },
});
