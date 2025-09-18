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
        <Stack.Screen name="kidswelcome" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="ageselection" options={{ animation: "slide_from_bottom" }} />
      </Stack>
    </SafeAreaView>
  );
}