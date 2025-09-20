import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';



export default function VoiceChat1() {

    const router = useRouter()

    const carouselImages = [
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
    ];


    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { width: screenWidth } = Dimensions.get('window');
    const cardWidth = screenWidth * 0.8;
    const cardSpacing = 20;

    //    Horizontal Carousal
    const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
    const carousalViewRef = useRef(null);

    const handleCarousalScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setCarousalCurrentIndex(index);
    };


    const characters = [
        {
            id: 1,
            name: 'Storm Eos',
            subtitle: 'Lightning Specialist',
            description: 'I am Storm Eos, the lightning specialist of our team. My lightning-fast reflexes help to keep our body safe and healthy through quick reactions.',
            image: require('../assets/images/vccharac1.png'),
            backgroundColor: '#FF6B35',
            gamepadIcon: true,
            cubeIcon: true,
            userIcon: true,
            isOnline: true
        },
        {
            id: 2,
            name: 'Sir Cortex',
            subtitle: 'Master of Thinking',
            description: 'Master of the mind and keeper of all things brainy! Your brain is like a master tactician filled with billions of tiny messengers.',
            image: require('../assets/images/vccharac1.png'),
            backgroundColor: '#87CEEB',
            gamepadIcon: true,
            cubeIcon: true,
            userIcon: true,
            isOnline: false
        },
        {
            id: 3,
            name: 'Synapse',
            subtitle: 'Speed of Lightning',
            description: 'The fastest messenger in the neural network, delivering information at lightning speed across the brain.',
            image: require('../assets/images/vccharac1.png'),
            backgroundColor: '#FFE066',
            gamepadIcon: true,
            cubeIcon: true,
            userIcon: true,
            isOnline: true
        }
    ];

    const scrollToCard = (index) => {
        const scrollX = index * (cardWidth + cardSpacing);
        scrollViewRef.current?.scrollTo({ x: scrollX, animated: true });
        setCurrentIndex(index);
    };

    const handleScrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (currentIndex < characters.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    };

    const renderCharacterCard = (character, index) => (
        <View
            key={character.id}
            style={{
                width: cardWidth,
                marginRight: cardSpacing,
                backgroundColor: 'white',
                borderRadius: 22,
                overflow: 'hidden',
                padding: 15,
                shadowColor: '#37ACB0',
                shadowOffset: { width: -1, height: 4.8 },
                shadowOpacity: 0.5,
                shadowRadius: 17.82,
                elevation: 10,



            }}
        >
            {/* Character Image Section */}
            <ImageBackground
                source={character.image}
                style={{
                    height: 200,

                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 22
                }}
                imageStyle={{
                    resizeMode: 'cover',
                    borderRadius: 22,
                    height: 200,
                    width: "100%"
                }}
            >
                {/*  Info */}
                <View style={{
                    position: 'absolute',
                    top: 15,
                    right: 15,
                    backgroundColor: "white",
                    borderRadius: 12,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    flexDirection: 'row',
                    alignItems: 'center',

                }}>

                    <Ionicons name="information-circle" size={9} color="#4a89dc" />


                    <Text style={{
                        color: 'black',
                        fontSize: 7,
                        fontWeight: 'bold'
                    }}>
                        Learn more
                    </Text>
                </View>


            </ImageBackground>

            {/* Character Info Section */}
            <View style={{
                padding: 20
            }}>
                {/* Name and Specialist Badge */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: "center",
                    marginBottom: 12,


                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: '#333',
                        flex: 1
                    }}>
                        {character.name}
                    </Text>

                    <LinearGradient
                        colors={['#14b8a6', '#0e7490']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            backgroundColor: '#00BCD4',
                            borderRadius: 12,
                            paddingHorizontal: 8,
                            paddingVertical: 6
                        }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 6,
                            fontWeight: 'bold'
                        }}>
                            Bacterial Defense Specialist
                        </Text>
                    </LinearGradient>
                </View>

                {/* Description */}
                <Text style={{
                    fontSize: 12,
                    color: '#666',
                    lineHeight: 16,
                    marginBottom: 16
                }}>
                    {character.description}
                </Text>

                {/* Voice Chat Button */}
                <LinearGradient
                    colors={['#14b8a6', '#0e7490']}
                    start={{ x: 0, y: 1 }}
                    style={{
                        backgroundColor: '#00BCD4',
                        borderRadius: 25,
                        paddingVertical: 12,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                    <Ionicons name="mic" size={16} color="white" style={{ marginRight: 8 }} />
                    <Text style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold'
                    }}>
                        Voice Chat
                    </Text>
                </LinearGradient>


            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-[#4a89dc] text-center text-2xl font-bold">Immuno Guardians

                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 -mt-4 z-0 w-full pb-0 ">
                {/* Horizontal Carousel */}

                <View style={{ backgroundColor: '#F1F3FD', width: '100%', borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}>
                    <ScrollView
                        ref={carousalViewRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onMomentumScrollEnd={handleCarousalScroll}
                        style={{ width: '100%' }}
                    >
                        {carouselImages.map((uri, index) => (
                            <View key={index} style={{ width: screenWidth }}>
                                <Image
                                    source={require("../assets/images/vcthumbnail1.png")}
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


                {/* Horizzontal List 2 */}

                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    paddingVertical: 20,
                    marginBottom:50
                }}>
                    {/* Navigation Arrows and ScrollView Container */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }}>
                        {/* Left Arrow */}
                        <TouchableOpacity
                            onPress={handleScrollLeft}
                            style={{
                            }}
                            disabled={currentIndex === 0}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={28}
                                color={"red"}
                            />
                        </TouchableOpacity>

                        {/* Horizontal ScrollView */}
                        <ScrollView
                            ref={scrollViewRef}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={cardWidth + cardSpacing}
                            decelerationRate="fast"
                            style={{
                                flex: 1,
                                paddingVertical: 20,
                                borderRadius: 22


                            }}
                            contentContainerStyle={{


                            }}
                            onMomentumScrollEnd={(event) => {
                                const newIndex = Math.round(event.nativeEvent.contentOffset.x / (cardWidth + cardSpacing));
                                setCurrentIndex(newIndex);
                            }}
                        >
                            {characters.map((character, index) => renderCharacterCard(character, index))}
                        </ScrollView>

                        {/* Right Arrow */}
                        <TouchableOpacity
                            onPress={handleScrollRight}
                            disabled={currentIndex === characters.length - 1}
                        >
                            <Ionicons
                                name="arrow-forward-outline"
                                size={28}
                                color={"red"}
                            />
                        </TouchableOpacity>
                    </View>

                    {/* Page Indicators */}
                    {/* <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        {characters.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => scrollToCard(index)}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    backgroundColor: currentIndex === index ? '#2196F3' : '#E0E0E0',
                                    marginHorizontal: 4
                                }}
                            />
                        ))}
                    </View> */}
                </View>



            </ScrollView>

            {/* Bottom Navigation */}
            <View className=" flex-row justify-around items-center py-3 bg-white rounded-t-2xl absolute bottom-0 w-full shadow-blue-300 shadow-xl h-14">
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