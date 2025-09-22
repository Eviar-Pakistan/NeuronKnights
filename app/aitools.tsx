import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function AITools() {
    const router = useRouter();
    const { width: screenWidth } = Dimensions.get('window');

    const topCards = [
        {
            id: 1,
            title: 'Always Verify',
            subtitle: 'Check AI answers with trusted sources',
            color: '#06b6d4'
        },
        {
            id: 2,
            title: 'Think Critically',
            subtitle: 'Check AI answers with humans too',
            color: '#06b6d4'
        }
    ];

    const aiCharacters = [
        {
            id: 1,
            name: 'Nature Explorer',
            image: require('../assets/images/amygdalaavt.png'),
            buttonText: 'Try It Out'
        },
        {
            id: 2,
            name: 'Ocean Explorer',
            image: require('../assets/images/gliaavt.png'),
            buttonText: 'Get Ideas'
        },
        {
            id: 3,
            name: 'Space Explorer',
            image: require('../assets/images/hippavt.png'),
            buttonText: 'Learn More'
        }
    ];

    const features = [
        'Safe conversations',
        'Creative writing',
        'Learning support'
    ];

    const renderTopCard = (card) => (
        <View
            key={card.id}
            style={{

                borderRadius: 12,
                padding: 16,
                marginRight: 12,
                minWidth: 150, shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4


            }}
        >
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: "#008FBE",
                marginBottom: 4,
                textAlign: "center"
            }}>
                {card.title}
            </Text>
            <Text style={{
                fontSize: 12,
                color: '#64748b',
                lineHeight: 16
            }}>
                {card.subtitle}
            </Text>
        </View>
    );

    const renderCharacterCard = (character) => (
        <View
            key={character.id}
            style={{
                backgroundColor: 'white',
                borderRadius: 16,
                padding: 16,
                marginRight: 16,
                width: 140,
                alignItems: 'center',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4
            }}
        >
            <Image
                source={character.image}
                style={{
                    width: 120,
                    height: 145,
                    resizeMode: 'contain',
                    marginBottom: 12
                }}
            />

            <TouchableOpacity style={{ width: '100%' }}>
                <LinearGradient
                    colors={["#AD98FB", "#4A89DC"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        paddingVertical: 8,
                        borderRadius: 20,
                        alignItems: 'center'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>
                        {character.buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8fafc' }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: 'white',
            }}>
                  <TouchableOpacity onPress={() => router.push("/challenge")}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text style={{
                    color: '#4a89dc',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>
                   AI-Adaptive Learning Path
                </Text>
                <View style={{ width: 1 }} />
            </View>

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Top Cards Horizontal Scroll */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 16
                    }}
                    style={{ flexGrow: 0 }}
                >
                    {topCards.map((card) => renderTopCard(card))}
                </ScrollView>

                {/* Main AI Buddy Card */}
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    marginHorizontal: 16,
                    marginBottom: 20,
                    padding: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.1,
                    shadowRadius: 12,
                    elevation: 8
                }}>
                    {/* Header Row */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 32,
                                height: 32,
                                backgroundColor: '#4A89DC',
                                borderRadius: 16,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8
                            }}>
                                <Ionicons name="chatbubbles" size={18} color="white" />
                            </View>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: '#374151'
                            }}>
                                AI Buddy Chat
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: '#00BBC2',
                            paddingHorizontal: 12,
                            paddingVertical: 4,
                            borderRadius: 12
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 12,
                                fontWeight: 'bold'
                            }}>
                                Kid-Safe
                            </Text>
                        </View>
                    </View>

                    {/* AI Character Image */}
                    <View style={{
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <Image
                            source={require('../assets/images/ai-buddy.png')}
                            style={{
                                width: '100%',
                                height: 275,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>

                    {/* Description Text */}
                    <Text style={{
                        fontSize: 16,
                        color: '#64748b',
                        textAlign: 'center',
                        marginBottom: 20,
                        lineHeight: 22
                    }}>
                        Your personalized AI assistant for learning and creative projects!
                    </Text>

                    {/* Start Chatting Button */}
                    <TouchableOpacity style={{ marginBottom: 20 }}>
                        <LinearGradient
                            colors={["#AD98FB", "#4A89DC"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                paddingVertical: 14,
                                borderRadius: 25,
                                alignItems: 'center'
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                fontWeight: 'bold'
                            }}>
                                Start Chatting
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    {/* Features List */}
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingHorizontal: 10
                    }}>
                        {features.map((feature, index) => (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    flex: 1,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{
                                    color: '#12BC59',
                                    fontSize: 14,
                                    marginRight: 4,
                                    fontWeight: 'bold'
                                }}>
                                    ✓
                                </Text>
                                <Text style={{
                                    color: '#12BC59',
                                    fontSize: 10,
                                    textAlign: 'center'
                                }}>
                                    {feature}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* AI Characters Horizontal Scroll */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 8
                    }}
                    style={{ flexGrow: 0 }}
                >
                    {aiCharacters.map((character) => renderCharacterCard(character))}
                </ScrollView>
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
                <TouchableOpacity>
                    <Ionicons name="cart" size={24} color="#4a89dc" />
                </TouchableOpacity>

                <View style={{ position: 'relative' }}>
                    <TouchableOpacity style={{
                        width: 64,
                        height: 64,
                        backgroundColor: '#f87171',
                        borderRadius: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        top: -48,
                        alignSelf: 'center'
                    }}>
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