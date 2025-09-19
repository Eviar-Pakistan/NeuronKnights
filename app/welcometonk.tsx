import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from 'react-native';

import { Link } from "expo-router";


import itemimage1 from "../assets/images/Mask group-1.png";
import itemimage2 from "../assets/images/Mask group-2.png";
import itemimage3 from "../assets/images/Mask group-3.png";
import itemimage4 from "../assets/images/Mask group-4.png";
import itemimage5 from "../assets/images/Mask group-5.png";
import itemimage from "../assets/images/Mask group.png";

const carouselImages = [
    "../assets/images/imgi_2_image 1.png",
    "../assets/images/imgi_2_image 1.png",
    "../assets/images/imgi_2_image 1.png",
];

const listItems = [
    {
        id: "1",
        title: "Brain Games",
        titlecolor: "#9B66C1",
        image: itemimage1,
        buttonStyle: "bg-gradient-to-r from-fuchsia-600 to-pink-600",
        buttontext: "Play Now",
        link: "/playgames"

    },
    {
        id: "2",
        title: "Immune Guardians",
        titlecolor: "#37ACB0",
        image: itemimage2,
        buttonStyle: "bg-gradient-to-r from-teal-200 to-teal-500",
        buttontext: "Voice Chat",
        link: ""
    },
    {
        id: "3",
        title: "Take Selfie",
        titlecolor: "#FF6C6A",
        image: itemimage3,
        buttonStyle: "bg-gradient-to-r from-amber-500 to-pink-500",
        link: ""

    },
    {
        id: "4",
        title: "Human Body",
        titlecolor: "#FFC73D",
        image: itemimage4,
        buttonStyle: "bg-gradient-to-r from-amber-300 to-orange-500",
        buttontext: "let's Learn",
        link: ""
    },
    {
        id: "5",
        title: "Smart Challenge",
        titlecolor: "#4A89DC",
        image: itemimage5,
        buttonStyle: "bg-gradient-to-r from-blue-500 to-fuchsia-600",
        buttontext: "let's Do it",
        link: ""
    },
    {
        id: "6",
        title: "Knight Code Quest",
        titlecolor: "#4A89DC",
        image: itemimage,
        buttonStyle: "bg-gradient-to-r from-pink-600 to-amber-400",
        buttontext: "let's Learn",
        link: ""
    },
];

export default function WelcomeToNK() {
    // Get the screen width
    const screenWidth = Dimensions.get('window').width;
    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-[#4a89dc] rounded-b-xl">
                <TouchableOpacity>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-white text-center text-2xl font-bold">Welcome To{"\n"}
                    <Text className="text-orange-300 text-center text-2xl font-bold">NeuroKnights</Text>
                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 -mt-4 z-0 w-full pb-20">
                {/* Horizontal Carousel */}

                <View className="bg-[#4a89dc] p-4 w-full rounded-b-xl">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 0 }} // Optional: Adjust padding for content
                        className="w-full"
                    >
                        {carouselImages.map((uri, index) => (
                            <View key={index} className="w-72 mr-4">
                                <Image
                                    source={require("../assets/images/imgi_2_image 1.png")}
                                    className="rounded-[22px]"
                                    resizeMode="cover"
                                    style={{ width: screenWidth * 0.92, height: 210 }}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>

                <Text className="text-2xl ml-4 my-3 font-bold text-[#4A89dc]">Explore Our Features</Text>
                {/* Vertical List */}
                <View className="bg-white px-4">
                    <View className="grid grid-cols-2 w-full gap-x-2 bg-white">
                        {listItems.map((item) => (
                            <View key={item.id} className="flex-col items-center  rounded-xl p-3 my-2"
                                style={{
                                    shadowColor: item.titlecolor,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    elevation: 8, // for Android
                                }}

                            >
                                <Image source={item.image} className="w-full h-32 rounded-2xl " />

                                <Text className={`text-md text-center py-2 font-bold`} style={{ color: item.titlecolor }} >{item.title}</Text>
                                <Link className="w-full mx-auto flex justify-center" href={`${item.link}`}>
                                    <TouchableOpacity className={`flex-row justify-center items-center rounded-lg p-2 w-[85%] ${item.buttonStyle}`}>
                                        <Ionicons name="game-controller" size={20} color="white" />
                                        <Text className="ml-3 text-white font-medium">{item.buttontext}</Text>
                                    </TouchableOpacity>
                                </Link>



                            </View>
                        ))}
                    </View>
                </View>

            </ScrollView>

            {/* Bottom Navigation */}
            <View className="flex-row justify-around items-center py-3 bg-white rounded-t-2xl absolute bottom-0 w-full shadow-blue-300 shadow-xl h-14">

                <TouchableOpacity>
                    <Ionicons name="home" size={24} color="#4a89dc" />
                </TouchableOpacity>
                <Link href="/collection"><TouchableOpacity>
                    <Ionicons name="cart" size={24} color="#4a89dc" />
                </TouchableOpacity>
                </Link>

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