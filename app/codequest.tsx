import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from "expo-router";
import React from 'react';
import { Dimensions, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function CodeQuest() {
    const router = useRouter();
    const screenWidth = Dimensions.get('window').width;

    const questOptions = [
        {
            id: '1',
            title: 'Choose Your Avatar',
            description: 'Select your unique knight persona',
            image: require('../assets/images/sircortexavt.png'),
            backgroundColor: '#89c2eaff'
        },
        {
            id: '2',
            title: 'Discovery Quiz',
            description: 'Uncover your learning superpowers!',
            image: require('../assets/images/synapseavt.png'),
            backgroundColor: '#f59ebbff'
        },
        {
            id: '3',
            title: 'Learning Path',
            description: 'Start your personalized journey',
            image: require('../assets/images/gliaavt.png'),
            backgroundColor: '#98fd98ff'
        },
        {
            id: '4',
            title: 'Power Building',
            description: 'Develop your brain superpowers',
            image: require('../assets/images/neuroshieldavt.png'),
            backgroundColor: '#ffcf83ff'
        }
    ];

    const renderQuestCard = ({ item, index }) => (
        <Link href={"/personaselect"} asChild>
            <View style={{
                width: (screenWidth - 48) / 2,
                marginBottom: 20,
                marginHorizontal: 8,
            }}>
                <TouchableOpacity style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    padding: 20,
                    alignItems: 'center',
                    height: 220, // Fixed height for all cards
                    justifyContent: 'space-between', // Distribute content evenly
                    // iOS Shadow
                    shadowColor: item.backgroundColor,
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 8,
                    // Android Shadow
                    elevation: 8,
                }}>
                    {/* Image Container */}
                    <View style={{
                        height: 100, // Fixed height for image container
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 80,
                                height: 90,
                                resizeMode: 'contain'
                            }}
                        />
                    </View>

                    {/* Text Container */}
                    <View style={{
                        height: 80, // Fixed height for text container
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <Text style={{
                            color: item.backgroundColor,
                            fontSize: 16,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginBottom: 8,
                            lineHeight: 20
                        }}>
                            {item.title}
                        </Text>

                        <Text style={{
                            color: '#666',
                            fontSize: 12,
                            textAlign: 'center',
                            lineHeight: 16,
                            paddingHorizontal: 4
                        }}>
                            {item.description}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Link>
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
                <TouchableOpacity onPress={() => router.push('/welcometonk')}>
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
                        Welcome to the{"\n"}Knight's Code Quest!
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: '#666',
                        textAlign: 'center',
                        lineHeight: 22
                    }}>
                        Embark on an epic journey of discovery with{"\n"}Captain Cortex and uncover your unique learning{"\n"}superpowers!
                    </Text>
                </View>

                {/* Quest Options Grid */}
                <View style={{
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <FlatList
                        data={questOptions}
                        numColumns={2}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{
                            justifyContent: 'space-between'
                        }}
                        renderItem={renderQuestCard}
                        scrollEnabled={false}
                    />
                </View>

                {/* Begin Quest Button */}
                <View style={{
                    paddingHorizontal: 20,
                    marginTop: 20
                }}>
                    <Link href="/personaselect" asChild>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#00D4AA', '#00B894']}
                                style={{
                                    borderRadius: 25,
                                    paddingVertical: 16,
                                    paddingHorizontal: 30,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    // iOS Shadow
                                    shadowColor: "#00D4AA",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4,
                                    },
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    // Android Shadow
                                    elevation: 8,
                                }}
                            >
                                <Ionicons name="rocket" size={24} color="white" style={{ marginRight: 10 }} />
                                <Link asChild href={"/personaselect"}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 'bold'
                                    }}>
                                        Begin Your Epic Quest
                                    </Text>
                                </Link>

                            </LinearGradient>
                        </TouchableOpacity>
                    </Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}