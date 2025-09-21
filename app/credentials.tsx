import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Credentials() {
    const router = useRouter();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Background Image with Blur */}
            <ImageBackground
                source={require("../assets/images/logobg.png")}
                resizeMode="cover"
                style={{ 
                    flex: 1, 
                    width: screenWidth, 
                    height: screenHeight 
                }}
            >
                <BlurView 
                    intensity={80} 
                    tint="dark" 
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {/* White Card */}
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 16,
                        width: '85%',
                        alignItems: 'center',
                        padding: 24,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 8,
                        elevation: 8,
                        position: 'relative'
                    }}>

                        {/* Close button */}
                        <TouchableOpacity 
                            onPress={() => router.push("/welcometonk")}
                            style={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                zIndex: 10
                            }}
                        >
                            <Ionicons name="close-circle" size={28} color="red" />
                        </TouchableOpacity>

                        {/* Back button */}
                        <TouchableOpacity 
                            onPress={() => router.back()}
                            style={{
                                position: 'absolute',
                                top: 16,
                                left: 16,
                                zIndex: 10
                            }}
                        >
                            <Ionicons name="arrow-back-outline" size={28} color="#4a89dc" />
                        </TouchableOpacity>

                        {/* Character / Knight Image */}
                        <Image
                            source={require("../assets/images/bob.png")}
                            style={{
                                width: 128,
                                height: 128,
                                marginBottom: 16,
                                marginTop: 20 // Add space for the buttons
                            }}
                            resizeMode="contain"
                        />

                        {/* Title */}
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#4a89dc',
                            marginBottom: 8,
                            textAlign: 'center'
                        }}>
                            Enter Your Credentials
                        </Text>

                        {/* Subtitle */}
                        <Text style={{
                            color: '#6b7280',
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                            Amygdala will help you login safely!
                        </Text>

                        {/* Email Section */}
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <Text style={{
                                color: '#6b7280',
                                fontWeight: '500',
                                marginBottom: 8
                            }}>
                                Email Address
                            </Text>
                        </View>

                        <TextInput 
                            placeholder="Enter Email"
                            style={{
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: '#d1d5db',
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                width: '100%',
                                marginBottom: 16,
                                fontSize: 16
                            }}
                        />

                        {/* Password Section */}
                        <View style={{ width: '100%', alignItems: 'flex-start' }}>
                            <Text style={{
                                color: '#6b7280',
                                fontWeight: '500',
                                marginBottom: 8
                            }}>
                                Password
                            </Text>
                        </View>

                        <TextInput 
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            style={{
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: '#d1d5db',
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                width: '100%',
                                marginBottom: 24,
                                fontSize: 16
                            }}
                        />

                        {/* Login Button */}
                        <TouchableOpacity 
                            onPress={() => router.push("/welcometonk")}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#4a89dc',
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                width: '100%'
                            }}
                        >
                            <Ionicons name="log-in-outline" size={20} color="white" />
                            <Text style={{
                                marginLeft: 12,
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 16
                            }}>
                                Login
                            </Text>
                        </TouchableOpacity>

                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}