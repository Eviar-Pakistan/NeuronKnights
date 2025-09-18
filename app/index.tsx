import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-[#4A89DC] px-4">

            <Text className="text-5xl font-bold text-white w-full text-center mb-6 pb-1">Neuro Knights</Text>

            <Link href="/choice" asChild>
                <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
                    <Text className="text-lg text-center text-white w-full">Tap To Start</Text>
                </TouchableOpacity>
            </Link>
            
        </View>
    );
}