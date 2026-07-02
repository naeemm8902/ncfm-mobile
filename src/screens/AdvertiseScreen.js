import React, { useState } from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';
import { placements, demographics, advertiserTestimonials } from '../data/advertiseData';
import { contactInfo } from '../data/siteContent';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import SectionHeader from '../components/SectionHeader';
import StatCard from '../components/StatCard';
import Button from '../components/Button';
import FormField from '../components/FormField';
import MediaKitModal from '../components/MediaKitModal';
import TestimonialCarousel from '../components/TestimonialCarousel';

export default function AdvertiseScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({ name: '', organization: '', email: '', phone: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  return (
    <Screen>
      <LinearGradient colors={[colors.navyDeep, colors.navy]} style={styles.hero}>
        <Text style={styles.heroTitle}>Advertise with Us and Help Bring Good News to Nashville!</Text>
        <Text style={styles.heroDesc}>We are here for you and your business!</Text>
        <View style={styles.heroButtons}>
          <MediaKitModal triggerSize="sm" />
          <Button title="Community partnership" variant="outlineLight" size="sm" onPress={() => navigation.navigate('Partners')} />
        </View>
      </LinearGradient>

      <Section first>
        <PartnerMessageCard startIndex={3} />
      </Section>

      <Section>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>What Sets Nashville Christian Family Apart?</Text>
          <Text style={styles.cardBody}>
            The publication has no competition in this area, and is unique and one of a kind for the
            Christian community in Middle TN, offering a wide variety of content for the entire family.
            Each monthly issue is passed around the house and often given to a relative, friend, neighbor,
            or pastor to read — creating about an eight week shelf life, longer than average for any
            magazine.
          </Text>
        </View>
      </Section>

      <Section>
        <SectionHeader eyebrow="Reach" title="Audience demographics" subtitle="Middle Tennessee families who pick up the magazine, share it at home, and return to trusted advertisers." />
        <View style={styles.statsGrid}>
          {demographics.map((d) => (
            <StatCard key={d.label} label={d.label} value={d.value} />
          ))}
        </View>
      </Section>

      <Section>
        <SectionHeader title="Advertising placement options" />
        <View style={{ gap: spacing.md }}>
          {placements.map((p) => (
            <View key={p.title} style={styles.placementCard}>
              <Text style={styles.placementTitle}>{p.title}</Text>
              <Text style={styles.placementDesc}>{p.desc}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <View style={styles.loyaltyCard}>
          <Text style={styles.loyaltyTitle}>The Difference: Reader Loyalty</Text>
          <Text style={styles.loyaltyBody}>
            Reader loyalty has been a huge part of our success. Because of the emotional tie to our product,
            readers know that by supporting our advertisers, they will help the publication continue.
          </Text>
          <Text style={styles.loyaltyBody}>
            It is not uncommon for an advertiser to tell us that a reader stopped by their business and
            said, "I'm here because I saw your ad in that Christian magazine."
          </Text>
          <MediaKitModal triggerSize="sm" />
        </View>
      </Section>

      <Section>
        <SectionHeader eyebrow="Print & Digital" title="Distribution" />
        <Text style={styles.cardBody}>
          Nashville Christian Family is published monthly and distributed in the Nashville metro area,
          including Williamson, Davidson, Rutherford, Sumner, Wilson, Dickson, Cheatham, and Maury Counties.
          Coverage also extends through television advertising with WHTN TV, the Middle TN affiliate of the
          CTN Network, covering 26 counties in Middle Tennessee.
        </Text>
        <Text style={styles.cardBody}>
          The magazine is also promoted on Christian radio stations 94FM The Fish, Way FM, Bott Radio, Moody
          Radio, and MyGospel365.com. Readers pick up copies at YMCAs, fitness centers, grocery stores,
          restaurants, hospitals, medical and dental offices, coffee shops, Christian schools, banks, book
          stores, and local events.
        </Text>
        <Image source={images.advertiseMap} style={styles.map} resizeMode="contain" />
      </Section>

      <Section>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Media kit</Text>
          <Text style={styles.cardBody}>Watch this brief message before requesting the media kit.</Text>
          <View style={styles.videoPlaceholder}>
            <Text style={styles.videoText}>VIDEO PLACEHOLDER</Text>
          </View>

          <View style={styles.divider} />

          <Text style={styles.cardTitle}>Request the media kit</Text>
          {submitted ? (
            <View style={styles.success}>
              <Text style={styles.successTitle}>Request received!</Text>
              <Text style={styles.cardBody}>
                We'll send your media kit shortly. Call{' '}
                <Text style={styles.link} onPress={() => Linking.openURL(contactInfo.phoneHref)}>{contactInfo.phone}</Text> for
                immediate assistance.
              </Text>
              <Button title="Submit another request" variant="outline" onPress={() => setSubmitted(false)} />
            </View>
          ) : (
            <>
              <Text style={styles.cardBody}>
                Complete the form below to request a media kit. To speak with us immediately, call{' '}
                <Text style={styles.link} onPress={() => Linking.openURL(contactInfo.phoneHref)}>{contactInfo.phone}</Text>.
              </Text>
              <FormField label="Name" required value={form.name} onChangeText={(v) => setForm({ ...form, name: v })} placeholder="Jane Smith" />
              <FormField label="Organization" required value={form.organization} onChangeText={(v) => setForm({ ...form, organization: v })} placeholder="Your Company" />
              <FormField label="Email" required value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} keyboardType="email-address" autoCapitalize="none" />
              <FormField label="Phone" optional value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} keyboardType="phone-pad" />
              <FormField label="Additional Notes" optional value={form.notes} onChangeText={(v) => setForm({ ...form, notes: v })} multiline numberOfLines={3} />
              <Button title="Send Request" variant="gold" fullWidth onPress={() => setSubmitted(true)} />
            </>
          )}
        </View>
      </Section>

      <Section>
        <SectionHeader title="Advertiser testimonials" />
        <TestimonialCarousel items={advertiserTestimonials} />
      </Section>

      <Section>
        <LinearGradient colors={[colors.navyDeep, '#539EFF']} style={styles.talkCard}>
          <Text style={styles.talkTitle}>Prefer to talk directly?</Text>
          <Text style={styles.talkDesc}>Call or email our publication office for a tailored recommendation.</Text>
          <View style={styles.talkButtons}>
            <Button title="Email sales" variant="gold" size="sm" onPress={() => Linking.openURL('mailto:sales@nashchristian.com')} />
            <Button title="Call 615-815-8765" variant="outlineLight" size="sm" onPress={() => Linking.openURL(contactInfo.phoneHref)} />
          </View>
        </LinearGradient>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: spacing.xl,
    minHeight: 220,
    justifyContent: 'center',
  },
  heroTitle: {
    ...type.h1,
    fontSize: 24,
    color: colors.white,
    marginBottom: 10,
    lineHeight: 30,
  },
  heroDesc: {
    ...type.body,
    fontSize: 15,
    color: colors.textInverseMuted,
    marginBottom: spacing.lg,
  },
  heroButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
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
    marginBottom: spacing.sm,
  },
  cardBody: {
    ...type.body,
    fontSize: 14,
    lineHeight: 22,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  placementCard: {
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
    borderRightWidth: 3,
    borderRightColor: colors.gold,
  },
  placementTitle: {
    ...type.h3,
    fontSize: 17,
    color: colors.textPrimary,
    marginBottom: 8,
  },
  placementDesc: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 20,
    color: colors.textBody,
  },
  loyaltyCard: {
    backgroundColor: colors.navyDeep,
    borderRadius: radii.lg,
    padding: spacing.lg,
  },
  loyaltyTitle: {
    ...type.h2,
    fontSize: 20,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  loyaltyBody: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: spacing.md,
  },
  map: {
    width: '100%',
    height: 220,
    marginTop: spacing.sm,
  },
  videoPlaceholder: {
    aspectRatio: 16 / 9,
    backgroundColor: colors.navyAlt,
    borderRadius: radii.lg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  videoText: {
    ...type.caption,
    color: colors.white,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.lg,
  },
  link: {
    color: colors.primary,
    fontFamily: type.h4.fontFamily,
    textDecorationLine: 'underline',
  },
  success: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  successTitle: {
    ...type.h3,
    color: colors.primary,
  },
  talkCard: {
    borderRadius: radii.xl,
    padding: spacing.lg,
  },
  talkTitle: {
    ...type.h2,
    fontSize: 24,
    color: colors.white,
    marginBottom: 8,
  },
  talkDesc: {
    ...type.body,
    fontSize: 14,
    color: colors.white,
    marginBottom: spacing.lg,
  },
  talkButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
