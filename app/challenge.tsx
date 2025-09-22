import { Ionicons } from "@expo/vector-icons";
import React from 'react';

import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from "expo-linear-gradient";

export default function Challenge() {

    const router = useRouter()


    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center z-10 justify-between px-4 py-2 bg-[#4A89DC] rounded-b-xl">
                <TouchableOpacity onPress={() => router.push('/welcometonk')} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text className="text-white text-center text-2xl font-bold">Welcome  Smart{"\n"} Challenge Center
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
                        AI-Powered Learning, Advance for Futerealiti digital
                    </Text>
                    <View className="flex-1">
                        <Image style={{
                            width: "100%"
                        }} source={require("../assets/images/intro1thumbnail.png")} />

                    </View>
                </View>
                <View style={{
                    width: "100%",
                    marginTop: 35,
                    paddingHorizontal: 22,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"


                }}>
                    <TouchableOpacity
                        onPress={() => router.push("/assessment")}
                        style={{ flex: 0.32, }}
                    >
                        <LinearGradient

                            colors={["#AB98FA", "#4B89DC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{

                                height: 140,
                                borderRadius: 22,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-around"
                            }}
                        >
                            <Image resizeMode="contain" source={require("../assets/icons/assessment.png")}
                                style={{
                                    width: 50,
                                    height: 50
                                }} />

                            <Text className="text-white font-bold text-lg text-center">
                                Assessment
                            </Text>
                        </LinearGradient>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => router.push("/learningpath")}
                        style={{ flex: 0.32, }}
                    >
                        <LinearGradient

                            colors={["#AB98FA", "#4B89DC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{

                                height: 140,
                                borderRadius: 22,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-around"
                            }}
                        >
                            <Image resizeMode="contain" source={require("../assets/icons/maps.png")}
                                style={{
                                    width: 50,
                                    height: 50
                                }} />

                            <Text className="text-white font-bold text-lg text-center">
                                learning Path
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => router.push("/aitools")}
                        style={{ flex: 0.32, }}
                    >
                        <LinearGradient

                            colors={["#AB98FA", "#4B89DC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                height: 140,
                                borderRadius: 22,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-around"
                            }}
                        >
                            <Image resizeMode="contain" source={require("../assets/icons/ai.png")}
                                style={{
                                    width: 50,
                                    height: 50
                                }} />

                            <Text className="text-white font-bold text-lg text-center">
                                AI Tools
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>



                </View>

                {/* Hero Section */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 40,
                    paddingBottom: 30,

                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        {/* Left Content */}
                        <View style={{ flex: 0.75, paddingRight: 20, }}>
                            <Text style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                color: '#ff6b6b',
                                marginBottom: 12,
                                lineHeight: 38
                            }}>
                                Ready to Learn?
                            </Text>

                            <Text style={{
                                fontSize: 12,
                                color: '#64748b',
                                lineHeight: 22,
                                marginBottom: 24
                            }}>
                                Start your personalized learning journey with{"\n"}AI-powered challenges and assessments!
                            </Text>

                            {/* Begin Assessment Button */}
                            <TouchableOpacity
                                onPress={() => router.push("/assessment")}
                            >
                                <LinearGradient
                                    colors={["#AB98FA", "#4B89DC"]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={{
                                        borderRadius: 25,
                                        paddingVertical: 14,
                                        paddingHorizontal: 24,
                                        alignItems: 'center',
                                        shadowColor: '#8b5cf6',
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 8,
                                        elevation: 8,
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    }}>
                                        Begin Assessment
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>

                        {/* Knight Character */}
                        <View style={{ position: "absolute", alignItems: 'center', right: -10 }}>
                            <Image
                                source={require('../assets/images/sircortexavt.png')} // Replace with your knight image
                                style={{

                                    width: 120,
                                    height: 200,
                                    resizeMode: 'contain'
                                }}
                            />
                        </View>
                    </View>
                </View>

                {/* Feature Cards Section */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 20
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 16
                    }}>
                        {/* Track Progress Card */}
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 16,
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            elevation: 4,
                        }}>
                            {/* Icon */}
                            <Image
                                source={require("../assets/icons/growth2.png")}
                                resizeMode="contain"
                                style={{
                                    width: 33,
                                    height: 33,
                                    marginBottom: 4

                                }} />



                            {/* Title */}
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#3b82f6',
                                marginBottom: 8
                            }}>
                                Track Progress
                            </Text>

                            {/* Description */}
                            <Text style={{
                                fontSize: 12,
                                color: '#64748b',
                                lineHeight: 20,
                                marginBottom: 16
                            }}>
                                Monitor your learning journey with detailed analytics and achievements.
                            </Text>

                            {/* Progress Bar */}
                            <View style={{
                                height: 8,
                                backgroundColor: '#e2e8f0',
                                borderRadius: 3,
                                overflow: 'hidden'
                            }}>
                                <View style={{
                                    height: '100%',
                                    width: '65%',
                                    backgroundColor: '#06b6d4',
                                    borderRadius: 3
                                }} />
                            </View>
                        </View>

                        {/* Earn Rewards Card */}
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white',
                            borderRadius: 16,
                            padding: 15,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.1,
                            shadowRadius: 8,
                            elevation: 4,
                        }}>
                            {/* Icon */}
                            <Image
                                source={require("../assets/icons/cup.png")}
                                resizeMode="contain"
                                style={{
                                    width: 33,
                                    height: 33,
                                    marginBottom: 4

                                }} />

                            {/* Title */}
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#3b82f6',
                                marginBottom: 8
                            }}>
                                Earn Rewards
                            </Text>

                            {/* Description */}
                            <Text style={{
                                fontSize: 14,
                                color: '#64748b',
                                lineHeight: 20,
                                marginBottom: 16
                            }}>
                                Unlock achievements and collect points as you complete challenges.
                            </Text>

                            {/* Reward Icons */}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#fbbf24',
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name="star" size={12} color="white" />
                                </View>
                                <View style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#f97316',
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name="flame" size={12} color="white" />
                                </View>
                                <View style={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: '#ef4444',
                                    borderRadius: 12,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name="heart" size={12} color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>



            </ScrollView>



        </SafeAreaView>
    );
}