import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CameraChoose() {
    const router=useRouter()
    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
           
                       <View className="flex-row items-center  z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                           <TouchableOpacity onPress={() => router.push('/welcometonk')} >
                               <Ionicons name="chevron-back-circle" size={28} color="orange" />
                           </TouchableOpacity>
                           
           
                          
                       </View>

            {/* Main Content - Two Views */}
            <View className="flex-1">
                {/* Upper View - Camera Section */}
                <View 
                    className="flex-[0.5] items-center justify-center"
                    style={{ backgroundColor: "#DBE1FF", borderBottomLeftRadius: 22, 
                        borderBottomRightRadius: 22  }}
                    
                >
                    <TouchableOpacity className="items-center">
                        <Ionicons 
                            name="camera" 
                            size={123} 
                            color="white" 
                        />
                        <Text className="text-white text-lg font-medium mt-4">
                            Open Camera
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Bottom View - Gallery Section */}
                <View 
                    className="flex-[0.5] items-center justify-center bg-white"
                    
                >
                    <TouchableOpacity className="items-center">
                        <Ionicons 
                            name="images" 
                            size={123} 
                            color="#4A89DC59" 
                        />
                        <Text className="text-[#4A89DC59] text-lg font-medium mt-4">
                            Choose from gallery
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}