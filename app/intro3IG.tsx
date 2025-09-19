import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Intro4IG() {
    const router = useRouter();


    return (
        <SafeAreaView className="flex-1 w-full bg-white ">

            <TouchableOpacity
                onPress={() => router.back()}
                className="absolute top-4 left-4 z-10 p-2"
            >
                <Ionicons name="arrow-back" size={28} color="orange" />
            </TouchableOpacity>


            <View className="flex-[0.5] bg-[#4a89dc] w-full">

            </View>


            <View className="flex-[0.5] items-center justify-center px-4">
                


                <Text className="text-3xl mt-2 font-bold text-orange-300 text-center mb-6">
                    Meet the Immune {"\n"} Gaurdians
                </Text>
                <Text className="text-center mb-4">
                    Join the adventure where fun meets learning, explore exciting games, unlock knowledge, and become hero.
                </Text>
                <Link href="/intro4PR" asChild>
                    <TouchableOpacity className="bg-[#4a89dc] w-[70%] p-4 rounded-full">
                        <Text className="text-lg text-center text-white">Continue</Text>
                    </TouchableOpacity>
                </Link>
                <Text className="my-2">Skip</Text>
            </View>


        </SafeAreaView>
    );
}