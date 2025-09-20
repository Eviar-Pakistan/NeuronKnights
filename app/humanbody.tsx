import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';



export default function HumanBody() {

    const router = useRouter()

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



    const bodySystems = [
        {
            id: 1,
            name: 'Brain',
            system: 'nervous system',
            image: require('../assets/images/brain.png'),

        },
        {
            id: 2,
            name: 'Heart',
            system: 'cardiovascular system',
            image: require('../assets/images/heart.png'),

        },
        {
            id: 3,
            name: 'Kidneys',
            system: 'urinary system',
            image: require('../assets/images/kidneys.png'),

        },
        {
            id: 4,
            name: 'Liver',
            system: 'digestive system',
            image: require('../assets/images/liver.png'),

        },
        {
            id: 5,
            name: 'Eyes',
            system: 'sensory system',
            image: require('../assets/images/eyes.png'),

        },
        {
            id: 6,
            name: 'Lungs',
            system: 'respiratory system',
            image: require('../assets/images/lungs.png'),

        }
    ];

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-[#4A89DC] rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-white text-center text-2xl font-bold">Explore the Human Body
                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}
            <ScrollView className="flex-1 -mt-4 z-0 w-full pb-0 ">
                {/* Horizontal Carousel */}

                <View style={{ backgroundColor: '#4A89DC', width: '100%', borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}>

                    <Text style={{
                        margin: 15,
                        textAlign: "center",
                        color: "white"
                    }}>
                        Join the Immuno Guardians on an amazing journey through your body!
                    </Text>
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
                                    backgroundColor: carousalCurrentIndex === index ? '#F2BC5D' : 'white',
                                    marginHorizontal: 4
                                }}
                            />
                        ))}
                    </View>
                </View>


                {/* Horizzontal List 2 */}

                {/* Discover Your Amazing Body Section */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingVertical: 20
                }}>
                    {/* Section Title */}
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#FF6B6B',
                        textAlign: 'center',
                        marginBottom: 20
                    }}>
                        Discover Your Amazing Body
                    </Text>

                    {/* Body Systems Grid */}
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        {bodySystems.map((system) => (
                            <View
                                key={system.id}
                                style={{
                                    width: '47%',
                                    backgroundColor: "white",
                                    borderRadius: 15,

                                    padding: 15,
                                    marginBottom: 10,
                                    alignItems: 'center',

                                    shadowColor: "#4A89DC59",
                                    shadowOffset: {
                                        width: 2,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.9,
                                    shadowRadius: 15,
                                    elevation: 6
                                }}
                            >
                                {/* System Name */}
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: "#4A89DC",
                                    marginBottom: 15,
                                    textAlign: 'center'
                                }}>
                                    {system.name}
                                </Text>

                                {/* System Image */}
                                <Image
                                    source={system.image}
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: 'contain',
                                        marginBottom: 15
                                    }}
                                />

                                {/* System Type Badge */}
                                <LinearGradient
                                    colors={['#AD98FB', '#4A89DC']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                       
                                        borderRadius: 10,
                                        paddingHorizontal: 8,
                                        paddingVertical: 6,
                                        marginBottom: 10
                                    }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 8,
                                        fontWeight: 'bold'
                                    }}>
                                        {system.system}
                                    </Text>
                                </LinearGradient>

                                {/* Learn More Button */}
                                <TouchableOpacity style={{
                                    backgroundColor: '#FF6B6B',
                                    borderRadius: 15,
                                    paddingHorizontal: 15,
                                    paddingVertical: 8,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 12,
                                        fontWeight: 'bold',
                                        marginRight: 5
                                    }}>
                                        Learn more
                                    </Text>

                                    <Image
                                        style={{
                                            width: 12, height: 12
                                        }}
                                        source={require("../assets/icons/select.png")} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </View>

            </ScrollView>



        </SafeAreaView>
    );
}