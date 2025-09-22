import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient'; // You'll need this for gradients
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import itemimage1 from "../assets/images/Mask group-1.png";
import itemimage2 from "../assets/images/Mask group-2.png";
import itemimage3 from "../assets/images/Mask group-3.png";
import itemimage4 from "../assets/images/Mask group-4.png";
import itemimage5 from "../assets/images/Mask group-5.png";
import itemimage from "../assets/images/Mask group.png";

export default function WelcomeToNK() {
    // Individual image requirements
    const image1 = require("../assets/images/info1thumbnail.png");
    const image2 = require("../assets/images/thumbnail 2.png");
    const image3 = require("../assets/images/thumbnail 2.png");
    const image4 = require("../assets/images/thumbnail 2.png");

    const listItems = [
        {
            id: "1",
            title: "Brain \n Games",
            titlecolor: "#9B66C1",
            image: itemimage1,
            gradientColors: ['#c026d3', '#ec4899'], // fuchsia-600 to pink-600
            buttontext: "Play Now",
            link: "/playgames"
        },
        {
            id: "2",
            title: "Immune  \n Guardians",
            titlecolor: "#37ACB0",
            image: itemimage2,
            gradientColors: ['#5eead4', '#14b8a6'], // teal-200 to teal-500
            buttontext: "Voice Chat",
            link: "/voicechat1"
        },
        {
            id: "3",
            title: "Take Selfie",
            titlecolor: "#FF6C6A",
            image: itemimage3,
            gradientColors: ['#f59e0b', '#ec4899'], // amber-500 to pink-500
            buttontext: "Take Photo",
            link: "/camerachoose"
        },
        {
            id: "4",
            title: "Human Body",
            titlecolor: "#FFC73D",
            image: itemimage4,
            gradientColors: ['#fcd34d', '#f97316'], // amber-300 to orange-500
            buttontext: "let's Learn",
            link: "/humanbody"
        },
        {
            id: "5",
            title: "Smart \n Challenge",
            titlecolor: "#4A89DC",
            image: itemimage5,
            gradientColors: ['#3b82f6', '#c026d3'], // blue-500 to fuchsia-600
            buttontext: "let's Do it",
            link: "/challenge"
        },
        {
            id: "6",
            title: "Knight  \n Code Quest",
            titlecolor: "#4A89DC",
            image: itemimage,
            gradientColors: ['#ec4899', '#fbbf24'], // pink-600 to amber-400
            buttontext: "let's Learn",
            link: "/codequest"
        },
    ];

    // Get the screen width
    const { width: screenWidth } = Dimensions.get('window');

    // Horizontal Carousel state
    const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
    const carousalViewRef = useRef(null);

    const handleCarousalScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setCarousalCurrentIndex(index);
    };

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                zIndex: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: '#4a89dc',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16
            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>
                    Welcome To{"\n"}
                    <Text style={{ color: '#fed7aa' }}>NeuroKnights</Text>
                </Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Main Content */}
            <ScrollView style={{
                flex: 1,
                marginTop: -16,
                zIndex: 0,
                width: '100%'
            }} contentContainerStyle={{ paddingBottom: 100 }}>

                {/* Horizontal Carousel */}
                <View style={{
                    backgroundColor: '#4a89dc',
                    padding: 16,
                    width: '100%',
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16
                }}>
                    <View style={{ height: 250, width: '100%' }}>
                        <ScrollView
                            ref={carousalViewRef}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            onMomentumScrollEnd={handleCarousalScroll}
                            style={{ width: '100%', height: '100%' }}
                        >
                            {/* Carousel Images */}
                            {[image1, image2, image3, image4].map((image, index) => (
                                <View key={index} style={{ width: screenWidth - 32, height: 200, marginRight: 8 }}>
                                    <Image
                                        source={image}
                                        resizeMode="cover"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 12,
                                        }}
                                    />
                                </View>
                            ))}
                        </ScrollView>

                        {/* Dots Indicator */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: 10
                        }}>
                            {[0, 1, 2, 3].map((index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: carousalCurrentIndex === index ? '#F2BC5D' : 'white',
                                        marginHorizontal: 4
                                    }}
                                />
                            ))}
                        </View>
                    </View>
                </View>

                <Text style={{
                    fontSize: 24,
                    marginLeft: 16,
                    marginVertical: 12,
                    fontWeight: 'bold',
                    color: '#4A89dc'
                }}>
                    Explore Our Features
                </Text>

                {/* Vertical List */}
                <View style={{ backgroundColor: "white", paddingHorizontal: 16 }}>
                    <FlatList
                        data={listItems}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: "column",
                                    alignItems: "center",
                                    borderRadius: 12,
                                    padding: 12,
                                    marginVertical: 8,
                                    backgroundColor: "white",
                                    shadowColor: item.titlecolor,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    elevation: 8,
                                    marginHorizontal: 4,
                                }}
                            >
                                <Image
                                    source={item.image}
                                    style={{ width: "100%", height: 128, borderRadius: 16 }}
                                    resizeMode="cover"
                                />
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        paddingVertical: 8,
                                        color: item.titlecolor,
                                    }}
                                >
                                    {item.title}
                                </Text>

                                {/* Fixed Button with LinearGradient */}
                                <TouchableOpacity
                                    onPress={() => router.push(item.link)}
                                    style={{ width: "100%" }}
                                >
                                    <LinearGradient
                                        colors={item.gradientColors}
                                        start={{ x: 0, y: 0 }}  // Left
                                        end={{ x: 1, y: 0 }}    // Right
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 8,
                                            padding: 12,
                                            width: "100%",
                                        }}
                                    >
                                        <Ionicons name="game-controller" size={16} color="white" />
                                        <Text style={{
                                            marginLeft: 8,
                                            color: "white",
                                            fontWeight: "500",
                                            fontSize: 14
                                        }}>
                                            {item.buttontext || "Play"}
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>

            {/* Bottom Navigation */}
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingVertical: 12,
                backgroundColor: 'white',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                position: 'absolute',
                bottom: 0,
                width: '100%',
                shadowColor: '#93c5fd',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.25,
                shadowRadius: 8,
                elevation: 8,
                height: 56
            }}>
                <TouchableOpacity>
                    <Ionicons name="home" size={24} color="#4a89dc" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/collection")}>
                    <Ionicons name="cart" size={24} color="#4a89dc" />
                </TouchableOpacity>

                {/* Floating Icon */}
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity
                        onPress={() => router.push("/playgames")}
                        style={{
                            width: 64,
                            height: 64,
                            backgroundColor: '#f87171',
                            borderRadius: 24,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: -48,
                            alignSelf: 'center'
                        }}
                    >
                        <Ionicons name="game-controller" size={36} color="white" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => router.push("/meetnk")}>
                    <Ionicons name="chatbubbles" size={24} color="#4a89dc" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/logout")}>
                    <Ionicons name="person" size={24} color="#4a89dc" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}