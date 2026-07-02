import React, { useState, useRef } from 'react';
import { View, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleSplashFinish = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => setShowSplash(false));
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <View style={{ flex: 1 }}>
        {showSplash ? (
          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <SplashScreen onFinish={handleSplashFinish} />
          </Animated.View>
        ) : (
          <AppNavigator />
        )}
      </View>
    </SafeAreaProvider>
  );
}
