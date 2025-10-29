import { Text, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Components for the Home Screen
import TaxBill from "@/components/bill";
import TINRegiteration from "@/components/tin";
import Contact from "@/components/contact";

import React , { useCallback, useEffect } from 'react'
import { NotebookPen , Receipt , MessageCircle } from 'lucide-react-native'
export default function Index() {

  const MaterialTab = createMaterialTopTabNavigator();
  
  return (
    <>
        <MaterialTab.Navigator
          screenOptions={{
            tabBarShowIcon: true,
            tabBarIndicatorStyle:{
              // width:50,
              height:5,
              borderRadius:100,
              backgroundColor:'green',
              marginLeft: 'auto',
              marginRight: 'auto',

            },
            tabBarItemStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              padding:10
            },
            tabBarStyle:{
              backgroundColor:'white',
              shadowColor:'white',
              justifyContent:'center',
              height:70
            },
            
          }}
        >
          <MaterialTab.Screen 
            name="TIN"
            component={TINRegiteration}
            options={{
              tabBarLabel:()=>{
                return(
                <View className="justify-center items-center flex-row gap-[8px]">
                    <NotebookPen 
                      color={"black"}
                      size={21}
                    />
                    <Text style={{fontSize:17, fontWeight:'800'}}>TIN</Text>
                </View>
                )
              },
            }}
          />

          <MaterialTab.Screen 
            name="Bill"
            component={TaxBill}
            options={{
              tabBarLabel:()=>{
                return(
                  <View className="justify-center items-center flex-row gap-[8px]">
                    <Receipt 
                      color={"black"}
                      size={21}
                    />
                    <Text style={{fontSize:17, fontWeight:'800'}}>Bill</Text>
                  </View>
                  
                )
              }
            }}
          />

          <MaterialTab.Screen 
            name="Contact"
            component={Contact}
            options={{
              tabBarLabel:()=>{
                return(
                  <View className="justify-center items-center flex-row gap-[8px]">
                    <MessageCircle 
                      color={"black"}
                      size={21}
                    />
                    <Text style={{fontSize:17, fontWeight:'800'}}>Contact</Text>
                  </View>
                  
                )
              }
            }}
          />
        </MaterialTab.Navigator>
    </>
   
  );
}
