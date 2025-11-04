import { Stack } from "expo-router";

import * as SystemUI from 'expo-system-ui'
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect } from "react";


export default function Authlayout(){

    useEffect(()=>{
        async function android_navigation() {
            await SystemUI.setBackgroundColorAsync("whtie");
            await NavigationBar.setBackgroundColorAsync("white");
             
            await NavigationBar.setVisibilityAsync('visible');
            
        }

        android_navigation();
    })

    return (
        <Stack
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#10b981',
                },
                headerShadowVisible:false,
                headerTitleAlign:"center",
                headerTitleStyle:{
                    color:"white"
                },
                animation:'none',
                contentStyle: { backgroundColor: '#fff' },
                headerTintColor:'white'
                
            }} 
        >
            <Stack.Screen 
                name="signup"
                options={{
                    title:"",
                }}
            />
            <Stack.Screen 
                name="login"
                options={{
                    title:"",
                }}
            />
        </Stack>
    )
}