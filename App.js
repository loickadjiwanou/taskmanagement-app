import React, { useCallback, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import Shell from "./src/Shell";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    FredokaRegular: require("./src/assets/fonts/Fredoka-Regular.ttf"),
    FredokaMedium: require("./src/assets/fonts/Fredoka-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView onLayout={onLayoutRootView}>
      <NativeRouter>
        <Shell />
      </NativeRouter>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
