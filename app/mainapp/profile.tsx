import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { LogOut, Settings, Mail, User, ShieldCheck } from "lucide-react-native";
import { router } from "expo-router";

export default function UserProfile() {
  const user = {
    name: "ABIMBOLA",
    email: "abims2642@gmail.com",
    avatar: "https://picsum.photos/200", // You can replace with your own image or uploaded one
  };

  return (
    <ScrollView className="flex-1 bg-[#f5f6f5]" contentContainerStyle={{ alignItems: "center" }}>
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
        {[
          { icon: User, title: "My Profile" },
          { icon: Mail, title: "Messages", badge: 2 , paths:''},
          { icon: Settings, title: "Settings" , paths:'/profile/setting'},
          { icon: ShieldCheck, title: "Terms & Privacy Policy" , paths:'/profile/terms'},
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            className="bg-white rounded-2xl flex-row items-center p-[20px] my-2 border border-gray-200"
            style={{
              shadowColor: "green",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 3,
            }}
            onPress={()=>router.navigate(`${item.paths}`)}
          >
            <item.icon color="#16a34a" size={22} />
            <Text className="ml-4 text-[16px] text-[#1a1a1a] flex-1">{item.title}</Text>

            {item.badge && (
              <View className="bg-emerald-600 rounded-full px-2 py-[2px]">
                <Text className="text-white text-[12px]">{item.badge}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout Button */}
      <TouchableOpacity activeOpacity={0.9} className="flex-row items-center mt-5 mb-10" onPress={()=>router.replace("/(auth)/login")}>
        <LogOut color="#dc2626" size={20} />
        <Text className="text-red-600 ml-2 font-semibold">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
