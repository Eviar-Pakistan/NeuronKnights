import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import itemimage1 from "../assets/images/Mask group-1.png";
import itemimage2 from "../assets/images/Mask group-2.png";
import itemimage3 from "../assets/images/Mask group-3.png";
import itemimage4 from "../assets/images/Mask group-4.png";
import itemimage5 from "../assets/images/Mask group-5.png";
import itemimage from "../assets/images/Mask group.png";

export default function PlayGames() {
    const router = useRouter();

    const carouselImages = [
        require("../assets/images/gamesthumbnail.png"),
        require("../assets/images/thumbnail 2.png"),
        require("../assets/images/thumbnail 2.png"),
        require("../assets/images/thumbnail 2.png"),
    ];

    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width: screenWidth } = Dimensions.get('window');
    const cardWidth = screenWidth * 0.8;
    const cardSpacing = 20;

    // Horizontal Carousel
    const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
    const carousalViewRef = useRef(null);

    const handleCarousalScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setCarousalCurrentIndex(index);
    };

    const listItems = [
        {
            id: "1",
            title: "Brain Games",
            titlecolor: "#9B66C1",
            image: itemimage1,
            gradientColors: ['#a78bfa', '#0ea5e9'], // violet-300 to sky-600
            subtitle: "Learn nutritions and healthy eating habits"
        },
        {
            id: "2",
            title: "Immune Guardians",
            titlecolor: "#37ACB0",
            image: itemimage2,
            gradientColors: ['#a78bfa', '#0ea5e9'],
            subtitle: "Learn nutritions and healthy eating habits"
        },
        {
            id: "3",
            title: "Take Selfie",
            titlecolor: "#FF6C6A",
            image: itemimage3,
            gradientColors: ['#a78bfa', '#0ea5e9'],
            subtitle: "Learn nutritions and healthy eating habits"
        },
        {
            id: "4",
            title: "Human Body",
            titlecolor: "#FFC73D",
            image: itemimage4,
            gradientColors: ['#a78bfa', '#0ea5e9'],
            subtitle: "Learn nutritions and healthy eating habits"
        },
        {
            id: "5",
            title: "Smart Challenge",
            titlecolor: "#4A89DC",
            image: itemimage5,
            gradientColors: ['#a78bfa', '#0ea5e9'],
            subtitle: "Learn nutritions and healthy eating habits"
        },
        {
            id: "6",
            title: "Knight Code Quest",
            titlecolor: "#4A89DC",
            image: itemimage,
            gradientColors: ['#a78bfa', '#0ea5e9'],
            subtitle: "Learn nutritions and healthy eating habits"
        },
    ];

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
                backgroundColor: 'white',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12
            }}>
                <TouchableOpacity onPress={() => router.push('/welcometonk')}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text style={{
                    color: '#4a89dc',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>
                    Neuro Games
                </Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Main Content */}
            <ScrollView style={{
                flex: 1,
                marginTop: -16,
                zIndex: 0,
                width: '100%'
            }} contentContainerStyle={{ paddingBottom: 80 }}>
                
                {/* Horizontal Carousel */}
                <View style={{
                    backgroundColor: '#F1F3FD',
                    width: '100%',
                    borderBottomLeftRadius: 22,
                    borderBottomRightRadius: 22
                }}>
                    <ScrollView
                        ref={carousalViewRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onMomentumScrollEnd={handleCarousalScroll}
                        style={{ width: '100%' }}
                    >
                        {carouselImages.map((imageSource, index) => (
                            <View key={index} style={{ width: screenWidth }}>
                                <Image
                                    source={imageSource}
                                    resizeMode="cover"
                                    style={{ width: screenWidth, height: 220 }}
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
                        {carouselImages.map((_, index) => (
                            <View
                                key={index}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: carousalCurrentIndex === index ? 'black' : '#4A90E2',
                                    marginHorizontal: 4
                                }}
                            />
                        ))}
                    </View>
                </View>

                {/* Vertical List */}
                <View style={{ backgroundColor: "white", paddingHorizontal: 16 }}>
                    <FlatList
                        data={listItems}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        columnWrapperStyle={{ justifyContent: "space-between", marginTop: 20 }}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        renderItem={({ item }) => (
                            <View
                                style={{
                                    width: (screenWidth - 32 - 8) / 2,
                                    borderRadius: 12,
                                    marginBottom: 16,
                                    backgroundColor: "white",
                                    shadowColor: item.titlecolor,
                                    shadowOffset: { width: 0, height: 4 },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    elevation: 8,
                                }}
                            >
                                <View style={{ width: "100%" }}>
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: "100%",
                                            height: 120,
                                            borderRadius: 16
                                        }}
                                        resizeMode="cover"
                                    />
                                </View>

                                <Text
                                    style={{
                                        fontSize: 16,
                                        marginLeft: 12,
                                        textAlign: "left",
                                        marginTop: 12,
                                        fontWeight: "bold",
                                        color: "#4a89dc"
                                    }}
                                >
                                    {item.title}
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 12,
                                        marginLeft: 12,
                                        textAlign: "left",
                                        marginVertical: 12,
                                        color: "#9CA3AF"
                                    }}
                                >
                                    {item.subtitle}
                                </Text>

                                {/* Fixed Button with LinearGradient */}
                                <TouchableOpacity
                                    style={{
                                        marginBottom: 16,
                                        alignSelf: "center",
                                        width: '80%'
                                    }}
                                >
                                    <LinearGradient
                                        colors={item.gradientColors}
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            borderRadius: 20,
                                            paddingHorizontal: 28,
                                            paddingVertical: 8,
                                        }}
                                    >
                                        <Text style={{
                                            color: "white",
                                            fontWeight: "bold",
                                            fontSize: 16
                                        }}>
                                            Play
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        )}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>

            {/* Bottom Navigation - Made visible and functional */}
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
                <TouchableOpacity onPress={() => router.push('/welcometonk')}>
                    <Ionicons name="home" size={24} color="#4a89dc" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.push('/collection')}>
                    <Ionicons name="cart" size={24} color="#4a89dc" />
                </TouchableOpacity>

                {/* Floating Icon */}
                <View style={{ position: 'relative' }}>
                    <TouchableOpacity 
                        onPress={() => router.push('/playgames')}
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

                <TouchableOpacity onPress={() => router.push('/meetnk')}>
                    <Ionicons name="chatbubbles" size={24} color="#4a89dc" />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => router.push('/logout')}>
                    <Ionicons name="person" size={24} color="#4a89dc" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}