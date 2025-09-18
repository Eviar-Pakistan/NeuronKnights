import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Kidswelcome() {
    return (
        <View className="flex-1 items-center justify-center bg-white px-4">
            <View className="h-[50%] bg-sky-500 w-full">

            </View>

            <Text className="text-2xl mt-4 font-bold text-black w-full text-center mb-6 pb-1">Welcome to Neuro Knights</Text>
             
            <Text>Join the adventure where fun meets learning,explore exciting games,unlock knowledge, and become hero of your own story.</Text>
            <Link href="/ageselection" asChild>
                <TouchableOpacity className="bg-blue-600 p-4 rounded-lg">
                    <Text className="text-lg text-center text-white w-full">Continue</Text>
                </TouchableOpacity>
            </Link>

            <Text className="my-2">Skip</Text>
            
        </View>
    );
}