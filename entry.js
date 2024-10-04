// `@expo/metro-runtime` MUST be the first import to ensure Fast Refresh works
// on web.
import '@expo/metro-runtime';

import { App } from 'expo-router/build/qualified-entry';
import { renderRootComponent } from 'expo-router/build/renderRootComponent';
import { Netmera } from 'react-native-netmera';
import {
    onCarouselObjectSelected,
    onPushButtonClicked,
    onPushDismiss,
    onPushOpen,
    onPushReceive,
    onPushRegister,
  } from './NetmeraPushHeadlessTask';

// This file should only import and register the root. No components or exports
// should be added here.

Netmera.initBroadcastReceiver(
    onPushRegister,
    onPushReceive,
    onPushOpen,
    onPushDismiss,
    onPushButtonClicked,
    onCarouselObjectSelected,
  );
Netmera.enablePopupPresentation();

renderRootComponent(App);

