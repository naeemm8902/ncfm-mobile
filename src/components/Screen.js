import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import Footer from './Footer';

export default function Screen({ children, footer = true, scroll = true, contentStyle, bg = colors.surface }) {
  if (!scroll) {
    return <View style={[styles.flex, { backgroundColor: bg }]}>{children}</View>;
  }
  return (
    <ScrollView
      style={[styles.flex, { backgroundColor: bg }]}
      contentContainerStyle={contentStyle}
      showsVerticalScrollIndicator={false}
    >
      {children}
      {footer && <Footer />}
    </ScrollView>
  );
}

export function Section({ children, style, first = false }) {
  return <View style={[styles.section, first && styles.sectionFirst, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  section: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
  },
  sectionFirst: {
    paddingTop: spacing.lg,
  },
});
