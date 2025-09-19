import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from 'react-native';



import { useRouter } from "expo-router";


import itemimage1 from "../assets/images/Mask group-1.png";


export default function Collection() {


    const carouselImages = [
        "../assets/images/imgi_2_image 1.png",
        "../assets/images/imgi_2_image 1.png",
        "../assets/images/imgi_2_image 1.png",
    ];

    const listItems = [
        {
            id: "1",
            title: "Whimsical Water Bottle, 32oz | Cute Character Drink Container",
            description:
                "Stay hydrated in style with this stunning 32oz Water Bottle. Crafted from high-quality stainless",
            price: "$32.30",
            oldPrice: "$37.14",
            rating: 4.8,
            stars: 4,
            isSale: true,
            isFavorite: true,
            info: true,
            image: itemimage1,
        },
        {
            id: "2",
            title: "Whimsical Water Bottle, 32oz | Cute Character Drink Container",
            description:
                "Stay hydrated in style with this stunning 32oz Water Bottle. Crafted from high-quality stainless",
            price: "$32.30",
            oldPrice: "$37.14",
            rating: 4.8,
            stars: 4,
            isSale: true,
            isFavorite: false,
            info: true,
            image: itemimage1,
        },
        // Add more items as needed
    ]


    // Get the screen width
    const screenWidth = Dimensions.get('window').width;

    const router=useRouter()
    return (
        <SafeAreaView className="flex-1 bg-white">

            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-[#4a89dc] rounded-b-xl">
                <TouchableOpacity  onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-white text-center text-2xl font-bold">OUR LATEST COLLECTION
                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}

            <ScrollView className="flex-1 -mt-4 z-0 w-full">
                {/* Horizontal Carousel */}

                <View className="bg-[#4a89dc] w-full rounded-b-xl ">
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 0 }} // Optional: Adjust padding for content
                        className="w-full"
                    >
                        {carouselImages.map((uri, index) => (
                            <View key={index} className="w-full mr-4">
                                <Image
                                    source={require("../assets/images/sale.png")}
                                    className=""
                                    resizeMode="cover"
                                    style={{ width: screenWidth * 1, height: 210 }}
                                />
                            </View>
                        ))}
                    </ScrollView>
                </View>




                {/* Vertical List */}
                <View className="bg-white px-4">
                    <View className="grid grid-cols-2 w-full gap-x-2 bg-white">
                        {listItems.map((item) => (
                            <View
                                key={item.id}
                                style={{
                                    backgroundColor: "white",
                                    width: (screenWidth - 32) / 2,
                                    borderRadius: 16,
                                    marginBottom: 14,
                                    padding: 10,
                                    shadowColor: "#4a89dc",
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.07,
                                    shadowRadius: 8,
                                    elevation: 2,
                                }}
                            >
                                {/* Top Row: Sale, Favorite, Info */}
                                <View
                                    className="bg-gray-50 z-10"
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: 0,
                                    }}
                                >
                                    {item.isSale ? (
                                        <View
                                            style={{
                                                backgroundColor: "#ff3b3b",
                                                paddingHorizontal: 7,
                                                paddingVertical: 2,
                                                borderRadius: 4,
                                            }}
                                        >
                                            <Text style={{ color: "white", fontWeight: "normal", fontSize: 12, paddingHorizontal: 4 }}>
                                                Sale
                                            </Text>
                                        </View>
                                    ) : (
                                        <View />
                                    )}
                                    <View style={{ flexDirection: "column", alignItems: "center", gap: 4, position: "absolute", right: 0, top: 1 }}>
                                        <TouchableOpacity>
                                            <Ionicons
                                                name={item.isFavorite ? "heart" : "heart-outline"}
                                                size={22}
                                                color={item.isFavorite ? "#FF3B3B" : "#ccc"}
                                            />
                                        </TouchableOpacity>
                                        {item.info && (
                                            <TouchableOpacity>
                                                <Ionicons name="information-circle" size={22} color="#4a89dc" />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                </View>

                                {/* Product Image */}
                                <View
                                    className="bg-gray-50"
                                    style={{
                                        alignItems: "center",
                                        marginBottom: 5,
                                        padding: 13

                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: "80%",
                                            height: 85,
                                            resizeMode: "contain",
                                        }}
                                    />
                                </View>

                                {/* Product Title */}
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 13,
                                        color: "#4a89dc",
                                        marginBottom: 4,
                                        minHeight: 38,
                                    }}
                                    numberOfLines={2}
                                >
                                    {item.title}
                                </Text>

                                {/* Product Description */}
                                <Text
                                    style={{
                                        fontSize: 11,
                                        color: "#6a6a6a",
                                        marginBottom: 7,

                                    }}
                                    numberOfLines={2}
                                >
                                    {item.description}
                                </Text>

                                {/* Price Row */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 5 }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 16, color: "#222" }}>
                                        {item.price}
                                    </Text>
                                    <Text
                                        style={{
                                            textDecorationLine: "line-through",
                                            color: "#d94b4b",
                                            marginLeft: 7,
                                            fontSize: 12,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.oldPrice}
                                    </Text>
                                </View>

                                {/* Rating Row */}
                                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Ionicons
                                            key={i}
                                            name={i < item.stars ? "star" : "star-outline"}
                                            size={15}
                                            color="#FFC73D"
                                            style={{ marginRight: 1 }}
                                        />
                                    ))}
                                    <Text style={{ fontSize: 12, color: "#6a6a6a", marginLeft: 4 }}>
                                        ({item.rating})
                                    </Text>
                                </View>

                                {/* Action Buttons */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 6,
                                        marginTop: 3,
                                    }}
                                >
                                    <TouchableOpacity

                                        style={{
                                            flex: 1,
                                            backgroundColor: "#4a89dc",
                                            borderRadius: 40,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            paddingVertical: 7,
                                        }}
                                    >
                                        <Text style={{ color: "white", fontWeight: "bold" }}>Buy</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#fdc12b",
                                            borderRadius: 10,
                                            padding: 2,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Ionicons name="add" size={20} color="white" />
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
                                        <Text style={{ color: "white", fontSize: 10, fontWeight: "bold",textAlign:"center" }}>1</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "red",
                                            borderRadius: 10,
                                            padding: 2,
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Ionicons name="remove" size={20} color="white" />
                                    </TouchableOpacity>

                                </View>
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