import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, radii, shadow, spacing, type } from '../theme';
import images from '../data/images';

import Screen, { Section } from '../components/Screen';
import GradientHero from '../components/GradientHero';
import PartnerMessageCard from '../components/PartnerMessageCard';

const faithStatements = [
  'We believe that the Bible is the authoritative, infallible, inspired Word of God',
  'We believe in God the Father, Maker of Heaven and Earth',
  'We believe in Jesus Christ, who was born of the virgin Mary',
  'We believe in the Holy Spirit, who is presently living in each Christian',
  'We believe in the Trinity: Father, Son, and Holy Spirit',
  'We believe that Jesus Christ, fully God and fully man, lived a sinless life, was crucified and died, and on the third day rose from the dead',
  'We believe that He will return to this earth',
  'We believe that all have sinned and fall short of the glory of God, and that all who confess their sins before God, believe in Jesus Christ, and accept Him into their hearts are saved and will have eternal life in Heaven with God the Father',
  'We believe that, being directed and inspired by these truths, each Christian is called to be salt and light in the world',
];

export default function AboutScreen() {
  return (
    <Screen>
      <GradientHero
        imageKey="aboutHero"
        title="About Us"
        subtitle="Sharing faith. Inspiring families. Serving our community."
        minHeight={230}
      />

      <Section first>
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: type.h3.fontFamily }}>Nashville Christian Family Magazine</Text> is a free
          monthly magazine covering Christian faith, family, and everyday life. We exist to serve Christians
          and the community at large by providing meaningful, faith-based content that strengthens families
          and encourages positive living throughout Middle Tennessee.
        </Text>
        <Text style={styles.paragraph}>
          Our publication shares relevant and timely stories for readers of all ages, including content
          related to faith, health, parenting, youth, finances, Christian entertainment, missions, church
          leadership, and more.
        </Text>
      </Section>

      <Section>
        <PartnerMessageCard startIndex={1} />
      </Section>

      <Section>
        <Text style={styles.h2}>
          Our <Text style={styles.accent}>Mission</Text>
        </Text>
        <Text style={styles.paragraph}>
          <Text style={{ fontFamily: type.h4.fontFamily }}>Nashville Christian Family Magazine</Text> exists to
          provide Christians and the community at large with ways to strengthen and grow as a part of the
          Middle Tennessee Christian family.
        </Text>
        <Text style={styles.paragraph}>
          This local monthly publication is designed to promote positive living by sharing with readers of
          all ages relevant and timely news and information related to health, faith, parenting, youth,
          finances, Christian entertainment, missions, church leaders, and much more.
        </Text>
      </Section>

      <Section>
        <View style={styles.faithCard}>
          <Text style={[styles.h2, { textAlign: 'center' }]}>
            Statement of <Text style={styles.accent}>Faith</Text>
          </Text>
          <Text style={[styles.paragraph, { textAlign: 'center' }]}>
            We believe the following truths guide and inspire everything we do:
          </Text>
          {faithStatements.map((item, i) => (
            <View key={i} style={styles.listRow}>
              <View style={styles.dot} />
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section>
        <Text style={[styles.h2, { textAlign: 'center' }]}>
          About the <Text style={styles.accent}>Publisher</Text>
        </Text>
        <View style={styles.personCard}>
          <Image source={images.publisher} style={styles.personPhoto} resizeMode="cover" />
          <Text style={styles.personName}>Mr. Robert Stringfellow</Text>
          <Text style={styles.personRole}>Owner and Publisher</Text>
          <Text style={styles.bioText}>
            <Text style={{ fontFamily: type.h4.fontFamily }}>Robert Stringfellow</Text> is the owner and
            publisher of <Text style={{ fontFamily: type.h4.fontFamily }}>Nashville Christian Family Magazine</Text>.
          </Text>
          <Text style={styles.bioText}>
            Robert and his wife reside in Spring Hill, Tennessee. They have four children and four
            grandchildren: Sage, Josie, Sophie, and Locke, along with two cats, Rocky and FE.
          </Text>
          <Text style={styles.bioText}>
            Robert enjoys the outdoors, is an avid year-round runner, and is an enthusiastic sports fan, with
            college football being his favorite. He is a long-time member and serves on the Board of
            Directors of the Tennessee Christian Chamber of Commerce.
          </Text>
          <Text style={styles.bioText}>
            Robert and his wife are active members of Station Hill Church in Spring Hill, Tennessee.
          </Text>
          <Image source={images.stringfellowFamily} style={styles.familyPhoto} resizeMode="cover" />
        </View>
      </Section>

      <Section>
        <Text style={[styles.h2, { textAlign: 'center' }]}>
          About the <Text style={styles.accent}>Designer</Text>
        </Text>
        <View style={styles.personCard}>
          <View style={styles.designerLogoWrap}>
            <Image source={images.designerLogo} style={styles.designerLogo} resizeMode="contain" />
          </View>
          <Text style={styles.personName}>Red Ridge Entertainment</Text>
          <Text style={styles.personRole}>Production and Art Direction</Text>
          <Text style={styles.bioText}>
            <Text style={{ fontFamily: type.h4.fontFamily }}>Nashville Christian Family Magazine</Text> is
            designed and produced by{' '}
            <Text style={{ fontFamily: type.h4.fontFamily }}>Red Ridge Entertainment Inc.</Text>, a
            Nashville-based entertainment and media company.
          </Text>
          <Text style={styles.bioText}>
            Founded in 1985, Red Ridge Entertainment has been a cornerstone of the Nashville entertainment
            community for decades, with deep roots in television, film, music, and media production —
            bringing both industry experience and a heart for faith-driven content to every project.
          </Text>
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    ...type.body,
    fontSize: 14.5,
    lineHeight: 22,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  h2: {
    ...type.h2,
    fontSize: 22,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  accent: {
    color: colors.primary,
  },
  faithCard: {
    backgroundColor: colors.surfaceWarm,
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.goldLight,
    marginBottom: spacing.lg,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.textPrimary,
    marginTop: 8,
  },
  listText: {
    ...type.body,
    fontSize: 14,
    lineHeight: 21,
    color: colors.textPrimary,
    flex: 1,
  },
  personCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: radii.lg,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  personPhoto: {
    width: 160,
    height: 160,
    borderRadius: radii.xxl,
    backgroundColor: colors.primary,
    marginBottom: spacing.md,
    ...shadow.md,
  },
  designerLogoWrap: {
    width: 160,
    height: 160,
    borderRadius: radii.xxl,
    backgroundColor: '#231F20',
    marginBottom: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    ...shadow.md,
  },
  designerLogo: {
    width: '100%',
    height: '100%',
  },
  personName: {
    ...type.h3,
    color: colors.black,
    marginBottom: 4,
    textAlign: 'center',
  },
  personRole: {
    ...type.body,
    fontSize: 14,
    color: colors.primary,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  bioText: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  familyPhoto: {
    width: '100%',
    height: 180,
    borderRadius: radii.md,
    marginTop: spacing.md,
    backgroundColor: colors.surfaceAlt,
  },
});
