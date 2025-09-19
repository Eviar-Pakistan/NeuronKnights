import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Link, useRouter } from "expo-router";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Credentials() {
    const router=useRouter()
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

                         {/* back button */}
                        <TouchableOpacity   onPress={() => router.back()} className="absolute top-4 left-4">
                            <Ionicons name="arrow-back-outline" size={28} color="#4a89dc" />
                        </TouchableOpacity>



                        {/* Character / Knight Image */}
                        <Image
                            source={{ uri: "https://i.ibb.co/v4Q6sKk/character.png" }} // replace with your knight
                            className="w-32 h-32 mb-4"
                            resizeMode="contain"
                        />

                        {/* Subtitle */}
                        <Text className="text-2xl font-bold text-[#4a89dc] mb-2 text-center">
                            Enter Your Credentials
                        </Text>


                        <Text className="text-gray-600 text-center mb-4">
                            Amygdala will help you login safely!
                        </Text>

                        {/* Email Login */}
                        <View className="w-full items-start">
                            <Text className="text-gray-600 font-medium mb-2">
                                Email Address
                            </Text>
                        </View>

                        <TextInput className="flex-row items-center bg-white border border-gray-300 justify-center rounded-lg px-4 py-3 w-full mb-4" placeholder="Enter Email">

                        </TextInput>

                        {/* Password */}
                        <View className="w-full items-start">
                            <Text className="text-gray-600 font-medium mb-2">
                                Password
                            </Text>
                        </View>

                    
                        <TextInput className="flex-row items-center bg-white border border-gray-300 justify-center rounded-lg px-4 py-3 w-full mb-4" placeholder="Enter Email">

                        </TextInput>

                       

                        {/* Email Login */}
                        <Link href="/welcometonk" className="w-full">
                         <TouchableOpacity className="flex-row justify-center items-center bg-[#4a89dc] rounded-lg px-4 py-3 w-full">
                            <Ionicons name="log-in-outline" size={20} color="white" />
                            <Text className="ml-3 text-white font-medium">Login</Text>
                        </TouchableOpacity>
                        </Link>
                       
                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}
