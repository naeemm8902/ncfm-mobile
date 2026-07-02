import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors, radii, spacing, type } from '../theme';

export default function FormField({
  label,
  required,
  optional,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  style,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <View style={[styles.wrap, style]}>
      {!!label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={{ color: colors.danger }}> *</Text>}
          {optional && <Text style={styles.optional}>  (optional)</Text>}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textFaint}
        multiline={multiline}
        numberOfLines={multiline ? numberOfLines : 1}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={[
          styles.input,
          multiline && { height: numberOfLines * 22 + 20, textAlignVertical: 'top', paddingTop: 12 },
          focused && styles.inputFocused,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: spacing.md,
  },
  label: {
    ...type.h4,
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 6,
  },
  optional: {
    ...type.bodySmall,
    color: colors.textFaint,
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14.5,
    fontFamily: type.body.fontFamily,
    color: colors.textPrimary,
    backgroundColor: colors.white,
  },
  inputFocused: {
    borderColor: colors.primary,
  },
});
