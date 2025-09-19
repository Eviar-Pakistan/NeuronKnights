import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import { useRouter } from "expo-router";

import { Dimensions } from 'react-native';


import itemimage1 from "../assets/images/Mask group-1.png";
import itemimage2 from "../assets/images/Mask group-2.png";
import itemimage3 from "../assets/images/Mask group-3.png";
import itemimage4 from "../assets/images/Mask group-4.png";
import itemimage5 from "../assets/images/Mask group-5.png";
import itemimage from "../assets/images/Mask group.png";



export default function WelcomeToNK() {

const router=useRouter()

const carouselImages = [
    "../assets/images/thumbnail 2.png",
    "../assets/images/thumbnail 2.png",
    "../assets/images/thumbnail 2.png",
];

const listItems = [
    {
        id: "1",
        title: "Brain Games",
        titlecolor: "#9B66C1",
        image: itemimage1,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"


    },
    {
        id: "2",
        title: "Immune Guardians",
        titlecolor: "#37ACB0",
        image: itemimage2,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"

    },
    {
        id: "3",
        title: "Take Selfie",
        titlecolor: "#FF6C6A",
        image: itemimage3,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"

    },
    {
        id: "4",
        title: "Human Body",
        titlecolor: "#FFC73D",
        image: itemimage4,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"

    },
    {
        id: "5",
        title: "Smart Challenge",
        titlecolor: "#4A89DC",
        image: itemimage5,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"

    },
    {
        id: "6",
        title: "Knight Code Quest",
        titlecolor: "#4A89DC",
        image: itemimage,
        buttonStyle: "bg-gradient-to-r from-violet-300 to-sky-600",
        subtitle:"Learn nutritions and healthy eating habits"

    },
];

    // Get the screen width
    const screenWidth = Dimensions.get('window').width;
    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-[#4a89dc] text-center text-2xl font-bold">Neuro Games

                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 -mt-4 z-0 w-full pb-20">
                {/* Horizontal Carousel */}

                <View className="bg-[#F1F3FD]  w-full rounded-b-xl">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 0 }} // Optional: Adjust padding for content
                        className="w-full"
                    >
                        {carouselImages.map((uri, index) => (
                            <View key={index} className="w-full mr-4">
                                <Image
                                    source={require("../assets/images/thumbnail 2.png")}
                                    className=""
                                    resizeMode="cover"
                                    style={{ width:screenWidth*1, height: 210 }}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>


                {/* Vertical List */}
                <View className="bg-white">
                    <View className="grid grid-cols-2 w-full pl-3 mt-5 " style={{gap:10}}>
                        {listItems.map((item) => (
                            <View
                                key={item.id}
                                className="rounded-xl mb-4"
                                style={{
                                    width: (screenWidth - 32 - 8) / 2, // Account for px-4 (16px each side) and gap-x-2
                                    shadowColor: item.titlecolor,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    elevation: 8,
                                }}
                            >
                                <View className="w-full">
                                    <Image
                                        source={item.image}
                                        className="w-full rounded-2xl"
                                        resizeMode="cover"
                                        style={{ width: "100%",height:120 }} // Ensure image takes full width
                                    />
                                </View>

                                <Text className={`text-md ml-3 text-left mt-3 font-bold text-[#4a89dc]`}  >{item.title}</Text>

                                <Text className={`text-md ml-3 text-left my-3  text-gray-400`}  >{item.subtitle}</Text>


                                <TouchableOpacity className={`flex-row mx-auto justify-center 
                                    items-center rounded-full px-7  w-fit mb-4 ${item.buttonStyle}`}>

                                    <Text className=" text-white font-bold text-lg">Play</Text>
                                </TouchableOpacity>


                            </View>
                        ))}
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