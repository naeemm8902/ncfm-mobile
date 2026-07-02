import React from 'react';
import { ScrollView, Pressable, Text, StyleSheet } from 'react-native';
import { colors, radii, type } from '../theme';

export default function PillTabs({ options, value, onChange, style }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.row, style]}
    >
      {options.map((opt) => {
        const active = opt === value;
        return (
          <Pressable
            key={opt}
            onPress={() => onChange(opt)}
            style={[styles.pill, active ? styles.pillActive : styles.pillInactive]}
          >
            <Text style={[styles.text, active ? styles.textActive : styles.textInactive]}>{opt}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 8,
    paddingRight: 8,
  },
  pill: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: radii.pill,
    borderWidth: 1,
  },
  pillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  pillInactive: {
    backgroundColor: colors.white,
    borderColor: colors.borderStrong,
  },
  text: {
    ...type.caption,
    textTransform: 'none',
    fontFamily: type.h4.fontFamily,
  },
  textActive: {
    color: colors.white,
  },
  textInactive: {
    color: colors.textPrimary,
  },
});
