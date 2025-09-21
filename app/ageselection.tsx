import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AgeSelection() {
    const router = useRouter()

    const [name, setname] = useState('');

    const [selected, setSelected] = useState<number | null>(null);

    const options = [
        { id: 1, label: "I am", value: "3-4", color: "#FF6C6A" },
        { id: 2, label: "I am", value: "5-6", color: "#AD98FB" },
        { id: 3, label: "I am", value: "7-8", color: "#F2BC5D" },
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



            <Image style={{ height: 250, width: 220 }} source={require("../assets/images/neuro-knights-logo 1.png")} />

            <Text className="text-3xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Name</Text>

            <TextInput className="bg-[#4A89DC] p-4 text-2xl text-white font-bold  w-full rounded-xl placeholder:text-white" onChangeText={(text) => setname(text)} value={name} placeholder="Enter name" />


            <Text className="text-3xl mt-4 font-bold text-black w-full text-start mb-6 pb-1">Your Age</Text>

            <View style={{ flexDirection: "row", width: "100%",columnGap:10 }}>
                {options.map((opt) => {
                    const isSelected = selected === opt.id;
                    return (
                        <TouchableOpacity
                            key={opt.id}
                            onPress={() => setSelected(opt.id)}
                            style={{
                                flex: 1,
                                height: 90,
                                borderRadius: 16,
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "space-between",
                                borderWidth: 1,
                                borderColor: isSelected ? opt.color : opt.color,
                                backgroundColor: isSelected ? opt.color : "#ffffff",
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: isSelected ? "#ffffff" : opt.color,
                                }}
                            >
                                {opt.label}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    marginBottom: 8,
                                    color: isSelected ? "#ffffff" : opt.color,
                                }}
                            >
                                {opt.value}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>




            <Link href="/welcometonk" asChild>
                <TouchableOpacity className={`${selected!=null?"bg-[#37ACB0]":"bg-[#b2e2e3]"}   p-2 mt-10 rounded-xl`} >
                    <Text className="text-lg text-center text-white w-full font-bold px-10">Let's Start</Text>
                </TouchableOpacity>
            </Link>



        </View>
    );
}