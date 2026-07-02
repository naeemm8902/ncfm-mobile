import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii, shadow, spacing, type } from '../theme';
import { salvationSteps, sinnersPrayer } from '../data/prayerData';

import Screen, { Section } from '../components/Screen';
import GradientHero from '../components/GradientHero';
import PartnerMessageCard from '../components/PartnerMessageCard';
import Button from '../components/Button';
import FormField from '../components/FormField';
import { RadioGroup, Checkbox } from '../components/Choice';

export default function PrayerScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', prayer: '', urgent: '', replyFromTeam: false, keepPrivate: false,
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <Screen>
      <GradientHero
        gradientColors={[colors.navyAlt, colors.navy]}
        title="Do You Need Prayer?"
        subtitle="We know life can sometimes be overwhelming, and no one should have to go through it alone. Requesting prayer is not a sign of weakness, but of wisdom."
        minHeight={200}
      />

      <Section first>
        <PartnerMessageCard startIndex={1} />
      </Section>

      <Section>
        <View style={styles.formCard}>
          {submitted ? (
            <View style={styles.success}>
              <Text style={styles.formTitle}>Your request has been received</Text>
              <Text style={styles.formDesc}>Our prayer team will lift this up with care.</Text>
              <Button title="Submit another request" variant="outline" onPress={() => setSubmitted(false)} />
            </View>
          ) : (
            <>
              <Text style={styles.formTitle}>Prayer request</Text>
              <Text style={styles.formDesc}>
                Share as much or as little as you are comfortable with. Our team receives each request with
                care.
              </Text>
              <FormField label="Name" value={form.name} onChangeText={(v) => setForm({ ...form, name: v })} />
              <FormField label="Email" value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} keyboardType="email-address" autoCapitalize="none" />
              <FormField label="Phone" optional value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} keyboardType="phone-pad" />
              <FormField label="Prayer request" value={form.prayer} onChangeText={(v) => setForm({ ...form, prayer: v })} multiline numberOfLines={5} />

              <Text style={styles.fieldLabel}>Urgent</Text>
              <RadioGroup options={['Yes', 'No']} value={form.urgent} onChange={(v) => setForm({ ...form, urgent: v })} style={{ marginBottom: spacing.lg }} />

              <Checkbox
                label="I would like a reply from the prayer team"
                checked={form.replyFromTeam}
                onToggle={() => setForm({ ...form, replyFromTeam: !form.replyFromTeam })}
                style={{ marginBottom: spacing.md }}
              />
              <Checkbox
                label="Keep this request private"
                checked={form.keepPrivate}
                onToggle={() => setForm({ ...form, keepPrivate: !form.keepPrivate })}
                style={{ marginBottom: spacing.lg }}
              />

              <Button title="Submit" variant="navy" fullWidth onPress={() => setSubmitted(true)} />
            </>
          )}
        </View>
      </Section>

      <Section>
        <View style={styles.warmCard}>
          <Text style={styles.warmTitle}>Our commitment to pray</Text>
          <Text style={styles.warmBody}>
            Your prayer request is important to us. Each request is received with care and prayed over by
            our dedicated prayer team.
          </Text>
          <Text style={styles.warmBody}>
            We respect your privacy and will treat your request with confidentiality. You are not alone.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.eyebrow}>Free Bible</Text>
          <Text style={styles.warmBody}>
            If you need a Bible at no cost, send us an email — we will help you get one.
          </Text>
          <Button title="Request a Free Bible" variant="gold" style={{ alignSelf: 'center' }} />
        </View>
      </Section>

      <Section>
        <View style={styles.formCard}>
          <Text style={styles.eyebrow}>Plan of Salvation</Text>
          <Text style={styles.formTitle}>God&apos;s Plan of Salvation</Text>

          {salvationSteps.map((step, i) => (
            <View key={i} style={styles.stepRow}>
              <Text style={styles.stepTitle}>
                <Text style={styles.stepNum}>{i + 1}. </Text>
                {step.title}
              </Text>
              {step.verses.map((v, j) => (
                <View key={j} style={styles.verseBlock}>
                  <Text style={styles.verseText}>
                    <Text style={{ fontFamily: type.h4.fontFamily }}>{v.ref}: </Text>
                    {v.text}
                  </Text>
                </View>
              ))}
            </View>
          ))}

          <View style={styles.prayerBox}>
            <Text style={styles.prayerBoxTitle}>
              To accept Christ into your heart and life, pray a simple prayer along these lines:
            </Text>
            <Text style={styles.prayerBoxText}>{sinnersPrayer}</Text>
          </View>

          <Text style={styles.footnote}>
            All scriptures are taken from the New King James Version of the Holy Bible.
          </Text>
        </View>
      </Section>

      <Section>
        <LinearGradient colors={[colors.navyAlt, colors.primary]} style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Looking for Encouragement?</Text>
          <Text style={styles.ctaDesc}>
            Explore articles on faith, family, and community — curated to strengthen your week.
          </Text>
          <Button title="Explore articles" variant="gold" size="sm" style={{ alignSelf: 'flex-start' }} onPress={() => navigation.navigate('Categories')} />
        </LinearGradient>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
  fieldLabel: {
    ...type.h4,
    fontSize: 14,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  success: {
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.md,
  },
  warmCard: {
    backgroundColor: colors.surfaceWarm,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.goldLight,
    padding: spacing.lg,
  },
  warmTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  warmBody: {
    ...type.body,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: '#E4D9BC',
    marginVertical: spacing.lg,
  },
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: spacing.sm,
  },
  stepRow: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: spacing.md,
    marginBottom: spacing.md,
  },
  stepTitle: {
    ...type.h4,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
    lineHeight: 21,
  },
  stepNum: {
    color: colors.gold,
  },
  verseBlock: {
    borderLeftWidth: 3,
    borderLeftColor: colors.gold,
    paddingLeft: 10,
    marginBottom: 6,
  },
  verseText: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 20,
    color: colors.textPrimary,
  },
  prayerBox: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radii.md,
    padding: spacing.md,
    marginTop: spacing.sm,
  },
  prayerBoxTitle: {
    ...type.h4,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 10,
  },
  prayerBoxText: {
    ...type.body,
    fontSize: 14,
    lineHeight: 21,
    fontStyle: 'italic',
    color: colors.textPrimary,
  },
  footnote: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginTop: spacing.md,
  },
  ctaCard: {
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  ctaTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.white,
    marginBottom: 8,
  },
  ctaDesc: {
    ...type.body,
    fontSize: 13.5,
    color: colors.textInverseMuted,
    marginBottom: spacing.lg,
  },
});
