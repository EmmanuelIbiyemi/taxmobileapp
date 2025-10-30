import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Cross } from "lucide-react-native";

import * as ImagePicker from 'expo-image-picker';

export default function TINRegiteration() {
      const [firstName , setName] = useState("");
      const [middleName , setMiddle] = useState("");
      const [lastname , setLast] = useState("")
      const [email , setMail] = useState("");
      const [bvn , setBvn] = useState("");

      const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

  return (
    <ScrollView className="flex-1 bg-white p-5" contentContainerStyle={{justifyContent:'center'}}>
      <Text className="text-2xl font-bold mb-5 text-[#1A1A1A]">
        Create Tax Number ( TIN )
      </Text>

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="First Name"
        value={firstName}
        onChangeText={setName}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Middle Name"
        value={middleName}
        onChangeText={setMiddle}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Last Name"
        value={lastname}
        onChangeText={setLast}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Email Address"
        value={email}
        onChangeText={setMail}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Bank Verification Number"
        value={bvn}
        onChangeText={setBvn}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TouchableOpacity
        className="bg-gray-300 py-4 rounded-lg mt-3 h-32 justify-center items-center flex-row gap-3"
        activeOpacity={1}
        onPress={()=>pickImage()}
      >
        <Cross fill={"black"} size={16}/>
        <Text className="text-black text-center font-semibold text-base">
          Insert Image
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-emerald-600 py-4 rounded-lg mt-3 active:opacity-80"
        onPress={() => Alert.alert("Infomation submitted")}
        activeOpacity={1}
      >
        <Text className="text-white text-center font-semibold text-base">
          Submit
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}
