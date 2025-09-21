import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from "expo-router";
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function PersonaSelect() {
    const router = useRouter();
    const screenWidth = Dimensions.get('window').width;

    const characters = [
        {
            id: '1',
            name: 'Captain Cortex',
            title: 'Master of Logic &\nProblem Solving',
            description: 'Logical reasoning and strategic thinking',
            image: require('../assets/images/sircortexavt.png'),
            gradientColors: ['#87CEEB', '#4A90E2']
        },
        {
            id: '2',
            name: 'Synapse',
            title: 'Speed of Lightning &\nQuick Thinking',
            description: 'Fast processing and quick reactions',
            image: require('../assets/images/synapseavt.png'),
            gradientColors: ['#FFE066', '#FFA500']
        },
        {
            id: '3',
            name: 'Glia',
            title: 'Guardian of Memory &\nKnowledge',
            description: 'Memory retention and knowledge storage',
            image: require('../assets/images/gliaavt.png'),
            gradientColors: ['#90EE90', '#32CD32']
        },
        {
            id: '4',
            name: 'Amygdala',
            title: 'Guardian of Emotions &\nEmpathy',
            description: 'Emotional intelligence and empathy',
            image: require('../assets/images/amygdalaavt.png'),
            gradientColors: ['#FF6B6B', '#DC143C']
        },
        {
            id: '5',
            name: 'NeuroShield',
            title: 'The Brain Defender &\nProtector',
            description: 'Defense mechanisms and protection',
            image: require('../assets/images/neuroshieldavt.png'),
            gradientColors: ['#9370DB', '#6A5ACD']
        },
        {
            id: '6',
            name: 'Hipp',
            title: 'Master of Memories &\nLearning',
            description: 'Learning processes and memory formation',
            image: require('../assets/images/hippavt.png'),
            gradientColors: ['#4169E1', '#1E90FF']
        }
    ];

    const renderCharacterCard = ({ item }) => (
        <View style={{
            width: 250,
            height: 500,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            // iOS Shadow
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.15,
            shadowRadius: 12,
            // Android Shadow
            elevation: 8,
        }}>
            {/* Character Name */}
            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: '#4A89DC',
                textAlign: 'center',
                marginTop: 10,
                marginBottom: 20
            }}>
                {item.name}
            </Text>

            {/* Character Image */}
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20
            }}>
                <Image
                    source={item.image}
                    style={{
                        width: 140,
                        height: 220,
                        resizeMode: 'contain'
                    }}
                />
            </View>

            {/* Character Title */}
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
                marginBottom: 10,
                lineHeight: 22
            }}>
                {item.title}
            </Text>

           

            {/* Description */}
            <Text style={{
                fontSize: 12,
                color: '#666',
                textAlign: 'center',
                marginBottom: 20,
                lineHeight: 16
            }}>
                {item.description}
            </Text>

            {/* Select Button */}
            <TouchableOpacity style={{
                width: '100%',
                marginBottom: 10
            }}>
                <LinearGradient
                    colors={['#00D4AA', '#00B894']}
                    style={{
                        borderRadius: 25,
                        paddingVertical: 12,
                        paddingHorizontal: 30,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: "#00D4AA",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: 4,
                        elevation: 6,
                    }}
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginRight: 8
                    }}>
                        Select
                    </Text>
                    <Ionicons name="checkmark-circle" size={20} color="white" />
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 12,
                backgroundColor: 'white',
            }}>
                <TouchableOpacity onPress={() => router.push("/codequest")}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <View style={{ width: 24 }} />
            </View>

            {/* Main Content */}
            <ScrollView style={{
                flex: 1,
                width: '100%',
            }} contentContainerStyle={{ paddingBottom: 100 }}>
                
                {/* Title Section */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    paddingBottom: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: '#4A89DC',
                        textAlign: 'center',
                        marginBottom: 12
                    }}>
                        Choose Your Avatar
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: '#666',
                        textAlign: 'center',
                        lineHeight: 22
                    }}>
                        Select your unique knight persona and{"\n"}begin your epic adventure!
                    </Text>
                </View>

                {/* Horizontal Character Cards */}
                <View style={{ paddingLeft: 20 }}>
                    <FlatList
                        data={characters}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={renderCharacterCard}
                        contentContainerStyle={{
                            paddingRight: 20
                        }}
                    />
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
}