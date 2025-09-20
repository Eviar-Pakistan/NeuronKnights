import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function MeetNK() {
    const router = useRouter();
    const screenWidth = Dimensions.get('window').width;
    
    const characters = [
        {
            name: 'Sir Cortex',
            description: 'Master of Thinking',
            image: require('../assets/images/sircortexavt.png'), 
            gradientColors: ['#87CEEB', '#4A90E2']
        },
        {
            name: 'Synapse',
            description: 'Speed of Lightning',
            image: require('../assets/images/synapseavt.png'), // Replace with your image path
            gradientColors: ['#FFE066', '#FFA500']
        },
        {
            name: 'Glia',
            description: 'Guardian of Memory',
            image: require('../assets/images/gliaavt.png'), // Replace with your image path
            gradientColors: ['#90EE90', '#32CD32']
        },
        {
            name: 'Amygdala',
            description: 'Guardian of Emotions',
            image: require('../assets/images/amygdalaavt.png'), // Replace with your image path
            gradientColors: ['#FF6B6B', '#DC143C']
        },
        {
            name: 'NeuroShield',
            description: 'The Brain Defender',
            image: require('../assets/images/neuroshieldavt.png'), // Replace with your image path
            gradientColors: ['#9370DB', '#6A5ACD']
        },
        {
            name: 'Hipp',
            description: 'Master of Memories',
            image: require('../assets/images/hippavt.png'), // Replace with your image path
            gradientColors: ['#4169E1', '#1E90FF']
        }
    ];

    const renderCharacterCard = (character, index) => (
        <View key={index} style={{
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
                <TouchableOpacity onPress={() => router.back()}>
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
                    paddingBottom:20
                    
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

                {/* Characters Grid */}
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    backgroundColor:"#EEEDED",
                    paddingVertical:16,
                    borderTopRightRadius:22,
                    borderTopLeftRadius:22
                   
                }}>
                    {characters.map((character, index) => renderCharacterCard(character, index))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}