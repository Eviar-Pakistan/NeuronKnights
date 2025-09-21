import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Intro1Parents() {
    const router = useRouter();

    // Individual image requirements
    const image1 = require("../assets/images/info1thumbnail.png");
    const image2 = require("../assets/images/thumbnail 2.png");
    const image3 = require("../assets/images/thumbnail 2.png");
    const image4 = require("../assets/images/thumbnail 2.png");

    // For dots indicator - keep track of total images
    const totalImages = 4;

    //    Horizontal Carousel
    const [carousalCurrentIndex, setCarousalCurrentIndex] = useState(0);
    const carousalViewRef = useRef(null);
    const { width: screenWidth } = Dimensions.get('window');

    const handleCarousalScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / screenWidth);
        setCarousalCurrentIndex(index);
    };

    return (
        <SafeAreaView className="flex-1 w-full bg-white ">

            <TouchableOpacity
                onPress={() => router.back()}
                className="absolute top-10 left-4 z-10 p-2"
            >
                <Ionicons name="arrow-back" size={28} color="orange" />
            </TouchableOpacity>

            <View className="flex-[0.5] w-full">
                <ScrollView
                    ref={carousalViewRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onMomentumScrollEnd={handleCarousalScroll}
                    style={{ width: '100%' }}
                >
                    {/* First Image */}
                    <View style={{ width: screenWidth, flex: 1 }}>
                        <Image
                            source={image1}
                            resizeMode="cover"
                            style={{
                                width: screenWidth,
                                flex: 1,
                            }}
                        />
                    </View>

                    {/* Second Image */}
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={image2}
                            resizeMode="cover"
                            style={{
                                width: screenWidth,
                                flex: 1,
                            }}
                        />
                    </View>

                    {/* Third Image */}
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={image3}
                           resizeMode="cover"
                            style={{
                                width: screenWidth,
                                flex: 1,
                            }}
                        />
                    </View>

                    {/* Fourth Image */}
                    <View style={{ width: screenWidth }}>
                        <Image
                            source={image4}
                            resizeMode="cover"
                            style={{
                                width: screenWidth,
                                flex: 1,
                            }}
                        />
                    </View>
                </ScrollView>

                {/* Dots Indicator */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10
                }}>
                    {/* Manually create dots for each image */}
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: carousalCurrentIndex === 0 ? 'black' : '#4A89DC',
                            marginHorizontal: 4
                        }}
                    />
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: carousalCurrentIndex === 1 ? 'black' : '#4A89DC',
                            marginHorizontal: 4
                        }}
                    />
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: carousalCurrentIndex === 2 ? 'black' : '#4A89DC',
                            marginHorizontal: 4
                        }}
                    />
                    <View
                        style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: carousalCurrentIndex === 3 ? 'black' : '#4A89DC',
                            marginHorizontal: 4
                        }}
                    />
                </View>
            </View>

            <View className="flex-[0.5] items-center justify-center px-4">
                <Text className="text-3xl font-bold text-orange-300 text-center mb-6">
                    Welcome to {"\n"} Neuro Knights
                </Text>
                <Text className="text-center mb-4">
                    Join the adventure where fun meets learning, explore exciting games, unlock knowledge, and become hero.
                </Text>
                <Link href="/intro2pbg" asChild>
                    <TouchableOpacity style={{
                        shadowColor: '#4A89DC',
                        shadowOffset: { width: 0, height: 6.8 },
                        shadowOpacity: 0.4,
                        shadowRadius: 10,
                        elevation: 10
                    }} className="bg-[#4a89dc] w-[70%] p-4 rounded-full">
                        <Text className="text-xl font-bold text-center text-white">Continue</Text>
                    </TouchableOpacity>
                </Link>
                   <Link href="/welcometonk"  className="mt-5">  <Text className="my-2 w-full text-center ">Skip</Text></Link>
            </View>

        </SafeAreaView>
    );
}