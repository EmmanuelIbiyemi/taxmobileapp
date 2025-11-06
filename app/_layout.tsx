import { Stack } from "expo-router";
import "@/global.css"
import * as NavigationBar from 'expo-navigation-bar'
import { StatusBar } from "react-native";

import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect } from "react";

import { AuthProvider } from "@/configings/profileContext/profileCon"

import { GoogleSignin } from "@react-native-google-signin/google-signin";
export default function RootLayout() {

  useEffect(()=>{
    NavigationBar.setButtonStyleAsync('dark')
    GoogleSignin.configure({
              webClientId: '167960938593-afm6gcf2ejp920elo1e1uniagsvfaujh.apps.googleusercontent.com',
              iosClientId:'167960938593-ivmc62af96lrcsko8ha9s6pvc6bfrvuv.apps.googleusercontent.com',
              profileImageSize:100
          })
  }, [])

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content'); // or 'dark-content'
      StatusBar.setBackgroundColor('#10b981');   // or any color you want
    }, [])
  );

  return (
    <>
    
      <StatusBar 
        backgroundColor={'#10b981'}
        barStyle={'light-content'}
      />
      
      <AuthProvider>
        <Stack 
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Screen 
            name="index"
            options={{
              headerShown:false
            }}
          />


            {/* FORBIDDEN ROUTES */}
              <Stack.Screen 
                name="+not-found"
                options={{
                  headerShown:false
                }}
              />
          </Stack>
      </AuthProvider>
    
    </>
  );
}
