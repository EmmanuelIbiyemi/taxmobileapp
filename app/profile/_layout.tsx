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
                    backgroundColor:"green"
                },
                headerTitleAlign:'center'
            }
        }
    >
        <Stack.Screen 
            name='settings'
            options={{
                title:"Settings",
                headerTitle: ()=>{
                    return(
                        <View>
                            <Text>
                                Settings
                            </Text>
                        </View>
                )}
            }}
        />
        <Stack.Screen 
            name='terms'
            options={{
                title:"Terms & Privacy Policy"
            }}
        />
        </Stack>
  )
}
