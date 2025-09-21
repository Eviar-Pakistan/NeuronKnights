import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Link, router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Logout() {
    return (
        <SafeAreaView className="flex-1">
            {/* Background Image with Blur */}
            <ImageBackground
                source={require("../assets/images/logobg.png")} // replace with your bg
                className="flex-1"
                resizeMode="cover"
            >
                <BlurView intensity={80} tint="dark" className="flex-1 items-center justify-center">
                    {/* White Card */}
                    <View className="bg-white rounded-3xl w-[85%] items-center overflow-hidden shadow-xl">
                        
                        {/* Welcome Back Header */}
                        <View className="w-full bg-white py-4">
                            <Text className="text-[#4A89DC] text-2xl font-semibold text-center">
                                Welcome back
                            </Text>
                        </View>

                        {/* Credits Section */}
                        <View className="w-full bg-orange-100 py-16 px-4 items-center">
                            <View className="flex-col items-center mb-2">
                                <View className="w-8 h-8  rounded-full items-center justify-center mr-3">
                                   <Ionicons name="cash" size={40} color="#FF9D05" />
                                </View>
                                <Text className="text-[#FF9D05] mt-8 text-2xl font-bold">
                                    90 Credits
                                </Text>
                            </View>
                        </View>

                        {/* Buttons Section */}
                        <View className="w-full py-2 px-4 space-y-3">
                            {/* Logout Button */}
                            
                                <TouchableOpacity onPress={()=>router.push("/welcometonk")} className="flex-row items-center justify-center bg-white rounded-lg py-3 px-4 w-full">
                                    <Ionicons name="log-out" size={40} color="red" />
                                    <Text className="ml-2 text-white font-bold text-xl text-red-500">
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            

                            {/* Home Button */}
                            <Link href="/welcometonk" style={{ width: "50%" ,marginHorizontal:"auto"}}>
                                <TouchableOpacity  onPress={()=>router.push("/welcometonk")} className="flex-row items-center justify-center bg-teal-500 rounded-3xl py-3 px-4 w-full">
                                    
                                    <Text className="ml-2 text-white font-extrabold text-xl">
                                        Home
                                    </Text>
                                </TouchableOpacity>
                            </Link>
                        </View>

                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}