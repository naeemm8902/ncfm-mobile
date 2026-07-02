import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, radii, type } from '../theme';

const VARIANTS = {
  navy: { bg: colors.navy, text: colors.white },
  primary: { bg: colors.primary, text: colors.white },
  gold: { bg: colors.gold, text: colors.black },
  white: { bg: colors.white, text: colors.primary },
  outline: { bg: 'transparent', text: colors.textPrimary, border: colors.borderStrong },
  outlineActive: { bg: colors.primary, text: colors.white },
};

export default function Pill({ label, variant = 'navy', size = 'sm', style, textStyle }) {
  const v = VARIANTS[variant] || VARIANTS.navy;
  const small = size === 'sm';
  return (
    <View
      style={[
        styles.base,
        {
          backgroundColor: v.bg,
          borderWidth: v.border ? 1 : 0,
          borderColor: v.border || 'transparent',
          paddingVertical: small ? 5 : 7,
          paddingHorizontal: small ? 11 : 14,
        },
        style,
      ]}
    >
      <Text
        style={[
          type.caption,
          { color: v.text, fontSize: small ? 10.5 : 12, textTransform: 'none' },
          textStyle,
        ]}
        numberOfLines={1}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.pill,
    alignSelf: 'flex-start',
  },
});
