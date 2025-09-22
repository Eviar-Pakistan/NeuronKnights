import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";
import React, { useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from 'expo-blur';

export default function Assessment() {
    const router = useRouter();
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAssessmentModal, setShowAssessmentModal] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { width: screenWidth } = Dimensions.get('window');
    const cardWidth = screenWidth - 40;
    const cardSpacing = 0;

    const learningSkills = [
        {
            id: 1,
            name: 'Math Skills',
            subtitle: 'Number patterns, basic calculations, and logical reasoning',
            description: 'Master mathematical concepts through fun interactive challenges and brain-training exercises.',
            image: require('../assets/images/assessmentMath.png'),
            backgroundColor: '#ffffff',
            accentColor: '#8b5cf6',
            type: 'math'
        },
        {
            id: 2,
            name: 'Science Skills',
            subtitle: 'Experiments, discoveries, and scientific reasoning',
            description: 'Explore the wonders of science through hands-on experiments and discovery missions.',
            image: require('../assets/images/assessmentMath.png'),
            backgroundColor: '#ffffff',
            accentColor: '#06b6d4',
            type: 'science'
        },
        {
            id: 3,
            name: 'Language Skills',
            subtitle: 'Reading, writing, and communication mastery',
            description: 'Develop strong language abilities through storytelling and interactive word games.',
            image: require('../assets/images/assessmentMath.png'),
            backgroundColor: '#ffffff',
            accentColor: '#10b981',
            type: 'language'
        }
    ];

    // Questions data structure
    const questionsData = {
        math: [
            {
                id: 1,
                question: "What comes next in this pattern? 2, 4, 6, 8, ?",
                choices: ["9", "10", "11", "12"],
                correctAnswer: 1 // index of correct answer (10)
            },
            {
                id: 2,
                question: "What is 15 + 27?",
                choices: ["40", "41", "42", "43"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "Which number is the largest?",
                choices: ["145", "154", "415", "514"],
                correctAnswer: 3
            }
        ],
        science: [
            {
                id: 1,
                question: "What do plants need to make their own food?",
                choices: ["Water only", "Sunlight only", "Water and sunlight", "Soil only"],
                correctAnswer: 2
            },
            {
                id: 2,
                question: "What is the center of our solar system?",
                choices: ["Earth", "Moon", "Sun", "Mars"],
                correctAnswer: 2
            },
            {
                id: 3,
                question: "What do we call animals that eat only plants?",
                choices: ["Carnivores", "Herbivores", "Omnivores", "Predators"],
                correctAnswer: 1
            }
        ],
        language: [
            {
                id: 1,
                question: "What is the opposite of 'happy'?",
                choices: ["Excited", "Sad", "Angry", "Tired"],
                correctAnswer: 1
            },
            {
                id: 2,
                question: "Which word rhymes with 'cat'?",
                choices: ["Dog", "Hat", "Bird", "Fish"],
                correctAnswer: 1
            },
            {
                id: 3,
                question: "What is a group of words that expresses a complete thought?",
                choices: ["Word", "Letter", "Sentence", "Paragraph"],
                correctAnswer: 2
            }
        ]
    };

    const getCurrentQuestions = () => {
        const currentSkill = learningSkills[currentIndex];
        return questionsData[currentSkill.type] || [];
    };

    const startAssessment = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setShowAssessmentModal(true);
    };

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const handleNextQuestion = () => {
        const questions = getCurrentQuestions();
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null);
        } else {
            // Assessment completed
            setShowAssessmentModal(false);
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
        }
    };

    const closeModal = () => {
        setShowAssessmentModal(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
    };

    const scrollToCard = (index) => {
        const scrollX = index * screenWidth;
        scrollViewRef.current?.scrollTo({ x: scrollX, animated: true });
        setCurrentIndex(index);
    };

    const handleScrollLeft = () => {
        if (currentIndex > 0) {
            scrollToCard(currentIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (currentIndex < learningSkills.length - 1) {
            scrollToCard(currentIndex + 1);
        }
    };

    const renderSkillCard = (skill, index) => (
        <View
            key={skill.id}
            style={{
                width: screenWidth,
                paddingHorizontal: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View style={{
                width: cardWidth,
                backgroundColor: skill.backgroundColor,
                borderRadius: 24,
                padding: 24,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 24,
                elevation: 12,
                alignItems: 'center',
                minHeight: 500,
            }}>
                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: skill.accentColor,
                    textAlign: 'center',
                    marginBottom: 8,
                }}>
                    {skill.name}
                </Text>

                <Text style={{
                    fontSize: 14,
                    color: '#64748b',
                    textAlign: 'center',
                    lineHeight: 20,
                    marginBottom: 12,
                    paddingHorizontal: 16,
                }}>
                    {skill.subtitle}
                </Text>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: 340,
                    padding: 20,
                    borderRadius: 22,
                    shadowColor: '#10b981',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 6
                }}>
                    <Image
                        source={skill.image}
                        style={{
                            width: '100%',
                            height: 340,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
            </View>
        </View>
    );

    const renderAssessmentModal = () => {
        const questions = getCurrentQuestions();
        const currentQuestion = questions[currentQuestionIndex];
        const currentSkill = learningSkills[currentIndex];

        if (!currentQuestion) return null;

        return (
            <Modal
                visible={showAssessmentModal}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <BlurView intensity={80} tint="dark" style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 20
                    }}>
                        <View style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            padding: 24,
                            width: '100%',
                            maxWidth: 400,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 10 },
                            shadowOpacity: 0.25,
                            shadowRadius: 20,
                            elevation: 15
                        }}>
                            {/* Header */}
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: 20
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: currentSkill.accentColor
                                }}>
                                    {currentSkill.name.toLowerCase()} Assessment
                                </Text>
                                
                                <TouchableOpacity onPress={closeModal}>
                                    <Ionicons name="close" size={24} color="#64748b" />
                                </TouchableOpacity>
                            </View>

                            {/* Progress Bar */}
                            <View style={{
                                height: 6,
                                backgroundColor: '#e2e8f0',
                                borderRadius: 3,
                                overflow: 'hidden',
                                marginBottom: 8
                            }}>
                                <LinearGradient
                                    colors={[currentSkill.accentColor, `${currentSkill.accentColor}dd`]}
                                    style={{
                                        height: '100%',
                                        width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                                        borderRadius: 3
                                    }}
                                />
                            </View>

                            {/* Question Counter */}
                            <Text style={{
                                fontSize: 14,
                                color: '#64748b',
                                textAlign: 'right',
                                marginBottom: 20
                            }}>
                                Question {currentQuestionIndex + 1} of {questions.length}
                            </Text>

                            {/* Question */}
                            <Text style={{
                                fontSize: 16,
                                fontWeight: '600',
                                color: '#1f2937',
                                marginBottom: 24,
                                lineHeight: 24
                            }}>
                                {currentQuestion.question}
                            </Text>

                            {/* Answer Choices */}
                            <View style={{ marginBottom: 24 }}>
                                {currentQuestion.choices.map((choice, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleAnswerSelect(index)}
                                        style={{
                                            backgroundColor: selectedAnswer === index ? `${currentSkill.accentColor}20` : '#f8fafc',
                                            borderWidth: 2,
                                            borderColor: selectedAnswer === index ? currentSkill.accentColor : '#e2e8f0',
                                            borderRadius: 12,
                                            padding: 16,
                                            marginBottom: 12
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: 16,
                                            color: selectedAnswer === index ? currentSkill.accentColor : '#64748b',
                                            fontWeight: selectedAnswer === index ? '600' : '400'
                                        }}>
                                            {choice}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Next Button */}
                            <TouchableOpacity
                                onPress={handleNextQuestion}
                                disabled={selectedAnswer === null}
                                style={{
                                    opacity: selectedAnswer === null ? 0.5 : 1
                                }}
                            >
                                <LinearGradient
                                    colors={[currentSkill.accentColor, `${currentSkill.accentColor}dd`]}
                                    style={{
                                        borderRadius: 12,
                                        paddingVertical: 14,
                                        alignItems: 'center'
                                    }}
                                >
                                    <Text style={{
                                        color: 'white',
                                        fontSize: 16,
                                        fontWeight: 'bold'
                                    }}>
                                        {currentQuestionIndex === questions.length - 1 ? 'Finish Assessment' : 'Next Question'}
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </Modal>
        );
    };

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

            {/* Main Content Container */}
            <ScrollView style={{ flex: 1, backgroundColor: 'white', marginBottom: 50 }}>
                {/* Navigation Arrows */}
                <View style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                    zIndex: 10,
                    transform: [{ translateY: -24 }]
                }}>
                    <TouchableOpacity
                        onPress={handleScrollLeft}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            borderRadius: 20,
                            padding: 12,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            opacity: currentIndex === 0 ? 0.5 : 1
                        }}
                        disabled={currentIndex === 0}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={24}
                            color={currentIndex === 0 ? '#cbd5e1' : '#ff6b6b'}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={handleScrollRight}
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            borderRadius: 20,
                            padding: 12,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 4,
                            elevation: 3,
                            opacity: currentIndex === learningSkills.length - 1 ? 0.5 : 1
                        }}
                        disabled={currentIndex === learningSkills.length - 1}
                    >
                        <Ionicons
                            name="chevron-forward"
                            size={24}
                            color={currentIndex === learningSkills.length - 1 ? '#cbd5e1' : '#ff6b6b'}
                        />
                    </TouchableOpacity>
                </View>

                {/* Cards ScrollView */}
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={{ flex: 1, paddingBottom: 20, paddingTop: 10 }}
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onMomentumScrollEnd={(event) => {
                        const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
                        setCurrentIndex(Math.max(0, Math.min(newIndex, learningSkills.length - 1)));
                    }}
                >
                    {learningSkills.map((skill, index) => renderSkillCard(skill, index))}
                </ScrollView>

                {/* Dots Indicator */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 20
                }}>
                    {learningSkills.map((_, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => scrollToCard(index)}
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: currentIndex === index ? '#6366f1' : '#cbd5e1',
                                marginHorizontal: 4
                            }}
                        />
                    ))}
                </View>

                {/* Bottom Action Button */}
                <View style={{
                    paddingHorizontal: 40,
                    paddingBottom: 100
                }}>
                    <TouchableOpacity onPress={startAssessment}>
                        <LinearGradient
                            colors={['#10b981', '#059669']}
                            style={{
                                borderRadius: 25,
                                paddingVertical: 16,
                                alignItems: 'center',
                                shadowColor: '#10b981',
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 8,
                                elevation: 6
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: 'bold'
                            }}>
                                Start Assessment
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

                {/* Progress Section */}
                <View style={{
                    width: "90%",
                    height: 200,
                    borderRadius: 22,
                    alignSelf: "center",
                    shadowColor: 'red',
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 6,
                    padding: 10,
                    marginBottom: 40
                }}>
                    <Text style={{
                        fontWeight: "600",
                        fontSize: 22,
                        marginVertical: 15,
                    }}>Math</Text>
                    <View style={{
                        height: 8,
                        backgroundColor: '#e2e8f0',
                        borderRadius: 3,
                        overflow: 'hidden'
                    }}>
                        <LinearGradient
                            colors={['#06b6d4', '#3b82f6', '#8b5cf6']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                height: '100%',
                                width: '65%',
                                borderRadius: 3
                            }}
                        />
                    </View>

                    <Text style={{
                        fontWeight: "600",
                        fontSize: 22,
                        marginVertical: 15,
                    }}>Reading</Text>
                    <View style={{
                        height: 8,
                        backgroundColor: '#e2e8f0',
                        borderRadius: 3,
                        overflow: 'hidden'
                    }}>
                        <LinearGradient
                            colors={['#06b6d4', '#3b82f6', '#8b5cf6']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{
                                height: '100%',
                                width: '65%',
                                borderRadius: 3
                            }}
                        />
                    </View>
                </View>
            </ScrollView>

            {/* Assessment Modal */}
            {renderAssessmentModal()}

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