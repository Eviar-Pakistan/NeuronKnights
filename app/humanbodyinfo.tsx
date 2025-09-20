import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function HumanBodyInfo() {
    const router = useRouter();
    const { width: screenWidth } = Dimensions.get('window');

    const amazingFacts = [
        {
            id: 1,
            text: "The adult brain weighs about 3 pounds (1.4 kilograms)."
        },
        {
            id: 2,
            text: "The brain uses about 20% of the total oxygen in your body."
        },
        {
            id: 3,
            text: "There are about 86 billion neurons in the human brain."
        },
        {
            id: 4,
            text: "Your brain generates about 12-25 watts of electricity - enough to power a low wattage LED light."
        }
    ];

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}

            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-[#4a89dc] text-center text-2xl font-bold">Brain

                </Text>

                <View className="w-6" />
            </View>

            {/* Main Content */}
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Nervous System Badge */}
                <View style={{
                    alignItems: 'center',
                    marginTop: 10,
                    marginBottom: 20
                }}>
                    <LinearGradient
                        colors={['#AD98FB', '#4A89DC']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{
                            borderRadius: 25,
                            paddingHorizontal: 20,
                            paddingVertical: 8
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 'bold'
                        }}>
                            Nervous System
                        </Text>
                    </LinearGradient>
                </View>

                {/* Character and Brain Section */}
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    marginBottom: 20
                }}>
                    {/* Character */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center'
                    }}>
                        <Image
                            source={require('../assets/images/ladymanora.png')} // Replace with your character image
                            style={{
                                width: 120,
                                height: 160,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>

                    {/* Brain with thought bubble */}
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        position: 'relative'
                    }}>


                        <Image
                            source={require('../assets/images/brain.png')} // Replace with your brain image
                            style={{
                                width: 80,
                                height: 80,
                                resizeMode: 'contain'
                            }}
                        />


                        {/* Small thought bubbles */}
                        <View style={{
                            position: 'absolute',
                            bottom: 40,
                            left: 40
                        }}>
                            <View style={{
                                width: 8,
                                height: 8,
                                backgroundColor: '#E3F2FD',
                                borderRadius: 4,
                                borderWidth: 1,
                                borderColor: '#2196F3',
                                marginBottom: 5
                            }} />
                            <View style={{
                                width: 12,
                                height: 12,
                                backgroundColor: '#E3F2FD',
                                borderRadius: 6,
                                borderWidth: 1,
                                borderColor: '#2196F3'
                            }} />
                        </View>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    paddingHorizontal: 40,
                    marginBottom: 30
                }}>
                    {/* Be the Last Winner Button */}
                    <View style={{
                        backgroundColor: '#E9E9E9',
                        borderRadius: 15,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        flexDirection: 'column',
                        alignItems: "flex-start",
                        width: "50%"
                    }}>
                        <Text
                            style={{
                                color: "#FF6C6A",
                                fontSize: 8,
                                fontWeight: "700"
                            }}
                        >
                            Hi there! I'm Lady Manora!
                        </Text>

                        <Text
                            style={{
                                color: "black",
                                fontSize: 8,
                                fontWeight: "700"
                            }}
                        >
                            Click on play button to watch an amazing explanation video!
                        </Text>



                    </View>

                    {/* Watch Video Button */}
                    <TouchableOpacity style={{
                        backgroundColor: '#FF6B6B',
                        borderRadius: 15,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Ionicons name="play" size={12} color="white" style={{ marginRight: 5 }} />
                        <Text style={{
                            color: 'white',
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>
                            Watch Video
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: "#EEEEEE",
                    borderRadius: 22,
                    paddingVertical: 20,
                    flex: 1,
                    width: "100%",
                    paddingHorizontal: 20,

                }}>

                    {/* Description */}
                    <View style={{

                        marginBottom: 30
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#666',
                            lineHeight: 22,
                            textAlign: 'justify'
                        }}>
                            The brain is the command center of the human body. It controls thoughts, memory, movement, emotions and organ functions. The brain consists of the cerebrum, cerebellum, and brainstem, and is made of soft tissue weighing gray and white matter.
                        </Text>
                    </View>

                    {/* Amazing Facts Section */}
                    <View style={{

                        marginBottom: 30
                    }}>
                        {/* Section Title */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 20
                        }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                color: '#333',
                                marginRight: 10
                            }}><Text style={{ fontSize: 24 }}>🤯</Text>
                                Amazing Facts
                            </Text>

                        </View>

                        {/* Facts List */}
                        {amazingFacts.map((fact) => (
                            <View
                                key={fact.id}
                                style={{
                                    backgroundColor: '#F8F9FA',
                                    borderRadius: 15,
                                    padding: 15,
                                    marginBottom: 10,
                                    flexDirection: 'row',
                                    alignItems: 'flex-start',
                                    borderLeftWidth: 4,
                                    borderLeftColor: '#4A89DC'
                                }}
                            >
                                <View style={{
                                    backgroundColor: '#4A89DC',
                                    borderRadius: 10,
                                    padding: 6,
                                    marginRight: 12,
                                    marginTop: 2
                                }}>
                                    <Ionicons name="bulb" size={16} color="white" />
                                </View>

                                <Text style={{
                                    fontSize: 14,
                                    color: '#333',
                                    lineHeight: 20,
                                    flex: 1
                                }}>
                                    {fact.text}
                                </Text>
                            </View>
                        ))}
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    );
}