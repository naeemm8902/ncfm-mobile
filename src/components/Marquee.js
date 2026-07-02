import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Easing, StyleSheet } from 'react-native';

export default function Marquee({ children, speed = 40, style }) {
  const [contentWidth, setContentWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const animRef = useRef(null);

  useEffect(() => {
    if (!contentWidth) return;
    translateX.setValue(0);
    const duration = (contentWidth / speed) * 1000;
    animRef.current = Animated.loop(
      Animated.timing(translateX, {
        toValue: -contentWidth,
        duration,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    animRef.current.start();
    return () => animRef.current && animRef.current.stop();
  }, [contentWidth]);

  return (
    <View style={[styles.wrap, style]}>
      <Animated.View style={[styles.row, { transform: [{ translateX }] }]}>
        <View
          style={styles.row}
          onLayout={(e) => setContentWidth(e.nativeEvent.layout.width)}
        >
          {children}
        </View>
        <View style={styles.row}>{children}</View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
