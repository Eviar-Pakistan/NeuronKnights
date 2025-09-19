import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AgeSelection() {
    const router=useRouter()

    const [name, setname] = useState('');

    const [selected, setSelected] = useState<number | null>(null);

    const options = [
        { id: 1, label: "I am", value: "3-4", color: "pink" },
        { id: 2, label: "I am", value: "5-6", color: "purple" },
        { id: 3, label: "I am", value: "7-8", color: "orange" },
    ];


    return (
        <View className="flex-1 items-center justify-center bg-white 
          px-4">

              <TouchableOpacity
                onPress={() => router.back()}
                className="absolute top-4 left-4 z-10 p-2"
            >
                <Ionicons name="arrow-back" size={28} color="orange" />
            </TouchableOpacity>



            <Text className="text-2xl mt-4 font-bold text-black w-full text-center mb-6 pb-1">Neuro Knights</Text>

            <Text className="text-3xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Name</Text>

            <TextInput className="bg-blue-500 p-4 text-2xl text-white font-bold  w-full rounded-xl placeholder:text-white"   onChangeText={(text) => setname(text)}   value={name} placeholder="Enter name" />


            <Text className="text-3xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Age</Text>

            <View className="flex flex-row gap-x-2 w-full">
                {options.map((opt) => {
                    const isSelected = selected === opt.id;
                    return (
                        <TouchableOpacity
                            key={opt.id}
                            onPress={() => setSelected(opt.id)}
                            className={`
              flex-1 h-[80px] rounded-2xl flex flex-col items-center justify-between 
              border border-${opt.color}-600 
              ${isSelected ? `bg-${opt.color}-600` : "bg-white"}
            `}
                        >
                            <Text
                                className={`text-2xl font-bold ${isSelected ? "text-white" : `text-${opt.color}-600`
                                    }`}
                            >
                                {opt.label}
                            </Text>
                            <Text
                                className={`text-2xl font-bold ${isSelected ? "text-white" : `text-${opt.color}-600`
                                    }`}
                            >
                                {opt.value}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>



            <Link href="/choice" asChild>
                <TouchableOpacity className="bg-[#b2e2e3] p-2 mt-10 rounded-xl ">
                    <Text className="text-lg text-center text-white w-full font-bold">Let's Start</Text>
                </TouchableOpacity>
            </Link>



        </View>
    );
}