import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, Modal , Pressable } from "react-native";
import { LogOut, Settings, Mail, User, ShieldCheck } from "lucide-react-native";
import { router } from "expo-router";


import { useAuth } from "@/configings/profileContext/profileCon";

import TermsModal from "./terms";

export default function UserProfile() {

    const { userinfo } = useAuth() as any
    const [showTerms , setTerms] = useState(false)

  const user = {
    name: userinfo?.name,
    email: userinfo?.email,
    avatar: "https://picsum.photos/200", // You can replace with your own image or uploaded one
  };


  return (
    <ScrollView className="flex-1 bg-[#f5f6f5]" contentContainerStyle={{ alignItems: "center" }} showsVerticalScrollIndicator={false} scrollEnabled={false}>
      {/* Header Section */}
      <View className="w-full h-[200px] rounded-b-[100px] items-center justify-center" style={{backgroundColor:'green'}}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={{ uri: user.avatar }}
            className="w-[100px] h-[100px] rounded-full border-[3px] border-white"
          />
          <View className="absolute bottom-2 right-2 bg-emerald-500 w-[20px] h-[20px] rounded-full border-2 border-white" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <Text className="text-[20px] font-bold text-[#1a1a1a] mt-3">{user.name}</Text>
      <Text className="text-gray-500 text-[14px]">{user.email}</Text>

      {/* Menu Section */}
      <View className="w-[90%] mt-6">
        
        <TouchableOpacity 
            activeOpacity={1} 
            onPress={()=>setTerms(true)}>
          <View 
            className="bg-white rounded-2xl flex-row items-center p-[20px] my-2 border border-gray-200 gap-3"
            style={{
              shadowColor: "green",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <ShieldCheck 
              color={'#059669'}
            />
            <Text>
              Terms & Privacy Policy
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout Button */}
      <TouchableOpacity activeOpacity={0.9} className="flex-row items-center mt-5 mb-10" onPress={()=>router.replace("/(auth)/login")}>
        <LogOut color="#dc2626" size={20} />
        <Text className="text-red-600 ml-2 font-semibold">Logout</Text>
      </TouchableOpacity>

      <TermsModal visiblity={showTerms} setvisiblity={setTerms}/>
    </ScrollView>
  );
}
