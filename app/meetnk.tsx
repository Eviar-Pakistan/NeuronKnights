import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter, Link } from "expo-router";
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeetNK() {
    const router = useRouter();
    const screenWidth = Dimensions.get('window').width;

    const characters = [
        {
            id: '1',
            name: 'Sir Cortex',
            description: 'Master of Thinking',
            image: require('../assets/images/sircortexavt.png'),
            gradientColors: ['#87CEEB', '#4A90E2']
        },
        {
            id: '2',
            name: 'Synapse',
            description: 'Speed of Lightning',
            image: require('../assets/images/synapseavt.png'),
            gradientColors: ['#FFE066', '#FFA500']
        },
        {
            id: '3',
            name: 'Glia',
            description: 'Guardian of Memory',
            image: require('../assets/images/gliaavt.png'),
            gradientColors: ['#90EE90', '#32CD32']
        },
        {
            id: '4',
            name: 'Amygdala',
            description: 'Guardian of Emotions',
            image: require('../assets/images/amygdalaavt.png'),
            gradientColors: ['#FF6B6B', '#DC143C']
        },
        {
            id: '5',
            name: 'NeuroShield',
            description: 'The Brain Defender',
            image: require('../assets/images/neuroshieldavt.png'),
            gradientColors: ['#9370DB', '#6A5ACD']
        },
        {
            id: '6',
            name: 'Hipp',
            description: 'Master of Memories',
            image: require('../assets/images/hippavt.png'),
            gradientColors: ['#4169E1', '#1E90FF']
        }
    ];

    const renderCharacterCard = ({ item: character }) => (
        <View style={{
            width: (screenWidth - 48) / 2,
            marginBottom: 16,
            marginHorizontal: 8,
        }}>
            <LinearGradient
                colors={character.gradientColors}
                style={{
                    borderRadius: 20,
                    padding: 20,
                    alignItems: 'center',
                    minHeight: 220
                }}
            >
                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: 8
                }}>
                    {character.name}
                </Text>

                <Text style={{
                    color: '#FFFFFF',
                    fontSize: 12,
                    textAlign: 'center',
                    marginBottom: 16,
                    opacity: 0.9
                }}>
                    {character.description}
                </Text>

                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 16
                }}>
                    <Image
                        source={character.image}
                        style={{
                            width: 80,
                            height: 130,
                            resizeMode: 'contain'
                        }}
                    />
                </View>

                <Link href={"/detailnk"} asChild>



                    <TouchableOpacity style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        paddingHorizontal: 20,
                        paddingVertical: 8,
                        borderRadius: 15
                    }}>
                        <Text style={{
                            color: character.gradientColors[1],
                            fontSize: 12,
                            fontWeight: 'bold'
                        }}>
                            Tap to Meet
                        </Text>
                    </TouchableOpacity>
                </Link>
            </LinearGradient>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* Header */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                zIndex: 10,
                justifyContent: 'space-between',
                paddingHorizontal: 16,
                paddingVertical: 8,
                backgroundColor: 'white',
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
            }}>
                
                <TouchableOpacity onPress={() => router.push('/welcometonk')}>
                    <Ionicons name="chevron-back-circle" size={28} color="orange" />
                </TouchableOpacity>
                <Text style={{
                    color: '#4a89dc',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: 'bold'
                }}>
                    Meet The NeuroKnights
                </Text>

                <View style={{ width: 24 }} />
            </View>

            {/* Main Content */}
            <ScrollView style={{
                flex: 1,
                marginTop: -16,
                zIndex: 0,
                width: '100%',
                paddingBottom: 0
            }}>
                {/* Description Text */}
                <View style={{
                    paddingHorizontal: 20,
                    paddingTop: 30,
                    paddingBottom: 20
                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#666',
                        textAlign: 'center',
                        lineHeight: 24
                    }}>
                        Explore the brain's heroes, each with unique powers and personalities!
                    </Text>
                </View>

                {/* Characters Grid using FlatList */}
                <View style={{
                    backgroundColor: "#EEEDED",
                    paddingVertical: 16,
                    borderTopRightRadius: 22,
                    borderTopLeftRadius: 22,
                    minHeight: 500 // Ensure enough height for FlatList
                }}>
                    <FlatList
                        data={characters}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{
                            justifyContent: 'center',
                            paddingHorizontal: 8
                        }}
                        contentContainerStyle={{
                            paddingBottom: 20
                        }}
                        renderItem={renderCharacterCard}
                        scrollEnabled={false} // Disable FlatList scrolling since it's inside ScrollView
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}