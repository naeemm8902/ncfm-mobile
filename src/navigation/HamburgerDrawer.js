import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  Linking,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';
import images from '../data/images';
import navLinks from '../data/navLinks';
import { contactInfo, socialLinks } from '../data/siteContent';
import Button from '../components/Button';
import { useDrawer } from './DrawerContext';
import { navigate } from './navigationRef';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_WIDTH = Math.min(320, SCREEN_WIDTH * 0.82);

export default function HamburgerDrawer() {
  const { isOpen, close, activeRoute } = useDrawer();
  const insets = useSafeAreaInsets();

  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [mounted, setMounted] = React.useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      Animated.parallel([
        Animated.timing(translateX, { toValue: 0, duration: 260, useNativeDriver: true }),
        Animated.timing(backdropOpacity, { toValue: 1, duration: 260, useNativeDriver: true }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, { toValue: -DRAWER_WIDTH, duration: 220, useNativeDriver: true }),
        Animated.timing(backdropOpacity, { toValue: 0, duration: 220, useNativeDriver: true }),
      ]).start(() => setMounted(false));
    }
  }, [isOpen]);

  if (!mounted) return null;

  function go(screen) {
    navigate(screen);
    close();
  }

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.backdrop, { opacity: backdropOpacity }]}
      >
        <Pressable style={StyleSheet.absoluteFill} onPress={close} />
      </Animated.View>

      <Animated.View
        style={[
          styles.panel,
          { width: DRAWER_WIDTH, paddingTop: insets.top, transform: [{ translateX }] },
        ]}
      >
        <View style={styles.header}>
          <Image source={images.logoWhite} style={styles.logo} resizeMode="contain" />
          <Pressable onPress={close} style={styles.closeBtn} hitSlop={8}>
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
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: colors.backdrop,
  },
  panel: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.navy,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 16,
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
