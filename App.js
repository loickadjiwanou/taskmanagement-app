import React, { useCallback, useEffect } from "react";
import { StatusBar, Platform, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Shell from "./src/Shell";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import colors from "./src/assets/colors/colors";
import { BlurView } from "expo-blur";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    FredokaRegular: require("./src/assets/fonts/Fredoka-Regular.ttf"),
    FredokaMedium: require("./src/assets/fonts/Fredoka-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <View style={{ flex: 1, backgroundColor: colors.black }}>
        <NavigationContainer>
          <Shell />
          <StatusBar
            barStyle={Platform.OS === "ios" ? "light-content" : "light-content"}
            translucent
            backgroundColor="transparent"
          />
        </NavigationContainer>
      </View>
    </GestureHandlerRootView>
  );
}
