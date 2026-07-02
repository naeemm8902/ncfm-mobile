import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, type } from '../theme';
import { products, productCategories } from '../data/products';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import PillTabs from '../components/PillTabs';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

export default function ShopScreen() {
  const [category, setCategory] = useState('All');
  const filtered = category === 'All' ? products : products.filter((p) => p.category === category);

  return (
    <Screen>
      <LinearGradient colors={['#06493E', '#0A5C4C']} style={styles.hero}>
        <Text style={styles.eyebrow}>Top Seller</Text>
        <Text style={styles.title}>Sale of the Month</Text>
        <Button title="Buy Now →" variant="primary" size="sm" style={{ alignSelf: 'flex-start' }} />
      </LinearGradient>

      <Section first>
        <PartnerMessageCard startIndex={2} />
      </Section>

      <Section>
        <PillTabs options={productCategories} value={category} onChange={setCategory} style={{ marginBottom: spacing.sm }} />
        <Text style={styles.count}>{filtered.length} results found</Text>

        <View style={styles.grid}>
          {filtered.map((p) => (
            <View key={p.id} style={styles.gridItem}>
              <ProductCard product={p} />
            </View>
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    padding: spacing.xl,
    minHeight: 200,
    justifyContent: 'center',
  },
  eyebrow: {
    ...type.eyebrow,
    color: colors.white,
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  title: {
    ...type.h1,
    fontSize: 26,
    color: colors.white,
    marginBottom: spacing.lg,
  },
  count: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.md,
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
});
