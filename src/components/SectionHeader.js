import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, type } from '../theme';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left', light = false, style }) {
  const centered = align === 'center';
  return (
    <View style={[styles.wrap, centered && { alignItems: 'center' }, style]}>
      {!!eyebrow && (
        <Text style={[type.eyebrow, { color: colors.gold, textAlign: align, marginBottom: 6 }]}>
          {eyebrow}
        </Text>
      )}
      {!!title && (
        <Text
          style={[
            type.h2,
            { color: light ? colors.white : colors.primary, textAlign: align, marginBottom: subtitle ? 8 : 0 },
          ]}
        >
          {title}
        </Text>
      )}
      {!!subtitle && (
        <Text style={[type.body, { color: light ? colors.textInverseMuted : colors.textBody, textAlign: align }]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
});
