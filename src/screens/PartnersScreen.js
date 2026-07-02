import React, { useState } from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import {
  foundationPartners,
  legacyPartners,
  partnerTestimonials,
  partnerBenefits,
  partnershipIncludes,
  spaceUses,
} from '../data/partnersData';
import { contactInfo } from '../data/siteContent';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import FormField from '../components/FormField';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function PartnersScreen() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  return (
    <Screen>
      {/* Hero */}
      <LinearGradient colors={[colors.navy, colors.navyAlt]} style={styles.hero}>
        <Text style={styles.heroTitle}>Where is God at Work in Your Business?</Text>
        <Text style={styles.heroDesc}>
          The Nashville Christian Family Magazine is a free monthly magazine covering Christian faith,
          family, and more.
        </Text>
        <Image source={images.communityPartnerBadge} style={styles.heroBadge} resizeMode="contain" />
      </LinearGradient>

      <Section first>
        <PartnerMessageCard startIndex={2} />
      </Section>

      <Section>
        <Text style={styles.intro}>
          Corporate Community Partners align their brand with encouraging content, neighborhood goodwill,
          and a publication families actually read — print and digital.
        </Text>
      </Section>

      <Section>
        <TestimonialCarousel items={partnerTestimonials} />
      </Section>

      <Section>
        <View style={{ gap: spacing.md }}>
          {partnerBenefits.map((b) => (
            <View key={b.title} style={styles.benefitCard}>
              <View style={styles.benefitTop}>
                <Text style={styles.benefitTitle}>{b.title}</Text>
                <Ionicons name={b.icon} size={26} color={colors.white} />
              </View>
              <Text style={styles.benefitDesc}>{b.desc}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How the Partnership Works</Text>
          {partnershipIncludes.map((item, i) => (
            <View key={i} style={styles.listRow}>
              <View style={styles.dot} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <View style={{ gap: spacing.md }}>
          <View style={styles.levelCardLight}>
            <Text style={styles.levelTitleDark}>Foundation Level Partner</Text>
            <Text style={styles.levelLimitDark}>Limited to 10 Foundation Partners</Text>
            <Text style={styles.levelDescDark}>
              Half-page color space in 12 issues of Nashville Christian Family — print and digital.
            </Text>
          </View>
          <View style={styles.levelCardDark}>
            <Text style={styles.levelTitleLight}>Legacy Level Partner</Text>
            <Text style={styles.levelLimitLight}>Limited to 6 Legacy Partners</Text>
            <Text style={styles.levelDescLight}>
              Full-page color space in 12 issues of Nashville Christian Family — print and digital.
            </Text>
          </View>
        </View>
      </Section>

      <Section>
        <View style={styles.dashedCard}>
          <Text style={styles.cardTitle}>Use your space each month for...</Text>
          {spaceUses.map((item, i) => (
            <View key={i} style={styles.listRow}>
              <Ionicons name="checkmark" size={16} color={colors.gold} style={{ marginTop: 2 }} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader title="Legacy Partners" />
        <View style={styles.logoGrid}>
          {legacyPartners.map((p) => (
            <Image key={p.alt} source={images[p.imageKey]} style={styles.logoItem} resizeMode="contain" />
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader title="Foundation Partners" />
        <View style={styles.logoGrid}>
          {foundationPartners.map((p) => (
            <Image key={p.alt} source={images[p.imageKey]} style={styles.logoItem} resizeMode="contain" />
          ))}
        </View>
      </Section>

      <Section>
        <LinearGradient colors={[colors.navyDeep, colors.primary]} style={styles.ctaBanner}>
          <Text style={styles.ctaTitle}>Become a Partner and Spread Good News!</Text>
          <Text style={styles.ctaDesc}>Limited to 16 partners total (10 Foundation + 6 Legacy)</Text>
          <View style={styles.publisherRow}>
            <Image source={images.publisherPortrait} style={styles.publisherPhoto} resizeMode="cover" />
            <View style={{ flex: 1 }}>
              <Text style={styles.publisherName}>Contact Robert Stringfellow, Publisher</Text>
              <Text style={styles.publisherContact}>{contactInfo.phone}</Text>
              <Text style={styles.publisherContact}>{contactInfo.publisherEmail}</Text>
            </View>
          </View>
        </LinearGradient>
      </Section>

      <Section>
        <View style={styles.card}>
          <Text style={styles.cardTitleBlue}>Send a partnership inquiry</Text>
          <Text style={styles.formIntro}>Share your organization and goals — we&apos;ll follow up.</Text>
          <View style={styles.row2}>
            <FormField label="First Name" value={form.firstName} onChangeText={(v) => setForm({ ...form, firstName: v })} style={{ flex: 1, marginRight: 8 }} />
            <FormField label="Last Name" value={form.lastName} onChangeText={(v) => setForm({ ...form, lastName: v })} style={{ flex: 1 }} />
          </View>
          <FormField label="Email" value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} keyboardType="email-address" autoCapitalize="none" />
          <FormField label="Phone Number" value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} keyboardType="phone-pad" />
          <FormField label="Message" value={form.message} onChangeText={(v) => setForm({ ...form, message: v })} multiline numberOfLines={4} />
          <Button title="Send inquiry" variant="navy" fullWidth />
        </View>

        <View style={styles.bottomButtons}>
          <Button title="Explore advertising" variant="gold" size="sm" />
          <Button title="Call us" variant="outline" size="sm" icon="call-outline" onPress={() => Linking.openURL(contactInfo.phoneHref)} />
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: spacing.xl,
    alignItems: 'center',
    minHeight: 260,
    justifyContent: 'center',
  },
  heroTitle: {
    ...type.h1,
    fontSize: 24,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDesc: {
    ...type.body,
    fontSize: 14,
    color: colors.textInverseMuted,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  heroBadge: {
    width: 130,
    height: 130,
  },
  intro: {
    ...type.body,
    fontSize: 15,
    lineHeight: 24,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  benefitCard: {
    backgroundColor: colors.navyDeep,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  benefitTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  benefitTitle: {
    ...type.h4,
    fontSize: 14,
    color: colors.white,
    flex: 1,
    marginRight: 10,
  },
  benefitDesc: {
    ...type.bodySmall,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.sm,
  },
  cardTitle: {
    ...type.h3,
    color: colors.primary,
    marginBottom: spacing.md,
  },
  cardTitleBlue: {
    ...type.h3,
    color: colors.primary,
    marginBottom: 6,
  },
  formIntro: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primary,
    marginTop: 7,
  },
  listText: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 20,
    color: colors.textPrimary,
    flex: 1,
  },
  levelCardLight: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    ...shadow.sm,
  },
  levelCardDark: {
    backgroundColor: colors.navyAlt,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  levelTitleDark: {
    ...type.h2,
    fontSize: 20,
    color: colors.primary,
    marginBottom: 8,
  },
  levelTitleLight: {
    ...type.h2,
    fontSize: 20,
    color: colors.white,
    marginBottom: 8,
  },
  levelLimitDark: {
    ...type.h4,
    fontSize: 13.5,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  levelLimitLight: {
    ...type.h4,
    fontSize: 13.5,
    color: colors.gold,
    marginBottom: 8,
  },
  levelDescDark: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.textBody,
  },
  levelDescLight: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.white,
  },
  dashedCard: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.gold,
    borderRadius: radii.lg,
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  logoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  logoItem: {
    width: '30%',
    height: 60,
  },
  ctaBanner: {
    borderRadius: radii.xl,
    padding: spacing.lg,
  },
  ctaTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.white,
    marginBottom: 8,
  },
  ctaDesc: {
    ...type.bodySmall,
    color: 'rgba(255,255,255,0.85)',
    marginBottom: spacing.lg,
  },
  publisherRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  publisherPhoto: {
    width: 64,
    height: 64,
    borderRadius: radii.lg,
  },
  publisherName: {
    ...type.h4,
    fontSize: 12.5,
    color: colors.gold,
    marginBottom: 4,
  },
  publisherContact: {
    ...type.bodySmall,
    color: colors.white,
  },
  row2: {
    flexDirection: 'row',
  },
  bottomButtons: {
    flexDirection: 'row',
    gap: 10,
    marginTop: spacing.lg,
    flexWrap: 'wrap',
  },
});
