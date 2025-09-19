import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from 'react-native';



import { useRouter } from "expo-router";





export default function ProductDetails() {



    // Get the screen width
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const router = useRouter()
    return (
        <SafeAreaView className="flex-1 bg-white">

            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-[#4a89dc] text-center text-2xl font-bold">Standard Bottle
                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}

            <ScrollView className="flex-1 -mt-4 z-0 w-full">
                <View
                    className=" border-2 w-full"
                    style={{ height: screenHeight * 0.4 }} // Half screen height
                >
                    <Image
                        source={require("../assets/images/product.png")}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%" }} // Ensure image takes full width
                    />
                </View>

                <View
                    className=" border-2 w-full"
                    style={{ height: screenHeight * 0.6, backgroundColor: "#f6f7f8", paddingHorizontal: 20, paddingVertical: 10 }} // Half screen height
                >
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Ionicons
                                key={i}
                                name={i < 4 ? "star" : "star-outline"}
                                size={22}
                                color="#FFC73D"
                                style={{ marginRight: 1 }}
                            />
                        ))}
                        <Text style={{ fontSize: 20, color: "black", marginLeft: 4 }}>
                            (4.8)
                        </Text>
                    </View>

                    <View
                        style={{
                            width: "100%",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 8
                        }}
                    >

                        <Text
                            style={{
                                fontSize: 34,
                                fontWeight: "700"
                            }}
                        >
                            $28.46
                        </Text>


                        <View style={{
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Text
                                style={{
                                    textDecorationLine: "line-through",
                                    color: "#d94b4b",
                                    marginLeft: 7,
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    textAlign: "center"
                                }}
                            >
                                $35.58
                            </Text>

                            <View
                                style={{
                                    backgroundColor: "#0fb57e",
                                    padding: 5,
                                    borderRadius: 5
                                }}
                            >
                                <Text style={{
                                    color: "white",
                                    fontSize: 14,

                                }}>
                                    Save 20%
                                </Text>

                            </View>


                        </View>

                        <View style={{
                             flexDirection:"row",
                             gap:10,
                             justifyContent:"center",
                             alignItems:"center"
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#fdc12b",
                                    borderRadius: 5,
                                    padding:2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons name="add" size={25} color="white" />
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: 20,          // adjust as needed
                                    height: 20,         // adjust as needed
                                    borderRadius: 10,   // half of width/height for a perfect circle
                                    backgroundColor: "#333", // or "gray"
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", textAlign: "center" }}>1</Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    backgroundColor: "red",
                                    borderRadius: 5,
                                    padding: 2,
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Ionicons name="remove" size={25} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>




            </ScrollView>

            {/* Bottom Navigation */}
            <View className="hidden flex-row justify-around items-center py-3 bg-white rounded-t-2xl absolute bottom-0 w-full shadow-blue-300 shadow-xl h-14">
                <TouchableOpacity>
                    <Ionicons name="home" size={24} color="#4a89dc" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="cart" size={24} color="#4a89dc" />
                </TouchableOpacity>

                {/* Floating Icon */}
                <View className="relative">
                    <TouchableOpacity className="w-16 h-16 bg-red-400 rounded-3xl justify-center items-center absolute -top-12 self-center">
                        <Ionicons name="game-controller" size={36} color="white" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Ionicons name="chatbubbles" size={24} color="#4a89dc" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="person" size={24} color="#4a89dc" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}