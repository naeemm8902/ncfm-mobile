import React, { useState } from 'react';
import { Modal, View, Text, Pressable, ScrollView, Linking, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing, type } from '../theme';
import Button from './Button';
import FormField from './FormField';
import { contactInfo } from '../data/siteContent';

export default function MediaKitModal({ triggerVariant = 'gold', triggerLabel = 'Request a Media Kit', triggerSize = 'md', triggerStyle }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', organization: '', email: '', phone: '' });

  function close() {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <>
      <Button title={triggerLabel} variant={triggerVariant} size={triggerSize} onPress={() => setOpen(true)} style={triggerStyle} />

      <Modal visible={open} animationType="slide" transparent onRequestClose={close}>
        <View style={styles.backdrop}>
          <Pressable style={StyleSheet.absoluteFill} onPress={close} />
          <View style={styles.sheet}>
            <View style={styles.header}>
              <View style={{ flex: 1 }}>
                <Text style={styles.eyebrow}>Advertise with us</Text>
                <Text style={styles.title}>Request a Media Kit</Text>
              </View>
              <Pressable onPress={close} style={styles.closeBtn} hitSlop={8}>
                <Ionicons name="close" size={20} color={colors.textMuted} />
              </Pressable>
            </View>

            <ScrollView contentContainerStyle={styles.body} keyboardShouldPersistTaps="handled">
              {submitted ? (
                <View style={styles.success}>
                  <View style={styles.successIcon}>
                    <Ionicons name="checkmark" size={24} color={colors.success} />
                  </View>
                  <Text style={styles.successTitle}>Request received!</Text>
                  <Text style={styles.successBody}>
                    We&apos;ll send your media kit shortly. For immediate assistance, call{' '}
                    <Text style={styles.link} onPress={() => Linking.openURL(contactInfo.phoneHref)}>
                      {contactInfo.phone}
                    </Text>.
                  </Text>
                  <Button title="Close" variant="primary" onPress={close} style={{ marginTop: spacing.md }} />
                </View>
              ) : (
                <>
                  <Text style={styles.desc}>
                    Complete the form below to request a media kit that includes the available advertising
                    opportunities. To speak with us immediately, call{' '}
                    <Text style={styles.link} onPress={() => Linking.openURL(contactInfo.phoneHref)}>
                      {contactInfo.phone}
                    </Text>.
                  </Text>
                  <FormField label="Full Name" required value={form.name} onChangeText={(v) => setForm({ ...form, name: v })} placeholder="Jane Smith" />
                  <FormField label="Organization" required value={form.organization} onChangeText={(v) => setForm({ ...form, organization: v })} placeholder="Your Company" />
                  <FormField label="Email" required value={form.email} onChangeText={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" keyboardType="email-address" autoCapitalize="none" />
                  <FormField label="Phone Number" optional value={form.phone} onChangeText={(v) => setForm({ ...form, phone: v })} placeholder="(615) 000-0000" keyboardType="phone-pad" />
                  <Button title="Send Request" variant="gold" fullWidth onPress={() => setSubmitted(true)} style={{ marginTop: spacing.xs }} />
                </>
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: colors.backdrop,
  },
  sheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    maxHeight: '85%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  eyebrow: {
    ...type.eyebrow,
    color: colors.gold,
    marginBottom: 4,
  },
  title: {
    ...type.h3,
    color: colors.primary,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surfaceAlt,
  },
  body: {
    padding: spacing.lg,
  },
  desc: {
    ...type.bodySmall,
    color: colors.textMuted,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  link: {
    color: colors.primary,
    fontFamily: type.h4.fontFamily,
    textDecorationLine: 'underline',
  },
  success: {
    alignItems: 'center',
    paddingVertical: spacing.lg,
  },
  successIcon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.successLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  successTitle: {
    ...type.h3,
    color: colors.primary,
    marginBottom: 8,
  },
  successBody: {
    ...type.bodySmall,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
