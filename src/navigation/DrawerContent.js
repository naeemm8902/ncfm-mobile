import React from 'react';
import { View, Text, Image, Pressable, ScrollView, Linking, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import navLinks from '../data/navLinks';
import { contactInfo, socialLinks } from '../data/siteContent';
import Button from '../components/Button';

function getActiveRouteName(state) {
  if (!state) return null;
  const route = state.routes[state.index];
  if (route.state) return getActiveRouteName(route.state);
  return route.name;
}

export default function DrawerContent({ navigation, state }) {
  const insets = useSafeAreaInsets();
  const activeRoute = getActiveRouteName(state);

  function go(screen) {
    navigation.navigate('Root', { screen });
    navigation.dispatch(DrawerActions.closeDrawer());
  }

  return (
    <View style={[styles.wrap, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Image source={images.logoWhite} style={styles.logo} resizeMode="contain" />
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
          style={styles.closeBtn}
          hitSlop={8}
        >
          <Ionicons name="close" size={22} color={colors.white} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.navList}>
          {navLinks.map((link) => {
            const active = activeRoute === link.screen;
            return (
              <Pressable
                key={link.screen}
                onPress={() => go(link.screen)}
                style={[styles.navItem, active && styles.navItemActive]}
              >
                <Ionicons
                  name={link.icon}
                  size={19}
                  color={active ? colors.navy : colors.white}
                  style={{ marginRight: 12 }}
                />
                <Text style={[styles.navLabel, active && styles.navLabelActive]}>{link.label}</Text>
              </Pressable>
            );
          })}
        </View>

        <View style={styles.ctaBlock}>
          <Button title="Subscribe" variant="gold" fullWidth onPress={() => go('Subscribe')} />
          <Button
            title="Shop"
            variant="primary"
            icon="bag-outline"
            fullWidth
            onPress={() => go('Shop')}
            style={{ marginTop: 10 }}
          />
        </View>

        <View style={styles.socialRow}>
          {socialLinks.map((s) => (
            <Pressable key={s.label} onPress={() => Linking.openURL(s.url)} style={styles.socialBtn} hitSlop={6}>
              <Ionicons name={s.icon} size={18} color={colors.white} />
            </Pressable>
          ))}
        </View>

        <View style={styles.footerInfo}>
          <Text style={styles.footerText}>{contactInfo.phone}</Text>
          <Text style={styles.footerText}>{contactInfo.email}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: colors.navy,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  logo: {
    width: 150,
    height: 34,
  },
  closeBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  scroll: {
    paddingBottom: spacing.xxl,
  },
  navList: {
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: radii.md,
    marginBottom: 2,
  },
  navItemActive: {
    backgroundColor: colors.gold,
  },
  navLabel: {
    ...type.h4,
    fontSize: 15,
    color: colors.white,
  },
  navLabelActive: {
    color: colors.navy,
  },
  ctaBlock: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    paddingTop: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.15)',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
    marginTop: spacing.xl,
  },
  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  footerInfo: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  footerText: {
    ...type.caption,
    color: 'rgba(255,255,255,0.6)',
    textTransform: 'none',
    marginBottom: 4,
  },
});
