import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function LearningPath() {
    const router = useRouter();
    const { width: screenWidth } = Dimensions.get('window');

    const achievements = [
        { icon: 'trophy', color: '#fbbf24', label: 'Top Performer' },
        { icon: 'star', color: '#f59e0b', label: 'Best Learner' },
        { icon: 'medal', color: '#ef4444', label: 'Champion' }
    ];

    const learningModules = [
        {
            id: 1,
            title: 'Current Challenge',
            subtitle: 'Pattern Recognition Quest',
            description: 'Race through neural pathways and learn about brain connections in this exciting adventure!',
            image: require('../assets/images/synapses-spirit.png'),
            buttonText: 'Level 2',
            buttonColor: '#fbbf24',
            backgroundColor: '#1e1b4b',
            textColor: '#ffffff',
            type: 'current',
            progress: 75
        },
        {
            id: 2,
            title: 'Pattern Recognition Quest',
            description: 'Unlock the secrets of pattern recognition and boost your cognitive abilities.',
            image: require('../assets/images/neuroshieldavt.png'),
            buttonText: 'Continue Challenge',
            buttonColor: '#8b5cf6',
            backgroundColor: '#ffffff',
            textColor: '#374151',
            type: 'quest',
            locked: false
        },
        {
            id: 3,
            title: 'STEM Lessons',
            subtitle: 'Science, Technology, Engineering & Math',
            description: 'Explore fundamental STEM concepts through interactive lessons and experiments.',
            image: require('../assets/images/bob.png'),
            buttonText: 'Explore',
            buttonColor: '#06b6d4',
            backgroundColor: '#ffffff',
            textColor: '#374151',
            type: 'stem',
            locked: false
        },
        {
            id: 4,
            title: 'Interactive Science Lab',
            description: 'Conduct virtual experiments and discover the wonders of science.',
            image: require('../assets/images/bob.png'),
            buttonText: 'Start Lab',
            buttonColor: '#10b981',
            backgroundColor: '#ffffff',
            textColor: '#374151',
            type: 'lab',
            locked: false
        },
        {
            id: 5,
            title: 'Health Science',
            description: 'Learn about the human body, health, and wellness through engaging activities.',
            image: require('../assets/images/bob.png'),
            buttonText: 'Begin',
            buttonColor: '#ef4444',
            backgroundColor: '#ffffff',
            textColor: '#374151',
            type: 'health',
            locked: false
        },
        {
            id: 6,
            title: 'Body Systems Explorer',
            description: 'Discover how different body systems work together to keep you healthy.',
            image: require('../assets/images/bob.png'),
            buttonText: 'Explore Now',
            buttonColor: '#8b5cf6',
            backgroundColor: '#ffffff',
            textColor: '#374151',
            type: 'body',
            locked: false
        }
    ];

    const renderAchievement = (achievement, index) => (
        <View
            key={index}
            style={{
                flexDirection: 'row', // Changed to row for side by side layout
                alignItems: 'center',
                backgroundColor: `${achievement.color}15`, // Light background
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 20,
                marginRight: 12, // Space between items in horizontal scroll
                minWidth: 120 // Minimum width for consistent sizing
            }}
        >
            <View style={{
                width: 32, // Smaller icon container
                height: 32,
                backgroundColor: `${achievement.color}30`,
                borderRadius: 16,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 8 // Space between icon and text
            }}>
                <Ionicons name={achievement.icon} size={18} color={achievement.color} />
            </View>
            <Text style={{
                fontSize: 16,
                color: '#FF6C6A',
                fontWeight: '600',
                flex: 1 // Take remaining space
            }}>
                {achievement.label}
            </Text>
        </View>
    );

    const renderLearningModule = (module) => {
        if (module.type === 'current') {
            return (
                <View
                    key={module.id}
                    style={{
                        backgroundColor: "white",
                        borderRadius: 16,
                        padding: 20,
                        marginBottom: 16,
                        marginHorizontal: 16,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 8,
                        elevation: 4
                    }}
                >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 16
                    }}>
                        <Text style={{
                            color: "#FF6C6A",
                            fontSize: 22,
                            fontWeight: 'bold'
                        }}>
                            {module.title}
                        </Text>
                        <TouchableOpacity>
                            <LinearGradient
                                colors={[module.buttonColor, `${module.buttonColor}dd`]}
                                style={{
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    borderRadius: 20
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}>
                                    {module.buttonText}
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <Image
                            source={module.image}
                            style={{
                                width: "100%",
                                height: 180,
                                resizeMode: 'contain'
                            }}
                        />

                        <View style={{ width: '100%', paddingHorizontal: 16, paddingTop: 4 }}>
                            <Text style={{
                                color: "#4A89DC",
                                fontSize: 24,
                                fontWeight: 'bold',
                                marginBottom: 8,
                                textAlign: 'center'
                            }}>
                                {module.subtitle}
                            </Text>
                            <Text style={{
                                color: "#949494",
                                fontSize: 14,
                                lineHeight: 20,
                                opacity: 0.8,
                                textAlign: 'center'
                            }}>
                                {module.description}
                            </Text>
                        </View>

                        <View style={{
                            width: "100%",
                            height: 8,
                            backgroundColor: '#e2e8f0',
                            borderRadius: 3,
                            overflow: 'hidden',
                            marginTop: 15
                        }}>
                            <LinearGradient
                                colors={['#06b6d4', '#3b82f6', '#8b5cf6']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={{
                                    height: '100%',
                                    width: `${module.progress || 65}%`,
                                    borderRadius: 3
                                }}
                            />
                        </View>

                        <TouchableOpacity style={{ marginTop: 15 }}>
                            <LinearGradient
                                colors={["#AD98FB", "#4A89DC"]}
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 10,
                                    borderRadius: 20,
                                }}
                            >
                                <Text style={{
                                    color: 'white',
                                    fontSize: 14,
                                    fontWeight: 'bold'
                                }}>
                                    Continue Challenge
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        // All other types follow the same design as 'current' but without progress bar
        return (
            <View
                key={module.id}
                style={{
                    backgroundColor: "white",
                    borderRadius: 16,
                    padding: 20,
                    marginBottom: 16,
                    marginHorizontal: 16,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    elevation: 4
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 16
                }}>
                    <Text style={{
                        color: "#FF6C6A",
                        fontSize: 22,
                        fontWeight: 'bold'
                    }}>
                        {module.title}
                    </Text>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={[module.buttonColor, `${module.buttonColor}dd`]}
                            style={{
                                paddingHorizontal: 16,
                                paddingVertical: 8,
                                borderRadius: 20
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 14,
                                fontWeight: 'bold'
                            }}>
                                50 Points
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Image
                        source={module.image}
                        style={{
                            width: "100%",
                            height: 180,
                            resizeMode: 'contain'
                        }}
                    />

                    <View style={{ width: '100%', paddingHorizontal: 16, paddingTop: 4 }}>
                        <Text style={{
                            color: "#4A89DC",
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 8,
                            textAlign: 'center'
                        }}>
                            {module.subtitle || module.title}
                        </Text>
                        <Text style={{
                            color: "#949494",
                            fontSize: 14,
                            lineHeight: 20,
                            opacity: 0.8,
                            textAlign: 'center'
                        }}>
                            {module.description}
                        </Text>
                    </View>

                    {/* No progress bar for non-current types */}

                    <TouchableOpacity style={{ marginTop: 15 }}>
                        <LinearGradient
                            colors={["white", "white"]}
                            style={{
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                                borderRadius: 20,
                                borderWidth: 2,
                                borderColor: "#AD98FB",
                                width: 200
                            }}
                        >
                            <Text style={{
                                color: '#4A89DC',
                                fontSize: 14,
                                fontWeight: 'bold',
                                textAlign: "center"
                            }}>
                                {module.buttonText}
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

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
                    Assessment
                </Text>
                <View style={{ width: 24 }} />
            </View>


            {/* Achievements Section */}
            <View style={{
                backgroundColor: 'white',
                marginHorizontal: 16,
                marginBottom: 16,
                borderRadius: 16,
                padding: 16,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 4
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#374151',
                    marginBottom: 16
                }}>
                    Your Achievements
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingVertical: 8
                    }}
                    style={{ flexGrow: 0 }} // Prevent it from taking too much height
                >
                    {achievements.map((achievement, index) => renderAchievement(achievement, index))}
                </ScrollView>
            </View>

            {/* Learning Path Header */}
            <View style={{
                paddingHorizontal: 16,
                marginBottom: 16
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#374151'
                }}>
                    AI-Adaptive Learning Path
                </Text>
            </View>

            {/* Learning Modules */}
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            >
                {learningModules.map((module) => renderLearningModule(module))}
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