import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { spacing } from '../theme';
import { categoryList } from '../data/categories';

import Screen, { Section } from '../components/Screen';
import GradientHero from '../components/GradientHero';
import PartnerMessageCard from '../components/PartnerMessageCard';
import CategoryCard from '../components/CategoryCard';

export default function CategoriesScreen() {
  const navigation = useNavigation();

  return (
    <Screen>
      <GradientHero
        imageKey="categoriesHero"
        title="Browse by Category"
        subtitle="Explore faith and family-focused content written and compiled to inform, encourage, and uplift."
        minHeight={220}
      />

      <Section first>
        <PartnerMessageCard startIndex={1} />
      </Section>

      <Section>
        <View style={styles.grid}>
          {categoryList.map((cat) => (
            <CategoryCard
              key={cat.slug}
              category={cat}
              style={styles.gridItem}
              onPress={() => navigation.navigate('CategoryDetail', { slug: cat.slug })}
            />
          ))}
        </View>
      </Section>
    </Screen>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  gridItem: {
    width: '100%',
  },
});
