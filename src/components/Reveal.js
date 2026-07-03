import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

/**
 * Lightweight "framer-like" entrance animation (fade + rise) built on core
 * Animated — no reanimated/worklets, so it stays safe in Expo Go. Replays
 * whenever the screen regains focus for a fresh reveal each visit.
 */
export default function Reveal({ children, delay = 0, distance = 22, duration = 480, style }) {
  const isFocused = useIsFocused();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused) {
      progress.setValue(0);
      Animated.timing(progress, {
        toValue: 1,
        duration,
        delay,
        useNativeDriver: true,
      }).start();
    }
  }, [isFocused]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: progress,
          transform: [
            {
              translateY: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [distance, 0],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

/** delay helper for staggered grids — caps total wait so long lists don't feel sluggish */
export function stagger(index, step = 60, max = 420) {
  return Math.min(index * step, max);
}
