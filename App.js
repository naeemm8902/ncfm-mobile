import React, { useCallback, useState, useRef } from 'react';
import { View, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreenNative from 'expo-splash-screen';
import { useFonts as useInterFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import {
  useFonts as useDMSansFonts,
  DMSans_500Medium,
  DMSans_600SemiBold,
  DMSans_700Bold,
  DMSans_800ExtraBold,
  DMSans_900Black,
} from '@expo-google-fonts/dm-sans';

import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';
import { colors } from './src/theme';

SplashScreenNative.preventAutoHideAsync().catch(() => {});

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  const [dmSansLoaded] = useDMSansFonts({
    DMSans_500Medium,
    DMSans_600SemiBold,
    DMSans_700Bold,
    DMSans_800ExtraBold,
    DMSans_900Black,
  });

  const fontsReady = interLoaded && dmSansLoaded;

  const onLayoutRootView = useCallback(async () => {
    if (fontsReady) {
      await SplashScreenNative.hideAsync().catch(() => {});
    }
  }, [fontsReady]);

  const handleSplashFinish = () => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 450, useNativeDriver: true }).start(() => setShowSplash(false));
  };

  if (!fontsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <SafeAreaProvider>
        <StatusBar style="dark" backgroundColor={colors.white} />
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
    </GestureHandlerRootView>
  );
}
