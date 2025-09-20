import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


import pin from "../assets/icons/pin.png";
export default function DetailNK() {
    const router = useRouter();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    // Sample character data - you can pass this as params or props
    const character = {
        name: 'Sir Cortex',
        subtitle: 'Master of the Mind',
        description: 'An ingenious super-soldier known as Sir Cortex, the master of the mind and keeper of all things brainy! Your brain is like a master tactician filled with billions of tiny messengers working at lightning speed. From memory and problem-solving, to creativity and focus, I shall unveil the secrets of how your brain truly works! Prepare to unlock the wisdom of your greatest superpower—your mind!',
        image: require('../assets/images/sircortexavt.png'),
        gradientColors: ['#87CEEB', '#4A90E2'],
        backgroundColor: '#87CEEB'
    };

    const imageHeight = screenHeight * 0.7;
    const textHeight = screenHeight * 0.3;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#87CEEB' }}>

            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                zIndex: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: '#87CEEB',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,

            }}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>

                {/* <Text style={{
                    color: '#4a89dc',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>
                    Meet The NeuroKnights
                </Text> */}

                <View style={{ width: 24 }} />
            </View>

            {/* Character Image Section - 70% */}

            <ScrollView>
                <LinearGradient
                    colors={character.gradientColors}

                    style={{
                        height: imageHeight,
                        backgroundColor: character.backgroundColor,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',

                    }}>
                    {/* Sound Icon */}
                    <TouchableOpacity style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        borderRadius: 20,
                        padding: 8,

                    }}>
                        <Ionicons name="volume-high" size={24} color="white" />
                    </TouchableOpacity>

                    {/* Character Name and Subtitle */}
                    <View style={{

                        position: 'absolute',
                        top: 0
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 40,
                            fontWeight: 'bold',
                            textShadowColor: 'rgba(0, 0, 0, 0.3)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3
                        }}>
                            {character.name}
                        </Text>
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            opacity: 0.9,
                            marginTop: 4,
                            textShadowColor: 'rgba(0, 0, 0, 0.3)',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 3,
                            textAlign: "center"
                        }}>
                            {character.subtitle}
                        </Text>
                    </View>

                    {/* Character Image */}
                    <Image
                        source={character.image}
                        style={{
                            width: screenWidth * 0.6,
                            height: imageHeight * 0.7,
                            resizeMode: 'contain',
                            marginTop: 60
                        }}
                    />
                </LinearGradient>

                {/* Text Description Section - 30% */}
                <View style={{
                    height:"auto",
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    paddingBottom: 20,
                   
                }}>

                    <View
                        style={{
                            position: "relative", padding: 16, borderRadius: 22,
                            shadowColor: `${character.backgroundColor}`,
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.9,
                            shadowRadius: 4,
                            elevation: 3
                        }}
                    >
                        <Image source={pin} style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,


                        }}>

                        </Image>

                        {/* About Title */}
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: 12
                        }}>
                            About {character.name}
                        </Text>

                        {/* Description */}
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={{
                                fontSize: 14,
                                color: '#666',
                                lineHeight: 20,
                                textAlign: 'justify'
                            }}>
                                {character.description}
                            </Text>
                        </ScrollView>

                    </View>
                    {/* Heart Icon */}

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}