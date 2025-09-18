import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function ExploreScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-4">
      <Text className="text-3xl font-bold text-green-600 mb-6">Explore Screen</Text>
      <Link href="/" asChild>
        <TouchableOpacity className="bg-green-600 px-6 py-3 rounded-lg">
          <Text className="text-white text-lg font-semibold">Back to Home</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}