import { Link } from "expo-router";
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AgeSelection() {
    const [name, setname] = useState('');
    return (
        <View className="flex-1 items-center justify-center bg-white 
          px-4">
            

            <Text className="text-2xl mt-4 font-bold text-black w-full text-center mb-6 pb-1">Neuro Knights</Text>

            <Text className="text-xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Name</Text>

            <TextInput className="bg-blue-500 p-2 w-full rounded-lg" value={name} placeholder="Enter name"/>

             
            <Text className="text-xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Age</Text>

             <View className="flex flex-row justify-between w-full"> 

                <View className="border w-[30%] border-pink-600  flex flex-col items-center justify-between">
                    <Text>I am</Text>

                    <Text>3-4</Text>

                </View>


                 <View className="border w-[30%] border-pink-600 flex flex-col items-center justify-between">
                    <Text>I am</Text>

                    <Text>3-4</Text>

                </View>


                 <View className="border w-[30%] border-pink-600 flex flex-col items-center justify-between">
                    <Text>I am</Text>

                    <Text>3-4</Text>

                </View>

             </View>



          
            <Link href="/choice" asChild>
                <TouchableOpacity className="bg-blue-600 p-2 mt-2 rounded-lg">
                    <Text className="text-lg text-center text-white w-full">Continue</Text>
                </TouchableOpacity>
            </Link>

           

        </View>
    );
}