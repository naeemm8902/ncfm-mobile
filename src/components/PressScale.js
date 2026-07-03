import React, { useRef } from 'react';
import { Animated, Pressable } from 'react-native';

/** Tap feedback: springs down slightly on press, back up on release. */
export default function PressScale({ children, onPress, style, scaleTo = 0.96, ...rest }) {
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue) =>
    Animated.spring(scale, { toValue, useNativeDriver: true, speed: 40, bounciness: 6 }).start();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => animateTo(scaleTo)}
      onPressOut={() => animateTo(1)}
      {...rest}
    >
      <Animated.View style={[style, { transform: [{ scale }] }]}>{children}</Animated.View>
    </Pressable>
  );
}
