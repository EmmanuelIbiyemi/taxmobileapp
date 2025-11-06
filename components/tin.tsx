import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet , ImageBackground } from "react-native";
import { Cross } from "lucide-react-native";

import * as ImagePicker from 'expo-image-picker';
import { Toast } from "toastify-react-native";
import ToastManager from "toastify-react-native/components/ToastManager";
import { toastConfig  } from "@/configings/toasts";

import { send } from '@emailjs/react-native';



export default function TINRegiteration() {
      const [firstName , setName] = useState("");
      const [middleName , setMiddle] = useState("");
      const [lastname , setLast] = useState("")
      const [email , setMail] = useState("");
      const [address , setAddress] = useState("");
      const [employment , setEmployment] = useState("");
      const [bvn , setBvn] = useState("");

      const [image, setImage] = useState<string | null>(null);

      // For the toast only
      const [isRTL, setIsRTL] = useState(false)
        const [showProgressBar, setShowProgressBar] = useState(true)
        const [showCloseIcon, setShowCloseIcon] = useState(true)

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        // allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };

    const handleSendEmail = async () => {
      try {
        // Alert.alert('Success', 'Email sent!');
        Toast.success("Info Sent Successfully","top")
      } catch (error) {
        Toast.error("Error Sending Info", "top")
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
        placeholder="Residential Address"
        value={address}
        onChangeText={setAddress}
        cursorColor={"black"}
        inputMode="text"
        placeholderTextColor={'black'}
      />

      <TextInput
        className="border border-gray-300 rounded-lg px-4 py-3 mb-3"
        placeholder="Employment Status"
        value={employment}
        onChangeText={setEmployment}
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

   

      <ImageBackground
        source={image? { uri: `${image}` } : undefined}
        style={{ borderRadius: 12, overflow: 'hidden' }}
        resizeMode="cover"
      >

        <TouchableOpacity
          // className="bg-gray-300 py-4 rounded-lg mt-3 h-32 justify-center items-center flex-row gap-3"
          className={`flex-1 py-4 rounded-lg mt-3 h-24 justify-center items-center flex-row gap-3 ${
              image ? '' : 'bg-gray-300'
            }`}

          activeOpacity={1}
          onPress={()=>pickImage()}
        >
          <Cross fill={"black"} size={16}/>
          <Text className="text-black text-center font-semibold text-base">
            Insert Indentification
          </Text>
        </TouchableOpacity>

      </ImageBackground>
    

      <ImageBackground
        source={image? { uri: `${image}` } : undefined}
        style={{ borderRadius: 12, overflow: 'hidden' }}
        resizeMode="cover"
      >

        <TouchableOpacity
          // className="bg-gray-300 py-4 rounded-lg mt-3 h-32 justify-center items-center flex-row gap-3"
          className={`flex-1 py-4 rounded-lg mt-3 h-24 justify-center items-center flex-row gap-3 ${
              image ? '' : 'bg-gray-300'
            }`}

          activeOpacity={1}
          onPress={()=>pickImage()}
        >
          <Cross fill={"black"} size={16}/>
          <Text className="text-black text-center font-semibold text-base">
            Insert Passport
          </Text>
        </TouchableOpacity>

      </ImageBackground>

      <TouchableOpacity
        className="bg-emerald-600 py-4 rounded-lg mt-3 active:opacity-80 mb-10"
        onPress={() => handleSendEmail()}
        activeOpacity={1}
      >
        <Text className="text-white text-center font-semibold text-base">
          Submit
        </Text>
      </TouchableOpacity>

       <ToastManager 
              config={toastConfig}
              position={'bottom'}
              isRTL={isRTL}
              showProgressBar={showProgressBar}
              showCloseIcon={showCloseIcon}
              animationStyle='fade'
              useModal={false}
            />

    </ScrollView>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });