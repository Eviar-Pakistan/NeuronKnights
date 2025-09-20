import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Dimensions } from 'react-native';



import { useRouter } from "expo-router";


import card from "../assets/icons/card.png";
import deliver from "../assets/icons/deliver.png";
import Return from "../assets/icons/return.png";

export default function ProductDetails() {



    // Get the screen width
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    const router = useRouter()

    const [selectedSize, setSelectedSize] = useState('12oZ');
    const [selectedColor, setSelectedColor] = useState('White');

    const sizes = ['12oZ', '18oZ', '32oZ'];
    const colors = [
        { name: 'White', color: '#FFFFFF' },
        { name: 'Red', color: '#FF0000' },
        { name: 'Green', color: '#00FF00' },
        { name: 'Blue', color: '#0000FF' },
        { name: 'Yellow', color: '#FFFF00' }
    ];

    const features = [
        {

            iconImage: deliver,
            title: 'Free Delivery',
            subtitle: 'On orders above $50',
            shadowColor: "#4A89DC"
        },
        {

            iconImage: Return,
            title: '30-Day Returns',
            subtitle: 'Easy returns and exchanges',
            shadowColor: "#FF6C6A"
        },
        {

            title: 'Secure Checkout',
            iconImage: card,
            subtitle: 'SSL encrypted payment',
            shadowColor: "#9B66C1"
        }
    ];

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
                    className="w-full"
                    style={{ height: screenHeight * 0.4 }} // Half screen height
                >
                    <Image
                        source={require("../assets/images/product.png")}
                        resizeMode="contain"
                        style={{ width: "100%", height: "100%" }} // Ensure image takes full width
                    />

                    <View style={{ flexDirection: "column", alignItems: "center", gap: 4, position: "absolute", right: 2, top: 16 }}>
                        <TouchableOpacity>
                            <Ionicons
                                name={"heart"}
                                size={38}
                                color={"#FF3B3B"}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="information-circle" size={38} color="#4a89dc" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View
                    className=" w-full"
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
                            flexDirection: "row",
                            gap: 10,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#fdc12b",
                                    borderRadius: 5,
                                    padding: 2,
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



                    <View style={{ marginBottom: 20 }}>

                        <View style={{
                            flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", columnGap: 20, marginTop: 20
                        }}>

                            <View style={{ flexDirection: 'column', gap: 10 }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#333',
                                    marginBottom: 10
                                }}>
                                    Sizes
                                </Text>
                                {sizes.map((size) => (
                                    <TouchableOpacity
                                        key={size}
                                        onPress={() => setSelectedSize(size)}
                                        style={{
                                            paddingHorizontal: 20,
                                            paddingVertical: 10,
                                            borderRadius: 8,
                                            backgroundColor: selectedSize === size ? '#4A90E2' : 'white',
                                            shadowColor: '#4A89DC',
                                            shadowOffset: { width: 0, height: 4 },
                                            shadowOpacity: 0.3,
                                            shadowRadius: 6,
                                            elevation: 5 // for Android
                                        }}
                                    >
                                        <Text style={{
                                            color: selectedSize === size ? '#FFFFFF' : '#666',
                                            fontWeight: selectedSize === size ? 'bold' : 'normal'
                                        }}>
                                            {size}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Color Section */}
                            <View style={{ marginBottom: 20 }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: '#333',
                                    marginBottom: 20,

                                }}>
                                    Color
                                </Text>

                                {/* Selected Color Display */}
                                <View style={{
                                    borderRadius: 8,
                                    paddingVertical: 12,
                                    paddingHorizontal: 16,
                                    backgroundColor: '#FFFFFF',
                                    marginBottom: 15,
                                    shadowColor: '#4A89DC',
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,

                                    elevation: 5 // for Android
                                }}>
                                    <Text style={{
                                        color: '#333',
                                        fontSize: 16,
                                        textAlign: 'center'
                                    }}>
                                        {selectedColor}
                                    </Text>
                                </View>

                                {/* Color Options */}
                                <View style={{ flexDirection: 'row', gap: 15, paddingVertical: 10, paddingHorizontal: 5, backgroundColor: "#EAEAEA" }}>
                                    {colors.map((colorOption) => (
                                        <TouchableOpacity
                                            key={colorOption.name}
                                            onPress={() => setSelectedColor(colorOption.name)}
                                            style={{
                                                width: 35,
                                                height: 35,
                                                borderRadius: 20,
                                                backgroundColor: colorOption.color,

                                                borderColor: selectedColor === colorOption.name ? '#333' : '#CCC',
                                                shadowColor: '#000',
                                                shadowOffset: { width: 0, height: 2 },
                                                shadowOpacity: 0.1,
                                                shadowRadius: 4,
                                                elevation: 3
                                            }}
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>

                    </View>



                    {/* Buy Now Button */}
                    <TouchableOpacity style={{
                        backgroundColor: '#28A745',
                        paddingVertical: 15,
                        borderRadius: 10,
                        marginBottom: 25,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.2,
                        shadowRadius: 5,
                        elevation: 5
                    }}>
                        <Text style={{
                            color: '#FFFFFF',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textAlign: 'center'
                        }}>
                            Buy Now
                        </Text>
                    </TouchableOpacity>

                    {/* Features Section */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom: 25,
                        gap: 10
                    }}>
                        {features.map((feature, index) => (
                            <View key={index} style={{
                                flex: 1,
                                backgroundColor: '#FFFFFF',
                                padding: 15,
                                borderRadius: 10,
                                alignItems: 'center',
                                shadowColor: `${feature.shadowColor}`,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.9,
                                shadowRadius: 4,
                                elevation: 3
                            }}>
                                <Image source={feature.iconImage} style={{ width: 24, height: 24, marginBottom: 8 }}>

                                </Image>
                                <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: '#333',
                                    textAlign: 'center',
                                    marginBottom: 4
                                }}>
                                    {feature.title}
                                </Text>
                                <Text style={{
                                    fontSize: 10,
                                    color: '#666',
                                    textAlign: 'center'
                                }}>
                                    {feature.subtitle}
                                </Text>
                            </View>
                        ))}
                    </View>

                    {/* About The Product Section */}
                    <View>
                        <Text style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: 15
                        }}>
                            About The Product :
                        </Text>

                        <Text style={{
                            fontSize: 14,
                            color: '#666',
                            lineHeight: 20,
                            marginBottom: 15
                        }}>
                            Quench your thirst in style with this stainless steel water bottle. Available in 36 sizes (12oz, 18oz, 32oz) this water bottle features a double-wall stainless steel build that keeps your drinks frosty (or 24h) and soothingly hot for 12h. This BPA-free, steel water bottle comes with a twist-on lid for easy sipping, making it excellent for daily use at work, or school, in the car and beyond.
                        </Text>

                        <View style={{ gap: 5 }}>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                • Materials: 100% stainless steel (16oz, 20oz)
                            </Text>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                • polypropylene (lid)
                            </Text>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                • BPA-free, twist-on lid
                            </Text>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                • Available in three sizes: 12oz (0.35 l), 18oz (0.53 l) and 32oz (0.94 l)
                            </Text>
                            <Text style={{ fontSize: 14, color: '#666' }}>
                                • Double-wall stainless steel construction
                            </Text>
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
        </SafeAreaView >
    );
}