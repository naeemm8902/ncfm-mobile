import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing } from '../theme';

export default function Card({ children, style, padded = true, elevated = true, bordered = true, bg = colors.surface }) {
  return (
    <View
      style={[
        styles.base,
        { backgroundColor: bg },
        padded && { padding: spacing.lg },
        elevated && shadow.sm,
        bordered && { borderWidth: 1, borderColor: colors.border },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.lg,
  },
});
