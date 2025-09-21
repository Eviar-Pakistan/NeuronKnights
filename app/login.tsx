import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
    const router = useRouter();
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Background Image with Blur */}
            <ImageBackground
                source={require("../assets/images/logobg.png")}
                style={{
                    flex: 1,
                    width: screenWidth,
                    height: screenHeight,
                }}
                resizeMode="cover" // Changed from "contain" to "cover"
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
                    <Image
                        style={{ height: 120, marginBottom: 20 }}
                        resizeMode="contain"
                        source={require("../assets/images/neuro-knights-logo 1.png")}
                    />

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

                        {/* Character / Knight Image */}
                        <Image
                            source={require("../assets/images/sircortexavt.png")}
                            style={{
                                width: 176,
                                height: 176,
                                marginBottom: 16
                            }}
                            resizeMode="contain"
                        />

                        {/* Title */}
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#2563eb',
                            marginBottom: 8,
                            textAlign: 'center'
                        }}>
                            Welcome Back, Knight!
                        </Text>

                        {/* Subtitle */}
                        <Text style={{
                            color: '#6b7280',
                            textAlign: 'center',
                            marginBottom: 24,
                            lineHeight: 20
                        }}>
                            Choose your preferred way to login and continue your adventure!
                        </Text>

                        {/* Google Login */}
                        <TouchableOpacity
                            onPress={() => router.push("/welcometonk")}
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderWidth: 1,
                                borderColor: '#d1d5db',
                                justifyContent: 'center',
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                width: '100%',
                                marginBottom: 16
                            }}
                        >
                            <Image
                                source={require("../assets/icons/google.png")}
                                style={{ width: 21, height: 21 }}
                            />
                            <Text style={{
                                marginLeft: 12,
                                color: '#374151',
                                fontSize: 16,
                                fontWeight:"400"
                            }}>
                                Continue with Google
                            </Text>
                        </TouchableOpacity>


                        {/* OR Divider */}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: '100%',
                            marginVertical: 16
                        }}>
                            <View style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: '#d1d5db'
                            }} />
                            <Text style={{
                                paddingHorizontal: 8,
                                color: '#9ca3af'
                            }}>
                                OR
                            </Text>
                            <View style={{
                                flex: 1,
                                height: 1,
                                backgroundColor: '#d1d5db'
                            }} />
                        </View>

                        {/* Email Login */}
                        <TouchableOpacity
                            onPress={() => router.push("/credentials")}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#4a89dc',
                                borderRadius: 8,
                                paddingHorizontal: 16,
                                paddingVertical: 12,
                                width: '100%',
                                marginTop: 8
                            }}
                        >
                            <Ionicons name="mail" size={20} color="white" />
                            <Text style={{
                                marginLeft: 12,
                                color: 'white',
                                fontWeight: '500',
                                fontSize: 16
                            }}>
                                Login with Email
                            </Text>
                        </TouchableOpacity>

                    </View>
                </BlurView>
            </ImageBackground>
        </SafeAreaView>
    );
}