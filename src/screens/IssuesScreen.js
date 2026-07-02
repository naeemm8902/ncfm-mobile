import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, radii, spacing, type } from '../theme';
import { years, issues2025, currentIssue } from '../data/issues';
import images from '../data/images';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import PillTabs from '../components/PillTabs';
import IssueCard from '../components/IssueCard';
import Button from '../components/Button';
import MediaKitModal from '../components/MediaKitModal';

export default function IssuesScreen() {
  const [year, setYear] = useState('2025');

  return (
    <Screen>
      <Section first>
        <View style={styles.currentCard}>
          <Text style={styles.eyebrow}>Current Issue</Text>
          <Text style={styles.month}>{currentIssue.monthLabel}</Text>
          <Text style={styles.featuring}>
            Featuring <Text style={{ fontFamily: type.h4.fontFamily }}>{currentIssue.featured}</Text>
          </Text>
          <Text style={styles.subtitle}>{currentIssue.subtitle}</Text>

          <Image source={images[currentIssue.coverImageKey]} style={styles.cover} resizeMode="cover" />

          <View style={styles.buttonRow}>
            <Button title="Read Now" variant="gold" size="sm" />
            <Button title="Newsletter" variant="primary" size="sm" />
            <MediaKitModal triggerSize="sm" triggerVariant="primary" triggerLabel="Media Kit" />
          </View>
        </View>
      </Section>

      <Section>
        <PartnerMessageCard />
      </Section>

      <Section>
        <Text style={styles.archiveEyebrow}>Archive by Year</Text>
        <PillTabs options={years} value={year} onChange={setYear} style={{ marginBottom: spacing.lg }} />

        <View style={styles.grid}>
          {issues2025.map((issue) => (
            <View key={issue.month} style={styles.gridItem}>
              <IssueCard issue={issue} />
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  currentCard: {},
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 8,
  },
  month: {
    ...type.h1,
    fontSize: 34,
    color: colors.primary,
    marginBottom: 8,
  },
  featuring: {
    ...type.body,
    fontSize: 15,
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    ...type.body,
    fontSize: 14,
    color: colors.textBody,
    marginBottom: spacing.lg,
    lineHeight: 21,
  },
  cover: {
    width: '70%',
    alignSelf: 'center',
    aspectRatio: 400 / 520,
    borderRadius: radii.md,
    backgroundColor: colors.surfaceAlt,
    marginBottom: spacing.lg,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  archiveEyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: spacing.lg,
  },
  gridItem: {
    width: '31%',
  },
});
