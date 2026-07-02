import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, shadow, spacing, type } from '../theme';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import Button from '../components/Button';
import FormField from '../components/FormField';

export default function SubscribeScreen() {
  const [form, setForm] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
  }

  return (
    <Screen>
      <LinearGradient colors={[colors.navyDeep, colors.primary]} style={styles.hero}>
        <Text style={styles.title}>Newsletter Signup</Text>
        <Text style={styles.subtitle}>
          Stay connected with monthly encouragement for faith, family, and community across Middle
          Tennessee.
        </Text>
      </LinearGradient>

      <Section first>
        <PartnerMessageCard />
      </Section>

      <Section>
        {submitted ? (
          <View style={styles.successCard}>
            <View style={styles.successIcon}>
              <Ionicons name="checkmark" size={26} color={colors.white} />
            </View>
            <Text style={styles.successTitle}>You&apos;re subscribed!</Text>
            <Text style={styles.successBody}>
              Thank you, <Text style={{ fontFamily: type.h4.fontFamily }}>{form.name}</Text>. We&apos;ll send
              updates to <Text style={{ fontFamily: type.h4.fontFamily }}>{form.email}</Text>.
            </Text>
          </View>
        ) : (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderTitle}>Join our newsletter</Text>
              <Text style={styles.cardHeaderDesc}>
                Enter your name and email to receive our free monthly publication.
              </Text>
            </View>
            <View style={styles.cardBody}>
              <FormField
                label="Full Name"
                required
                value={form.name}
                onChangeText={(v) => setForm({ ...form, name: v })}
                placeholder="e.g. John Smith"
              />
              <FormField
                label="Email Address"
                required
                value={form.email}
                onChangeText={(v) => setForm({ ...form, email: v })}
                placeholder="e.g. you@example.com"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Button title="Subscribe Now" variant="gold" fullWidth onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: spacing.xl,
    minHeight: 190,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...type.h1,
    fontSize: 26,
    color: colors.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    ...type.body,
    fontSize: 14,
    color: colors.textInverseMuted,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    ...shadow.sm,
  },
  cardHeader: {
    backgroundColor: colors.navyDeep,
    padding: spacing.lg,
  },
  cardHeaderTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.white,
    marginBottom: 8,
  },
  cardHeaderDesc: {
    ...type.body,
    fontSize: 13.5,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
  },
  cardBody: {
    padding: spacing.lg,
  },
  successCard: {
    backgroundColor: colors.successLight,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: '#BBF7D0',
    padding: spacing.xxl,
    alignItems: 'center',
  },
  successIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  successTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.navyDeep,
    marginBottom: 8,
  },
  successBody: {
    ...type.body,
    fontSize: 14,
    color: colors.textBody,
    textAlign: 'center',
    lineHeight: 21,
  },
});
