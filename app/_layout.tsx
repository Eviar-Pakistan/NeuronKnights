import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false,gestureEnabled: true, }}>
        <Stack.Screen name="index" options={{ animation: "default" }} />
        <Stack.Screen name="choice" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="intro1" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro1parents" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="ageselection" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro2pbg" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro3IG" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="intro4PR" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="login" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="voicechat1" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="voicechat2" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="humanbody" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="humanbodyinfo" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="meetnk" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="detailnk" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="logout" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="camerachoose" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="codequest" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="personaselect" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="welcometonk" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="productdetails" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="playgames" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="credentails" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="collection" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="aitools" options={{ animation: "slide_from_right" }} />
        <Stack.Screen name="assessment" options={{ animation: "slide_from_left" }} />
        <Stack.Screen name="learingpath" options={{ animation: "slide_from_bottom" }} />
        <Stack.Screen name="challenge" options={{ animation: "slide_from_bottom" }} />

      </Stack>
    </SafeAreaView>
  );
}