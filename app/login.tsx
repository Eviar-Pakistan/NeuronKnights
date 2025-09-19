import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Link } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Login() {
    return (
        <SafeAreaView className="flex-1">
            {/* Background Image with Blur */}
            <ImageBackground
                source={{ uri: "https://picsum.photos/600/1200" }} // replace with your bg
                className="flex-1"
                resizeMode="cover"
            >
                <BlurView intensity={80} tint="dark" className="flex-1 items-center justify-center">
                    {/* White Card */}
                    <View className="bg-white rounded-2xl w-[85%] items-center p-6 shadow-xl">

                        {/* Close button */}
                        <TouchableOpacity className="absolute top-4 right-4">
                            <Ionicons name="close-circle" size={28} color="red" />
                        </TouchableOpacity>



                        {/* Character / Knight Image */}
                        <Image
                            source={{ uri: "https://i.ibb.co/v4Q6sKk/character.png" }} // replace with your knight
                            className="w-32 h-32 mb-4"
                            resizeMode="contain"
                        />

                        {/* Title */}
                        <Text className="text-2xl font-bold text-blue-600 mb-2 text-center">
                            Welcome Back, Knight!
                        </Text>

                        {/* Subtitle */}
                        <Text className="text-gray-600 text-center mb-6">
                            Choose your preferred way to login and continue your adventure!
                        </Text>

                        {/* Google Login */}
                        <TouchableOpacity className="flex-row items-center bg-white border border-gray-300 justify-center rounded-lg px-4 py-3 w-full mb-4">
                            <Image
                                source={{
                                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
                                }}
                                className="w-5 h-5 mr-3"
                            />
                            <Text className="text-gray-800">Continue with Google</Text>
                        </TouchableOpacity>

                        {/* OR Divider */}
                        <View className="flex-row items-center w-full my-2">
                            <View className="flex-1 h-[1px] bg-gray-300" />
                            <Text className="px-2 text-gray-400">OR</Text>
                            <View className="flex-1 h-[1px] bg-gray-300" />
                        </View>

                        {/* Email Login */}

                        <Link href="/credentials" className="w-full">
                            <TouchableOpacity className="flex-row justify-center items-center bg-[#4a89dc] rounded-lg px-4 py-3 w-full">
                                <Ionicons name="mail" size={20} color="white" />
                                <Text className="ml-3 text-white font-medium">Login with Email</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}
