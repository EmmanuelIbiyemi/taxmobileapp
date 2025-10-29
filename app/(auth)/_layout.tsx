import { Stack } from "expo-router";

import * as SystemUI from 'expo-system-ui'
import { useEffect } from "react";

export default function Authlayout(){

    useEffect(()=>{
        async function android_navigation() {
            await SystemUI.setBackgroundColorAsync("whtie");
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
                    title:"Signup",
                }}
            />
            <Stack.Screen 
                name="login"
                options={{
                    title:"Log in",
                }}
            />
        </Stack>
    )
}