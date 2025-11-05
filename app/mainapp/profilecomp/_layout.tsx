import React from 'react'
import { Stack } from 'expo-router'
import {View , Text} from 'react-native'
import { Settings } from 'lucide-react-native'

export default function ProfileLayout() {
  return (
    <Stack
        screenOptions={
            {
                headerStyle:{
                    backgroundColor:"green",
                },
                headerTitleAlign:'center',
                headerTintColor:"white",
                headerShadowVisible:false,
                headerTitleStyle:{
                    color:"white"
                }
            }
        }
    >
        <Stack.Screen 
            name='profile'
            options={{
                title:"Profile"
            }}
        />
        <Stack.Screen 
            name='setting'
            options={{
                title:"Settings",
                headerTintColor:"white"
            }}
        />
        <Stack.Screen 
            name='terms'
            options={{
                title:"Terms & Privacy Policy",
                headerTintColor:"white"
            }}
        />
        </Stack>
  )
}
