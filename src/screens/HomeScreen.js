import React from 'react';
import { View, Text, Image, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import { allArticles } from '../data/categories';
import { homeTestimonials } from '../data/siteContent';

import Screen, { Section } from '../components/Screen';
import SectionHeader from '../components/SectionHeader';
import PartnerMessageCard from '../components/PartnerMessageCard';
import Marquee from '../components/Marquee';
import ArticleCard from '../components/ArticleCard';
import AdvertiserSpotlight from '../components/AdvertiserSpotlight';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Button from '../components/Button';
import MediaKitModal from '../components/MediaKitModal';
import Pill from '../components/Pill';
import Reveal, { stagger } from '../components/Reveal';

const partnerLogoKeys = [
  'partnerLogoDemos',
  'partnerLogoPenthRex',
  'partnerLogoCtn40',
  'partnerLogoSalvationArmy',
  'partnerLogo1stHour',
  'partnerLogoSwanson',
  'partnerLogoLee',
  'partnerLogoMollyMa',
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const featuredArticles = allArticles.slice(0, 6);

  return (
    <Screen>
      {/* HERO */}
      <Reveal distance={0}>
        <View style={styles.hero}>
          <Image source={images.heroBg} style={styles.heroBg} resizeMode="cover" />
          <Image source={images.heroPortrait} style={styles.heroPortrait} resizeMode="contain" />
          <View style={styles.heroContent}>
            {/* <Pill label="December 2025 Issue" variant="gold" style={{ marginBottom: 10 }} /> */}
            <Text style={styles.heroTitle}>December Issue Available!</Text>

            <View style={styles.heroRow}>
              <Image source={images.issueCover1} style={styles.heroCover} resizeMode="cover" />
              <View style={styles.heroTextCol}>
                <Text style={styles.heroName}>Megan Alexander</Text>
                <Text style={styles.heroDesc}>Her New Book and Movie About the True Meaning of Christmas</Text>
                <Text style={styles.heroMore}>and much more!</Text>
              </View>
            </View>

            <View style={styles.heroButtons}>
              <Button title="Read Now" variant="gold" size="sm" onPress={() => navigation.navigate('Issues')} />
              <Button title="Subscribe" variant="outlineLight" size="sm" onPress={() => navigation.navigate('Subscribe')} />
            </View>
          </View>
        </View>
      </Reveal>

      <Section first>
        <Reveal delay={60}>
          <PartnerMessageCard />
        </Reveal>
      </Section>

      {/* PARTNER SPOTLIGHT */}
      <Section>
        <Reveal delay={100}>
          <SectionHeader eyebrow="Corporate Community Partners" title="Partner spotlight" />
          <Text style={styles.bodyText}>
            Thank you to our Corporate Community Partners — local organizations investing in trustworthy,
            family-centered publishing across Middle Tennessee.
          </Text>
          <Image source={images.communityPartnerBadge} style={styles.badgeImg} resizeMode="contain" />

          <View style={styles.marqueeCard}>
            <Marquee speed={35}>
              {partnerLogoKeys.map((key) => (
                <Image key={key} source={images[key]} style={styles.marqueeLogo} resizeMode="contain" />
              ))}
            </Marquee>
          </View>
        </Reveal>
      </Section>

      {/* FEATURED ARTICLES */}
      <Section>
        <Reveal delay={100}>
          <SectionHeader
            eyebrow="Latest"
            title="Featured articles"
            subtitle="Faith-forward perspectives, practical family help, and Middle Tennessee highlights — refreshed each edition."
          />
        </Reveal>
        <View style={styles.grid}>
          {featuredArticles.map((a, i) => (
            <Reveal key={a.slug} delay={stagger(i, 60, 360)} distance={16} style={styles.gridItem}>
              <ArticleCard
                article={a}
                onPress={() => navigation.navigate('ArticleDetail', { slug: a.slug, categorySlug: a.category })}
              />
            </Reveal>
          ))}
        </View>
        <Button
          title="Browse categories"
          variant="outline"
          style={{ alignSelf: 'center', marginTop: spacing.lg }}
          onPress={() => navigation.navigate('Categories')}
        />
      </Section>

      {/* ADVERTISER SPOTLIGHT */}
      <Section>
        <Reveal>
          <AdvertiserSpotlight />
        </Reveal>
      </Section>

      {/* ADVERTISE CTA */}
      <Section>
        <Reveal>
          <ImageBackground source={images.advertiseBg} style={styles.advertiseCta} imageStyle={{ borderRadius: radii.lg }}>
            <LinearGradient colors={['rgba(0,25,60,0.55)', 'rgba(0,25,60,0.8)']} style={[StyleSheet.absoluteFill, { borderRadius: radii.lg }]} />
            <Text style={styles.advertiseTitle}>Want to advertise with us?</Text>
            <Text style={styles.advertiseDesc}>
              Reach families who care about faith, local community, and meaningful spending. Review placements
              and request the media kit on our Advertise page.
            </Text>
            <View style={styles.advertiseButtons}>
              <MediaKitModal triggerSize="sm" />
              <Button title="View advertising overview" variant="outlineLight" size="sm" onPress={() => navigation.navigate('Advertise')} />
            </View>
            <Image source={images.logoWhite} style={styles.advertiseLogo} resizeMode="contain" />
          </ImageBackground>
        </Reveal>
      </Section>

      {/* TESTIMONIALS + NEWSLETTER */}
      <Section>
        <Reveal>
          <SectionHeader eyebrow="Readers" title="What families are saying" subtitle="Real encouragement from neighbors across Middle Tennessee." />
          <TestimonialCarousel items={homeTestimonials} />

          <View style={styles.newsletterCard}>
            <Text style={styles.newsletterTitle}>Newsletter</Text>
            <Text style={styles.newsletterDesc}>
              Get monthly highlights, new articles, and local faith-and-family resources delivered to your inbox.
            </Text>
            <Button title="Subscribe Now" variant="gold" fullWidth onPress={() => navigation.navigate('Subscribe')} />
          </View>
        </Reveal>
      </Section>

      {/* PRAYER CTA */}
      <Section>
        <Reveal>
          <LinearGradient colors={[colors.navyAlt, colors.primary]} style={styles.prayerCta}>
            <Text style={styles.prayerTitle}>Looking for prayer or encouragement?</Text>
            <Text style={styles.prayerDesc}>
              Share a request with our prayer team or explore articles curated to uplift your week.
            </Text>
            <View style={styles.prayerButtons}>
              <Button title="Prayer" variant="gold" size="sm" onPress={() => navigation.navigate('Prayer')} />
              <Button title="Read a featured story" variant="outlineLight" size="sm" onPress={() => navigation.navigate('Categories')} />
            </View>
          </LinearGradient>
        </Reveal>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: '100%',
    minHeight: 340,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
  },
  heroBg: {
    ...StyleSheet.absoluteFillObject,
  },
  heroPortrait: {
    position: 'absolute',
    right: -12,
    bottom: 0,
    width: '46%',
    height: '80%',
  },
  heroContent: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  heroTitle: {
    ...type.h1,
    fontSize: 28,
    color: colors.navy,
    textTransform: 'uppercase',
    marginBottom: spacing.lg,
    textShadowColor: 'rgba(255,255,255,0.7)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  heroRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.lg,
    paddingRight: 96,
  },
  heroCover: {
    width: 100,
    height: 134,
    borderRadius: radii.sm,
    transform: [{ rotate: '-6deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  heroTextCol: {
    flex: 1,
    justifyContent: 'center',
  },
  heroName: {
    ...type.h2,
    fontSize: 21,
    color: colors.white,
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 6,
  },
  heroDesc: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 18,
    color: colors.white,
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  heroMore: {
    ...type.body,
    fontSize: 14.5,
    fontStyle: 'italic',
    fontFamily: type.h4.fontFamily,
    color: colors.white,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  bodyText: {
    ...type.body,
    color: colors.textBody,
    marginBottom: spacing.lg,
  },
  badgeImg: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginBottom: spacing.lg,
  },
  marqueeCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    backgroundColor: colors.white,
  },
  marqueeLogo: {
    width: 90,
    height: 44,
    marginHorizontal: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.md,
  },
  gridItem: {
    width: '48%',
  },
  advertiseCta: {
    borderRadius: radii.lg,
    padding: spacing.lg,
    overflow: 'hidden',
    minHeight: 260,
  },
  advertiseTitle: {
    ...type.h1,
    fontSize: 24,
    color: colors.white,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  advertiseDesc: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.textInverseMuted,
    marginBottom: spacing.lg,
  },
  advertiseButtons: {
    gap: 10,
    alignItems: 'flex-start',
  },
  advertiseLogo: {
    width: 150,
    height: 40,
    marginTop: spacing.xl,
    alignSelf: 'center',
  },
  newsletterCard: {
    marginTop: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: radii.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.lg,
  },
  newsletterTitle: {
    ...type.h3,
    color: colors.primary,
    marginBottom: 8,
  },
  newsletterDesc: {
    ...type.bodySmall,
    color: colors.textBody,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  prayerCta: {
    borderRadius: radii.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  prayerTitle: {
    ...type.h2,
    fontSize: 22,
    color: colors.white,
    marginBottom: 10,
  },
  prayerDesc: {
    ...type.body,
    fontSize: 13.5,
    color: colors.textInverseMuted,
    marginBottom: spacing.lg,
  },
  prayerButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});
