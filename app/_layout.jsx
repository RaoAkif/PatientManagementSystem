import React from "react";
import { TailwindProvider } from "tailwind-rn";
import utilities from "../tailwind.json";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    InterRegular: require("../assets/fonts/Inter/Inter-Regular.ttf"),
    InterBold: require("../assets/fonts/Inter/Inter-Bold.ttf"),
    InterLight: require("../assets/fonts/Inter/Inter-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <TailwindProvider utilities={utilities}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="SignIn" />
          <Stack.Screen name="SignUp" />
          <Stack.Screen name="MyProfile" />

          {/* <Slot /> */}
        </Stack>
      </TailwindProvider>
      <StatusBar />
    </>
  );
}
