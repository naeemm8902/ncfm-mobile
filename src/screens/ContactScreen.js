import React, { useState } from 'react';
import { View, Text, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, radii, shadow, spacing, type } from '../theme';
import { contactInfo } from '../data/siteContent';

import Screen, { Section } from '../components/Screen';
import GradientHero from '../components/GradientHero';
import PartnerMessageCard from '../components/PartnerMessageCard';
import Button from '../components/Button';
import FormField from '../components/FormField';
import MediaKitModal from '../components/MediaKitModal';
import { Checkbox } from '../components/Choice';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '', subscribe: false });
  const [sent, setSent] = useState(false);

  return (
    <Screen>
      <GradientHero
        imageKey="contactHero"
        title="Contact Us"
        subtitle="We would love to hear from you — questions, story ideas, prayer requests, or a note of encouragement."
        minHeight={230}
      />

      <Section first>
        <PartnerMessageCard />
      </Section>

      <Section>
        <View style={styles.ctaRow}>
          <MediaKitModal triggerSize="sm" />
          <Button title="Advertising overview" variant="outline" size="sm" onPress={() => navigation.navigate('Advertise')} />
        </View>
      </Section>

      <Section>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Contact information</Text>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Mailing address</Text>
            <Text style={styles.infoValue}>{contactInfo.address}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Phone</Text>
            <Text style={styles.infoValue} onPress={() => Linking.openURL(contactInfo.phoneHref)}>{contactInfo.phone}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>General email</Text>
            <Text style={styles.infoValue} onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}>{contactInfo.email}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Publisher / advertising</Text>
            <Text style={styles.infoValue} onPress={() => Linking.openURL(`mailto:${contactInfo.publisherEmail}`)}>{contactInfo.publisherEmail}</Text>
          </View>
        </View>
      </Section>

      <Section>
        <View style={styles.formCard}>
          {sent ? (
            <View style={styles.success}>
              <Text style={styles.formTitle}>Message sent!</Text>
              <Text style={styles.formDesc}>Thanks for reaching out — we&apos;ll be in touch soon.</Text>
              <Button title="Send another message" variant="outline" onPress={() => setSent(false)} />
            </View>
          ) : (
            <>
              <Text style={styles.formTitle}>Send a message</Text>
              <Text style={styles.formDesc}>
                Use this form for general questions and feedback. For ad rates, use Request a Media Kit above.
              </Text>
              <View style={styles.row2}>
                <FormField label="First Name" value={form.firstName} onChangeText={(v) => setForm({ ...form, firstName: v })} style={{ flex: 1, marginRight: 8 }} />
                <FormField label="Last Name" value={form.lastName} onChangeText={(v) => setForm({ ...form, lastName: v })} style={{ flex: 1 }} />
              </View>
              <View style={styles.row2}>
                <FormField label="Email" value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} keyboardType="email-address" autoCapitalize="none" style={{ flex: 1, marginRight: 8 }} />
                <FormField label="Phone" value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} keyboardType="phone-pad" style={{ flex: 1 }} />
              </View>
              <FormField label="Message" value={form.message} onChangeText={(v) => setForm({ ...form, message: v })} multiline numberOfLines={5} />
              <Checkbox
                label="I would like to receive updates from Nashville Christian Family Magazine"
                checked={form.subscribe}
                onToggle={() => setForm({ ...form, subscribe: !form.subscribe })}
                style={{ marginBottom: spacing.lg }}
              />
              <Button title="Send Message" variant="navy" fullWidth onPress={() => setSent(true)} />
            </>
          )}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
  },
  infoCard: {
    backgroundColor: colors.navyDeep,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  infoTitle: {
    ...type.h2,
    fontSize: 20,
    color: colors.white,
    marginBottom: spacing.lg,
  },
  infoBlock: {
    marginBottom: spacing.md,
  },
  infoLabel: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 4,
  },
  infoValue: {
    ...type.body,
    fontSize: 13.5,
    color: 'rgba(255,255,255,0.9)',
  },
  formCard: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.sm,
  },
  formTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  formDesc: {
    ...type.body,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textBody,
    marginBottom: spacing.lg,
  },
  row2: {
    flexDirection: 'row',
  },
  success: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
  },
});
