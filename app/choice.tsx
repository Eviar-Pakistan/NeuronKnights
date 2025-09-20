import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image } from "react-native";
export default function Choice() {
    return (
        <View className="flex-1 items-center justify-center bg-white px-4">
            <Image style={{ height: 321 }} source={require("../assets/images/neuro-knights-logo 1.png")} />

            <Link href="/intro1" asChild>
                <TouchableOpacity
                    style={{
                        shadowColor: '#FF6C6A',
                        shadowOffset: { width: 0, height: 6.8 },
                        shadowOpacity: 0.4,
                        shadowRadius: 10,
                        elevation: 10
                    }}
                    className="bg-[#FF6C6A] py-6 rounded-2xl w-[70%]">
                    <Text className="text-xl font-bold text-center text-white w-full">Kids</Text>
                </TouchableOpacity>
            </Link>

            <Text className="my-2">
                OR
            </Text>

            <Link href="/intro1parents" asChild>
                <TouchableOpacity
                    style={{
                        shadowColor: '#4A89DC',
                        shadowOffset: { width: 0, height: 6.8 },
                        shadowOpacity: 0.4,
                        shadowRadius: 10,
                        elevation: 10
                    }}
                    className="bg-[#4A89DC] px-6 py-6 rounded-2xl w-[70%]">
                    <Text className="text-xl font-bold text-center text-white w-full">Parents</Text>
                </TouchableOpacity>
            </Link>


        </View>
    );
}