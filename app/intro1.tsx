import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useRef, useState } from "react";
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Intro1() {
    const router = useRouter();

    const carouselImages = [
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
        "../assets/images/thumbnail 2.png",
    ];


    //    Horizontal Carousal
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
                className="absolute top-4 left-4 z-10 p-2"
            >
                <Ionicons name="arrow-back" size={28} color="orange" />
            </TouchableOpacity>


            <View className="flex-[0.5]  w-full">
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
                                style={{ width: screenWidth, height: 460, objectFit: "contain" }}
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
                                backgroundColor: carousalCurrentIndex === index ? 'black' : '#4A89DC',
                                marginHorizontal: 4
                            }}
                        />
                    ))}
                </View>
            </View>

            <View className="flex-[0.5] items-center justify-center px-4">
                <Text className="text-3xl font-bold text-orange-300 text-center mb-6">
                    Welcome to {"\n"} Neuro Knights
                </Text>
                <Text className="text-center mb-4">
                    Join the adventure where fun meets learning, explore exciting games, unlock knowledge, and become hero.
                </Text>
                <Link href="/ageselection" asChild>
                    <TouchableOpacity style={{
                        shadowColor: '#4A89DC',
                        shadowOffset: { width: 0, height: 6.8 },
                        shadowOpacity: 0.4,
                        shadowRadius: 10,
                        elevation: 10
                    }} className="bg-[#4a89dc] w-[70%] p-4 rounded-full">
                        <Text className="text-xl  font-bold text-center text-white">Continue</Text>
                    </TouchableOpacity>
                </Link>
                <Text className="my-2">Skip</Text>
            </View>


        </SafeAreaView>
    );
}