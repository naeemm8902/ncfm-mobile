import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, type } from '../theme';
import { categoryConfig, getArticlesByCategory } from '../data/categories';

import Screen, { Section } from '../components/Screen';
import GradientHero from '../components/GradientHero';
import PartnerMessageCard from '../components/PartnerMessageCard';
import ArticleCard from '../components/ArticleCard';
import PillTabs from '../components/PillTabs';

export default function CategoryDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const slug = route.params?.slug || 'spiritual';
  const cat = categoryConfig[slug] || categoryConfig.spiritual;
  const [activeTag, setActiveTag] = useState('All');

  const articles = getArticlesByCategory(slug);

  return (
    <Screen>
      <GradientHero imageKey={cat.imageKey} title={cat.label} minHeight={200} align="center" />

      <Section first>
        <Pressable
          onPress={() => navigation.navigate('Categories')}
          style={styles.backRow}
          hitSlop={8}
        >
          <Ionicons name="arrow-back" size={16} color={colors.primary} />
          <Text style={styles.backText}>Back to categories</Text>
        </Pressable>

        <PillTabs options={['All', ...cat.tags]} value={activeTag} onChange={setActiveTag} style={{ marginBottom: spacing.md }} />

        <Text style={styles.count}>
          Showing {articles.length} article{articles.length !== 1 ? 's' : ''}
        </Text>
      </Section>

      <Section>
        <PartnerMessageCard startIndex={2} />
      </Section>

      <Section>
        <View style={styles.grid}>
          {articles.map((a) => (
            <View key={a.slug} style={styles.gridItem}>
              <ArticleCard
                article={a}
                onPress={() => navigation.navigate('ArticleDetail', { slug: a.slug, categorySlug: a.category })}
              />
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: spacing.lg,
  },
  backText: {
    ...type.h4,
    fontSize: 13.5,
    color: colors.primary,
  },
  count: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  gridItem: {
    width: '47%',
  },
});
