import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-[#4A89DC] px-4">
      <Text className="text-3xl font-bold text-white mb-6">Neuro Knights</Text>
      <Link href="/(tabs)/explore" asChild>
        <TouchableOpacity className="bg-blue-600 px-6 py-3 rounded-lg">
          <Text className="text-white text-lg font-semibold">Tap to start</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}