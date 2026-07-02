import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerContent from './DrawerContent';
import AppHeader from '../components/AppHeader';
import { colors } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
import IssuesScreen from '../screens/IssuesScreen';
import AboutScreen from '../screens/AboutScreen';
import PartnersScreen from '../screens/PartnersScreen';
import AdvertiseScreen from '../screens/AdvertiseScreen';
import ContactScreen from '../screens/ContactScreen';
import PrayerScreen from '../screens/PrayerScreen';
import ShopScreen from '../screens/ShopScreen';
import SubscribeScreen from '../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.surface,
    card: colors.surface,
    text: colors.textPrimary,
    border: colors.border,
    notification: colors.primary,
  },
};

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <AppHeader />,
        contentStyle: { backgroundColor: colors.surface },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
      <Stack.Screen name="Issues" component={IssuesScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Partners" component={PartnersScreen} />
      <Stack.Screen name="Advertise" component={AdvertiseScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Prayer" component={PrayerScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: 'front',
          overlayColor: colors.backdrop,
          drawerStyle: { width: '80%' },
          swipeEdgeWidth: 40,
        }}
      >
        <Drawer.Screen name="Root" component={RootStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
