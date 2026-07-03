import React, { useRef, useState } from 'react';
import { View, FlatList, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, radii, spacing } from '../theme';
import IssueCard from './IssueCard';

const CARD_WIDTH = 270;

export default function IssueSlider({ issues, onPressIssue }) {
  const [slideWidth, setSlideWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const listRef = useRef(null);

  function goTo(i) {
    const clamped = Math.max(0, Math.min(issues.length - 1, i));
    listRef.current?.scrollToIndex({ index: clamped, animated: true });
    setIndex(clamped);
  }

  function handleMomentumEnd(e) {
    if (!slideWidth) return;
    const i = Math.round(e.nativeEvent.contentOffset.x / slideWidth);
    setIndex(Math.max(0, Math.min(issues.length - 1, i)));
  }

  return (
    <View style={styles.wrap} onLayout={(e) => setSlideWidth(e.nativeEvent.layout.width)}>
      {slideWidth > 0 && (
        <FlatList
          ref={listRef}
          data={issues}
          keyExtractor={(item) => item.month}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumEnd}
          getItemLayout={(_, i) => ({ length: slideWidth, offset: slideWidth * i, index: i })}
          renderItem={({ item }) => (
            <View style={[styles.slide, { width: slideWidth }]}>
              <IssueCard
                issue={item}
                style={styles.card}
                onPress={onPressIssue ? () => onPressIssue(item) : undefined}
              />
            </View>
          )}
        />
      )}

      {issues.length > 1 && (
        <>
          <Pressable
            onPress={() => goTo(index - 1)}
            disabled={index === 0}
            style={[styles.arrow, styles.arrowLeft, index === 0 && styles.arrowDisabled]}
            hitSlop={8}
          >
            <Ionicons name="chevron-back" size={18} color={colors.primary} />
          </Pressable>
          <Pressable
            onPress={() => goTo(index + 1)}
            disabled={index === issues.length - 1}
            style={[styles.arrow, styles.arrowRight, index === issues.length - 1 && styles.arrowDisabled]}
            hitSlop={8}
          >
            <Ionicons name="chevron-forward" size={18} color={colors.primary} />
          </Pressable>

          <View style={styles.dots}>
            {issues.map((issue, i) => (
              <View key={issue.month} style={[styles.dot, i === index && styles.dotActive]} />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  slide: {
    alignItems: 'center',
    paddingBottom: spacing.md,
  },
  card: {
    width: CARD_WIDTH,
  },
  arrow: {
    position: 'absolute',
    top: 107,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  arrowLeft: {
    left: spacing.sm,
  },
  arrowRight: {
    right: spacing.sm,
  },
  arrowDisabled: {
    opacity: 0.35,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 6,
    marginTop: -spacing.xs,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.border,
  },
  dotActive: {
    backgroundColor: colors.primary,
    width: 16,
  },
});
