import React from 'react';
import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import { contactInfo, socialLinks, categoryFooterLinks } from '../data/siteContent';
import Button from './Button';

export default function Footer() {
  const navigation = useNavigation();
  const year = new Date().getFullYear();

  return (
    <View style={styles.wrap}>
      <Image source={images.logoWhite} style={styles.logo} resizeMode="contain" />

      <Text style={styles.about}>
        <Text style={{ fontFamily: type.h4.fontFamily }}>Nashville Christian Family magazine</Text>{' '}
        exists to provide Christians and the community at large with ways to strengthen and grow as
        part of the Middle Tennessee Christian family.
      </Text>

      {/* Categories */}
      <View style={styles.block}>
        <Text style={styles.heading}>Categories</Text>
        {categoryFooterLinks.map((c) => (
          <Pressable
            key={c.slug}
            onPress={() => navigation.navigate('CategoryDetail', { slug: c.slug })}
            style={styles.linkRow}
          >
            <Text style={styles.link}>{c.label}</Text>
          </Pressable>
        ))}
      </View>

      {/* Contact */}
      <View style={styles.block}>
        <Text style={styles.heading}>Contact</Text>
        <Text style={styles.body}>{contactInfo.address}</Text>
        <Text style={styles.body}>{contactInfo.phone}</Text>
        <Pressable onPress={() => Linking.openURL(`mailto:${contactInfo.email}`)}>
          <Text style={styles.body}>{contactInfo.email}</Text>
        </Pressable>
      </View>

      {/* Newsletter */}
      <View style={styles.block}>
        <Text style={styles.heading}>Stay Connected</Text>
        <Text style={styles.body}>Monthly encouragement for faith, family, and community.</Text>
        <Button
          title="Newsletter Signup"
          variant="gold"
          size="sm"
          style={{ marginTop: spacing.sm, alignSelf: 'flex-start' }}
          onPress={() => navigation.navigate('Subscribe')}
        />
      </View>

      {/* Social */}
      <View style={styles.socialRow}>
        {socialLinks.map((s) => (
          <Pressable key={s.label} style={styles.socialBtn} onPress={() => Linking.openURL(s.url)}>
            <Ionicons name={s.icon} size={16} color={colors.white} />
            <Text style={styles.socialLabel}>{s.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.divider} />

      <Text style={styles.thanks}>
        SPECIAL THANKS TO THE DAVID DEMARCO FAMILY FOR THEIR SUPPORT OF NASHVILLE CHRISTIAN FAMILY
      </Text>

      <View style={styles.bottomRow}>
        <Text style={styles.bottomLink} onPress={() => navigation.navigate('Contact')}>Contact</Text>
        <Text style={styles.copyright}>© {year} Nashville Christian Family Magazine</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
  },
  logo: {
    width: 190,
    height: 46,
    marginBottom: spacing.lg,
  },
  about: {
    ...type.body,
    fontSize: 13.5,
    lineHeight: 21,
    color: colors.textInverseMuted,
    marginBottom: spacing.xl,
  },
  block: {
    marginBottom: spacing.lg,
  },
  heading: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 10,
  },
  linkRow: {
    paddingVertical: 4,
  },
  link: {
    ...type.body,
    fontSize: 14,
    color: colors.white,
  },
  body: {
    ...type.body,
    fontSize: 13.5,
    color: colors.textInverseMuted,
    marginBottom: 4,
  },
  socialRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: spacing.xs,
    marginBottom: spacing.lg,
  },
  socialBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  socialLabel: {
    ...type.caption,
    color: colors.white,
    textTransform: 'none',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: spacing.lg,
  },
  thanks: {
    ...type.caption,
    color: colors.gold,
    textAlign: 'center',
    lineHeight: 17,
    marginBottom: spacing.lg,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  bottomLink: {
    ...type.bodySmall,
    color: colors.white,
    textDecorationLine: 'underline',
  },
  copyright: {
    ...type.caption,
    color: colors.textInverseMuted,
    textTransform: 'none',
  },
});
