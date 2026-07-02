import React, { useState, useRef } from 'react';
import { View, Text, Image, Pressable, TextInput, StyleSheet, Platform, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import { allArticles } from '../data/categories';
import { useDrawer } from '../navigation/DrawerContext';

export default function AppHeader({ title }) {
  const navigation = useNavigation();
  const { open: openDrawer } = useDrawer();
  const insets = useSafeAreaInsets();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const results =
    query.trim().length > 1
      ? allArticles.filter((a) => a.title.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
      : [];

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
  }

  function goToArticle(article) {
    closeSearch();
    navigation.navigate('ArticleDetail', { slug: article.slug, categorySlug: article.category });
  }

  return (
    <View style={[styles.wrap, { paddingTop: insets.top }]}>
      {/* Announcement strip */}
      <View style={styles.strip}>
        <Image source={images.heyGrace} style={styles.stripLogo} resizeMode="contain" />
        <View style={styles.stripBadge}>
          <Text style={styles.stripBadgeText}>HEY GRACE</Text>
          <Text style={styles.stripBadgeLive}>● LIVE</Text>
        </View>
      </View>

      {/* Main bar */}
      <View style={styles.bar}>
        {searchOpen ? (
          <View style={styles.searchRow}>
            <Ionicons name="search" size={18} color={colors.primary} />
            <TextInput
              ref={inputRef}
              autoFocus
              value={query}
              onChangeText={setQuery}
              placeholder="Search articles…"
              placeholderTextColor={colors.textFaint}
              style={styles.searchInput}
              returnKeyType="search"
            />
            <Pressable onPress={closeSearch} hitSlop={8}>
              <Ionicons name="close" size={20} color={colors.textMuted} />
            </Pressable>
          </View>
        ) : (
          <>
            <Pressable
              onPress={openDrawer}
              style={styles.iconBtn}
              hitSlop={8}
            >
              <Ionicons name="menu" size={26} color={colors.textPrimary} />
            </Pressable>

            <Pressable
              style={styles.logoWrap}
              onPress={() => navigation.navigate('Home')}
              hitSlop={6}
            >
              {title ? (
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
              ) : (
                <Image source={images.logo} style={styles.logo} resizeMode="contain" />
              )}
            </Pressable>

            <View style={styles.rightIcons}>
              <Pressable onPress={() => setSearchOpen(true)} style={styles.iconBtn} hitSlop={8}>
                <Ionicons name="search-outline" size={22} color={colors.textPrimary} />
              </Pressable>
              <Pressable onPress={() => navigation.navigate('Shop')} style={styles.iconBtn} hitSlop={8}>
                <Ionicons name="bag-outline" size={22} color={colors.textPrimary} />
              </Pressable>
            </View>
          </>
        )}
      </View>

      {/* Search results dropdown */}
      {searchOpen && results.length > 0 && (
        <View style={styles.resultsWrap}>
          <FlatList
            data={results}
            keyExtractor={(item) => item.slug}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <Pressable style={styles.resultRow} onPress={() => goToArticle(item)}>
                <Ionicons name="document-text-outline" size={16} color={colors.primary} />
                <Text style={styles.resultText} numberOfLines={1}>{item.title}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
      {searchOpen && query.trim().length > 1 && results.length === 0 && (
        <View style={styles.resultsWrap}>
          <Text style={styles.noResults}>No articles found for "{query}"</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    zIndex: 20,
  },
  strip: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
    backgroundColor: colors.cream,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
  },
  stripLogo: {
    width: 60,
    height: 20,
  },
  stripBadge: {
    backgroundColor: colors.navyAlt,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  stripBadgeText: {
    ...type.caption,
    fontSize: 8.5,
    color: colors.white,
    letterSpacing: 0.5,
  },
  stripBadgeLive: {
    ...type.caption,
    fontSize: 7.5,
    color: colors.gold,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: 8,
    minHeight: 52,
  },
  iconBtn: {
    padding: 6,
  },
  logoWrap: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 26,
  },
  title: {
    ...type.h4,
    color: colors.primary,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radii.pill,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 9 : 4,
  },
  searchInput: {
    flex: 1,
    fontSize: 14.5,
    fontFamily: type.body.fontFamily,
    color: colors.textPrimary,
  },
  resultsWrap: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    maxHeight: 260,
    paddingVertical: 4,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: spacing.md,
    paddingVertical: 11,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  resultText: {
    ...type.body,
    fontSize: 13.5,
    color: colors.textPrimary,
    flex: 1,
  },
  noResults: {
    ...type.bodySmall,
    color: colors.textMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: 14,
    textAlign: 'center',
  },
});
