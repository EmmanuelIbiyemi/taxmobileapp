import { View, Text } from 'react-native'
import React from 'react'
import {router} from 'expo-router'
export default function NotFound() {

  React.useEffect(()=>{
     const timer = setTimeout(() => {
            router.back();
        }, 1000)

        return () => clearTimeout(timer);
  })
  return (
    <View className='flex-1 bg-white justify-center items-center'>
      <Text>
        Sorry Wrong Route 
        Rouee Cannot be found
      </Text>
    </View>
  )
}