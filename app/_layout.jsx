import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { store } from "../utils/store";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import AuthProvider from "../utils/AuthProvider";

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
      <StoreProvider store={store}>
        <PaperProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
              <Stack.Screen name="SignIn" />
              <Stack.Screen name="SignUp" />
              {/* <Stack.Screen name="MyProfile" /> */}
            </Stack>
          </AuthProvider>
        </PaperProvider>
      </StoreProvider>
      <StatusBar />
    </>
  );
}
