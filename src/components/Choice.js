import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';

export function Checkbox({ label, checked, onToggle, style }) {
  return (
    <Pressable onPress={onToggle} style={[styles.row, style]} hitSlop={6}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked && <Ionicons name="checkmark" size={13} color={colors.white} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export function RadioOption({ label, selected, onSelect, style }) {
  return (
    <Pressable onPress={onSelect} style={[styles.row, style]} hitSlop={6}>
      <View style={[styles.radio, selected && styles.radioSelected]}>
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

export function RadioGroup({ options, value, onChange, style }) {
  return (
    <View style={[{ flexDirection: 'row', gap: spacing.lg }, style]}>
      {options.map((opt) => (
        <RadioOption key={opt} label={opt} selected={value === opt} onSelect={() => onChange(opt)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  box: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  boxChecked: {
    backgroundColor: colors.navy,
    borderColor: colors.navy,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: colors.borderStrong,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  radioSelected: {
    borderColor: colors.navy,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.navy,
  },
  label: {
    ...type.body,
    fontSize: 14,
    color: colors.textPrimary,
    flexShrink: 1,
  },
});
