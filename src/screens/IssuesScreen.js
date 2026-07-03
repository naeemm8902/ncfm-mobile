import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { colors, radii, shadow, spacing, type } from '../theme';
import { years, issues2025, currentIssue } from '../data/issues';
import images from '../data/images';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import PillTabs from '../components/PillTabs';
import IssueSlider from '../components/IssueSlider';
import Button from '../components/Button';
import MediaKitModal from '../components/MediaKitModal';
import Pill from '../components/Pill';
import Reveal from '../components/Reveal';

export default function IssuesScreen() {
  const navigation = useNavigation();
  const [year, setYear] = useState('2025');

  const yearIssues = year === '2025' ? issues2025 : [];

  return (
    <Screen>
      <Section first>
        <Reveal>
          <LinearGradient colors={[colors.navyDeep, colors.navyAlt, colors.primary]} style={styles.currentCard}>
            <View style={styles.glow} pointerEvents="none" />
            <Pill label="Out Now" variant="gold" style={{ marginBottom: 10 }} />
            <Text style={styles.eyebrow}>Current Issue</Text>

            <View style={styles.heroRow}>
              <Image source={images[currentIssue.coverImageKey]} style={styles.cover} resizeMode="cover" />
              <View style={styles.heroTextCol}>
                <Text style={styles.month}>{currentIssue.monthLabel}</Text>
                <Text style={styles.featuring}>
                  Featuring <Text style={{ fontFamily: type.h4.fontFamily, color: colors.white }}>{currentIssue.featured}</Text>
                </Text>
                <Text style={styles.subtitle} numberOfLines={3}>{currentIssue.subtitle}</Text>
              </View>
            </View>

            <View style={styles.buttonRow}>
              <Button title="Read Now" variant="gold" size="sm" />
              <Button title="Newsletter" variant="outlineLight" size="sm" onPress={() => navigation.navigate('Subscribe')} />
              <MediaKitModal triggerSize="sm" triggerVariant="outlineLight" triggerLabel="Media Kit" />
            </View>
          </LinearGradient>
        </Reveal>
      </Section>

      <Section>
        <Reveal delay={60}>
          <PartnerMessageCard />
        </Reveal>
      </Section>

      <Section>
        <Reveal delay={100}>
          <View style={styles.archiveHeader}>
            <View>
              <Text style={styles.archiveEyebrow}>Archive by Year</Text>
              <Text style={styles.archiveTitle}>Every issue, all in one place</Text>
            </View>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>{yearIssues.length}</Text>
              <Text style={styles.countLabel}>issues</Text>
            </View>
          </View>
          <PillTabs options={years} value={year} onChange={setYear} style={{ marginBottom: spacing.lg }} />
        </Reveal>
      </Section>

      {/* One-at-a-time slideshow — swipe or use the arrows */}
      <Reveal delay={140}>
        {yearIssues.length > 0 ? (
          <IssueSlider issues={yearIssues} />
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No issues archived for {year} yet — check back soon.</Text>
          </View>
        )}
      </Reveal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  currentCard: {
    minHeight: 340,
    borderRadius: radii.xl,
    padding: spacing.lg,
    paddingTop: spacing.xl,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    ...shadow.lg,
  },
  glow: {
    position: 'absolute',
    top: -60,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(208,161,0,0.18)',
  },
  eyebrow: {
    ...type.eyebrow,
    color: 'rgba(255,255,255,0.7)',
    marginBottom: spacing.lg,
  },
  heroRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  cover: {
    width: 110,
    height: 148,
    borderRadius: radii.sm,
    backgroundColor: colors.surfaceAlt,
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
  month: {
    ...type.h2,
    fontSize: 24,
    color: colors.white,
    marginBottom: 6,
  },
  featuring: {
    ...type.body,
    fontSize: 13.5,
    color: 'rgba(255,255,255,0.92)',
    marginBottom: 6,
  },
  subtitle: {
    ...type.body,
    fontSize: 12.5,
    color: 'rgba(255,255,255,0.75)',
    lineHeight: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  archiveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: spacing.lg,
  },
  archiveEyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 6,
  },
  archiveTitle: {
    ...type.h3,
    fontSize: 18,
    color: colors.textPrimary,
  },
  countBadge: {
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  countText: {
    ...type.h2,
    fontSize: 20,
    color: colors.primary,
  },
  countLabel: {
    ...type.caption,
    fontSize: 9.5,
    color: colors.primary,
    textTransform: 'uppercase',
  },
  emptyState: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xxl,
    padding: spacing.xl,
    borderRadius: radii.lg,
    backgroundColor: colors.surfaceAlt,
    alignItems: 'center',
  },
  emptyText: {
    ...type.bodySmall,
    color: colors.textMuted,
    textAlign: 'center',
  },
});
