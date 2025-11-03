import { View, Text , StatusBar } from 'react-native'
import LottieView from 'lottie-react-native'

import * as NavigationBar from 'expo-navigation-bar'
import * as SystemUI from 'expo-system-ui'

import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

export default function Index(){

    useEffect(()=>{
      const navgationBar = async ()=>{
            // await NavigationBar.setButtonStyleAsync('dark')
            // await NavigationBar.setBehaviorAsync('inset-swipe')
            // await NavigationBar.setBackgroundColorAsync('green')
            // await NavigationBar.setVisibilityAsync('visible')

            await SystemUI.setBackgroundColorAsync('#047857');
          }
          navgationBar()
    }, [])

    const replacetoindex =()=>{
      router.replace("/(auth)/signup")
    }

  try {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#047857' }}>
        <Text>Loading animation...</Text>
        <LottieView
          source={require('../assets/splashjson/TaxPayment.json')}
          autoPlay
          loop={false}
          onAnimationFinish={() => replacetoindex()}
          speed={0.5}
          style={{ width: '100%', height: '100%' }}
        />
      </SafeAreaView>
    );
  } catch (error) {
    console.error("❌ LottieView error:", error);
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#047857' }}>
        <Text>❌ Error loading animation</Text>
      </SafeAreaView>
    );
  }
}

