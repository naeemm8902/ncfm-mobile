import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';

const VARIANTS = {
  primary: { bg: colors.primary, bgPressed: colors.primaryDark, text: colors.white, border: null },
  gold: { bg: colors.gold, bgPressed: colors.goldDark, text: colors.black, border: null },
  outline: { bg: 'transparent', bgPressed: colors.primarySoft, text: colors.primary, border: colors.primary },
  outlineLight: { bg: 'transparent', bgPressed: 'rgba(255,255,255,0.15)', text: colors.white, border: colors.white },
  navy: { bg: colors.navy, bgPressed: colors.navyDeep, text: colors.white, border: null },
  ghost: { bg: 'transparent', bgPressed: colors.surfaceAlt, text: colors.textPrimary, border: null },
};

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  fullWidth = false,
  style,
  textStyle,
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isSmall = size === 'sm';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.base,
        {
          backgroundColor: pressed ? v.bgPressed : v.bg,
          borderColor: v.border || 'transparent',
          borderWidth: v.border ? 1.5 : 0,
          paddingVertical: isSmall ? 9 : 13,
          paddingHorizontal: isSmall ? 16 : 22,
        },
        fullWidth && { width: '100%' },
        disabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={v.text} />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <Ionicons name={icon} size={isSmall ? 14 : 16} color={v.text} style={{ marginRight: 7 }} />
          )}
          <Text
            style={[type.button, { color: v.text, fontSize: isSmall ? 12.5 : 14 }, textStyle]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {icon && iconPosition === 'right' && (
            <Ionicons name={icon} size={isSmall ? 14 : 16} color={v.text} style={{ marginLeft: 7 }} />
          )}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});
