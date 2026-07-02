import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import { partnerMessages } from '../data/siteContent';
import Button from './Button';

const ROTATE_MS = 6000;

export default function PartnerMessageCard({ startIndex = 0, style }) {
  const [index, setIndex] = useState(((startIndex % partnerMessages.length) + partnerMessages.length) % partnerMessages.length);
  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const id = setInterval(() => {
      Animated.timing(fade, { toValue: 0, duration: 250, useNativeDriver: true }).start(() => {
        setIndex((prev) => (prev + 1) % partnerMessages.length);
        Animated.timing(fade, { toValue: 1, duration: 250, useNativeDriver: true }).start();
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const msg = partnerMessages[index];
  const warm = msg.variant === 'warm';

  return (
    <Animated.View
      style={[
        styles.card,
        shadow.sm,
        { backgroundColor: warm ? colors.surfaceWarm : '#EEF1F6', borderColor: warm ? '#EFDEB4' : '#DCDFE5', opacity: fade },
        style,
      ]}
    >
      <View style={styles.top}>
        <Text style={styles.eyebrow}>Partner Message</Text>
        <Text style={styles.rotate}>{index + 1}/{partnerMessages.length}</Text>
      </View>
      <Text style={styles.title}>{msg.title}</Text>
      <Text style={styles.desc}>{msg.description}</Text>
      <Button title={msg.buttonText} variant="navy" fullWidth />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radii.lg,
    borderWidth: 1,
    padding: spacing.lg,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  eyebrow: {
    ...type.eyebrow,
    fontSize: 10,
    color: colors.navy,
  },
  rotate: {
    ...type.caption,
    color: colors.textPrimary,
    textTransform: 'none',
  },
  title: {
    ...type.h3,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  desc: {
    ...type.bodySmall,
    color: colors.textBody,
    marginBottom: spacing.md,
  },
});
