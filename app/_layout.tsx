import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{ animation: "default" }} />
        <Stack.Screen name="choice" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="intro1" options={{ animation: "slide_from_bottom" }} />
         <Stack.Screen name="intro1parents" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="ageselection" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro2pbg" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro3IG" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro4PR" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="login" options={{ animation: "slide_from_bottom" }} />
      </Stack>
    </SafeAreaView>
  );
}