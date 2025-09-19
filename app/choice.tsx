import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
export default function Choice() {
    return (
        <View className="flex-1 items-center justify-center bg-white px-4">
            <Text className="text-5xl font-bold text-black w-full text-center mb-6 pb-1">Neuro Knights</Text>

            <Link href="/intro1" asChild>
                <TouchableOpacity className="bg-[#FF6C6A] py-6 rounded-lg w-[70%]">
                    <Text className="text-xl font-bold text-center text-white w-full">Kids</Text>
                </TouchableOpacity>
            </Link>

            <Text className="my-2">
                OR
            </Text>

            <Link href="/intro1parents" asChild>
                <TouchableOpacity className="bg-[#4A89DC] px-6 py-6 rounded-lg w-[70%]">
                    <Text className="text-xl font-bold text-center text-white w-full">Parents</Text>
                </TouchableOpacity>
            </Link>


        </View>
    );
}