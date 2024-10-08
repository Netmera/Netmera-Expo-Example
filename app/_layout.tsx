import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-toast-message';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}>
        <StatusBar 
          style="auto"
          backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'} 
        />  
        <Stack initialRouteName='Dashboard' screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Category"/>
        <Stack.Screen name="Coupons"/>
        <Stack.Screen name="Events"/>
        <Stack.Screen name="PushInbox"/>
        <Stack.Screen name="User"/>
      </Stack>
      <Toast />
    </ThemeProvider>
  );
}
