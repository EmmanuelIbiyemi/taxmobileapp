import { View, Text , StatusBar } from 'react-native'
import LottieView from 'lottie-react-native'

import * as NavigationBar from 'expo-navigation-bar'
import * as SystemUI from 'expo-system-ui'

import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

export default function HomeScreen(){

    useEffect(()=>{
      const navgationBar = async ()=>{
            await NavigationBar.setButtonStyleAsync('light')
            await NavigationBar.setBackgroundColorAsync('#047857')

            await SystemUI.setBackgroundColorAsync('#047857');
          }
          navgationBar()
    }, [])

    const replacetoindex =()=>{
      router.replace("/(auth)/signup")
    }

  try {
    return (
      <>
          <StatusBar 
            barStyle={'light-content'}
            backgroundColor={'#047857'}
          />
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#047857' }}>
          <LottieView
            source={require('../assets/splashjson/TaxPayment.json')}
            autoPlay
            loop={false}
            onAnimationFinish={() => replacetoindex()}
            speed={0.5}
            style={{ width: '100%', height: '100%' }}
          />
        </SafeAreaView>
      </>
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

