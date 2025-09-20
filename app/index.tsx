import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-[#4A89DC] px-4">

            <Image style={{height:321}} source={require("../assets/images/neuro-knights-logo 1.png")} />


           

             <Image style={{height:73,width:73,objectFit:"contain"}} source={require("../assets/icons/select.png")} />
      
            <Text className="text-lg text-center text-white w-ful mt-2">Tap To Start</Text>

        
            
        </View >
    );
}