import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function VoiceChat2() {
    const router = useRouter();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const [userName, setUserName] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <View className="flex-row items-center  z-10 justify-between px-4 py-2 bg-white rounded-b-xl">
                <TouchableOpacity onPress={() => router.back()} >
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                

               
            </View>

            {/* Main Content */}
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Welcome Section */}
                <View style={{

                    paddingTop: 20,
                    paddingBottom: 30,
                    alignItems: 'center'
                }}>
                    {/* Title */}
                    <Text style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        color: '#4A90E2',
                        textAlign: 'center',
                        marginBottom: 20
                    }}>
                        Hi there! I'm Dendril!
                    </Text>

                    {/* Description */}
                    <Text style={{
                        fontSize: 16,
                        color: '#666',
                        textAlign: 'center',
                        lineHeight: 24,
                        marginBottom: 30,
                        marginHorizontal: 10
                    }}>
                        I'm excited to chat with you about the immune system!{'\n'}

                    </Text>
                    <View style={{
                        backgroundColor: "#F1F3FD",
                        borderRadius: 22,
                        paddingVertical: 20,
                        flex: 1,
                        width: "100%",
                        paddingHorizontal: 20,

                    }}>
                        <TextInput
                            value={userName}
                            onChangeText={setUserName}
                            placeholder="Enter your name...."
                            style={{
                                width: '100%',
                                backgroundColor: '#F8F9FA',
                                borderRadius: 25,
                                paddingHorizontal: 20,
                                paddingVertical: 15,
                                fontSize: 16,
                                color: '#333',
                                marginBottom: 20,
                                shadowColor: "#4A89DC59",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.9,
                                shadowRadius: 5.62,
                                elevation: 6

                            }}
                            placeholderTextColor="#999"
                        />

                        {/* Let's Chat Button */}
                        <TouchableOpacity style={{
                            width: '100%',
                            backgroundColor: '#37ACB0',
                            borderRadius: 25,
                            paddingVertical: 15,
                            alignItems: 'center',
                            marginBottom: 40,
                            shadowColor: '#37ACB0',
                            shadowOffset: { width: 0, height: 9.8 },
                            shadowOpacity: 0.6,
                            shadowRadius: 17.82,
                            elevation: 10
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>
                                Let's Chat!
                            </Text>
                        </TouchableOpacity>

                        {/* Chat with Basil Section */}
                        <Text style={{
                            fontSize: 35,
                            fontWeight: "black",
                            color: '#FF6B6B',
                            textAlign: 'center',
                            marginBottom: 8
                        }}>
                            Chat with Basil
                        </Text>

                        <Text style={{
                            fontSize: 16,
                            color: '#999',
                            textAlign: 'center',
                            marginBottom: 30
                        }}>
                            Adaptive Immune System Leader
                        </Text>

                        {/* Character Image Section */}
                        <View style={{
                            position: 'relative',
                            height: 400,
                            marginHorizontal: 20,
                            marginBottom: 30
                        }}>
                            {/* Character Image */}
                            <Image
                                source={require('../assets/images/basil-character.png')} // Replace with your character image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 20,
                                    resizeMode: 'cover'
                                }}
                            />

                            {/* Learn More Button */}
                            <TouchableOpacity style={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                borderRadius: 15,
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Ionicons name="information-circle" size={16} color="#4A90E2" />
                                <Text style={{
                                    color: '#4A90E2',
                                    fontSize: 12,
                                    fontWeight: '600',
                                    marginLeft: 4
                                }}>
                                    Learn More
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>


                {/* Bottom Action Buttons */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingBottom: 30,
                    alignItems: 'center'
                }}>
                    {/* Voice Chat Button */}
                    <TouchableOpacity style={{
                        backgroundColor: '#FF6B6B',
                        borderRadius: 25,
                        paddingVertical: 15,
                        paddingHorizontal: 40,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 20,
                        shadowColor: '#FF6B6B',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.6,
                        shadowRadius: 8,
                        elevation: 8
                    }}>
                        <Ionicons name="mic" size={28} color="white" style={{ marginRight: 8 }} />
                        <Text style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>
                            Voice Chat
                        </Text>
                    </TouchableOpacity>

                    {/* Click to Start Button */}
                    <TouchableOpacity style={{
                        backgroundColor: '#F8F9FA',
                        borderRadius: 20,
                        paddingVertical: 12,
                        paddingHorizontal: 30,
                        shadowColor: "#4A89DC59",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.9,
                        shadowRadius: 5.62,
                        elevation: 6
                    }}>
                        <Text style={{
                            color: '#4A90E2',
                            fontSize: 16,
                            fontWeight: '600'
                        }}>
                            Click to start
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}