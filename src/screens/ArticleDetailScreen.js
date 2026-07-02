import React from 'react';
import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import { categoryConfig, getArticleBySlug, getArticlesByCategory, allArticles } from '../data/categories';

import Screen, { Section } from '../components/Screen';
import PartnerMessageCard from '../components/PartnerMessageCard';
import ArticleListCard from '../components/ArticleListCard';

export default function ArticleDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { slug, categorySlug } = route.params || {};
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <Screen>
        <Section first>
          <Text style={type.h3}>Article not found</Text>
        </Section>
      </Screen>
    );
  }

  const cat = categoryConfig[categorySlug || article.category] || categoryConfig.spiritual;
  const related = getArticlesByCategory(article.category).filter((a) => a.slug !== slug).slice(0, 5);
  const recent = allArticles.filter((a) => a.slug !== slug).slice(0, 5);

  function openArticle(a) {
    navigation.push('ArticleDetail', { slug: a.slug, categorySlug: a.category });
  }

  return (
    <Screen>
      <Section first>
        <Pressable
          onPress={() => navigation.navigate('CategoryDetail', { slug: cat.slug })}
          style={styles.backRow}
          hitSlop={8}
        >
          <Ionicons name="arrow-back" size={16} color={colors.primary} />
          <Text style={styles.backText}>Back to {cat.label}</Text>
        </Pressable>

        <Text style={styles.eyebrow}>{cat.label}</Text>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.meta}>{article.date} • By {article.author}</Text>

        <Image source={images.articleHero} style={styles.hero} resizeMode="cover" />

        {article.body.map((para, i) => (
          <Text key={i} style={styles.paragraph}>{para}</Text>
        ))}
      </Section>

      <Section>
        <PartnerMessageCard startIndex={3} />
      </Section>

      <Section>
        <Text style={styles.shareHeading}>Share</Text>
        <View style={styles.shareRow}>
          <Pressable style={styles.shareBtn} onPress={() => Linking.openURL('https://facebook.com')}>
            <Ionicons name="logo-facebook" size={15} color={colors.primary} />
            <Text style={styles.shareText}>Facebook</Text>
          </Pressable>
          <Pressable style={styles.shareBtn} onPress={() => Linking.openURL('https://instagram.com')}>
            <Ionicons name="logo-instagram" size={15} color={colors.primary} />
            <Text style={styles.shareText}>Instagram</Text>
          </Pressable>
          <Pressable style={styles.shareBtn} onPress={() => Linking.openURL(`mailto:?subject=${encodeURIComponent(article.title)}`)}>
            <Ionicons name="mail-outline" size={15} color={colors.primary} />
            <Text style={styles.shareText}>Email</Text>
          </Pressable>
        </View>
      </Section>

      <Section>
        <ArticleListCard title="Recent Articles" articles={recent} onPressArticle={openArticle} />
      </Section>

      {related.length > 0 && (
        <Section>
          <ArticleListCard title="Related Articles" articles={related} onPressArticle={openArticle} />
        </Section>
      )}
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
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 8,
  },
  title: {
    ...type.h1,
    fontSize: 24,
    color: colors.primary,
    marginBottom: 10,
  },
  meta: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.lg,
  },
  hero: {
    width: '100%',
    height: 200,
    borderRadius: radii.lg,
    backgroundColor: colors.navyAlt,
    marginBottom: spacing.lg,
  },
  paragraph: {
    ...type.body,
    fontSize: 15,
    lineHeight: 25,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  shareHeading: {
    ...type.eyebrow,
    color: colors.navy,
    marginBottom: spacing.md,
  },
  shareRow: {
    flexDirection: 'row',
    gap: 8,
  },
  shareBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.pill,
    paddingVertical: 10,
  },
  shareText: {
    ...type.caption,
    color: colors.primary,
    textTransform: 'none',
    fontFamily: type.h4.fontFamily,
  },
});
