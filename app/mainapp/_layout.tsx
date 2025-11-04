import { Tabs } from "expo-router";
import "@/global.css"
import * as NavigationBar from 'expo-navigation-bar'
import { StatusBar , View} from "react-native";

import { useFocusEffect } from "expo-router";
import React, { useCallback, useEffect } from "react";
// Icons for the tab
import { Home , Newspaper , BookOpenText , User} from "lucide-react-native"
import * as SystemUI from "expo-system-ui";

export default function MainApp() {

  NavigationBar.useVisibility();

  useEffect(()=>{
    const navgationBar = async ()=>{
      await NavigationBar.setButtonStyleAsync('light')
      await NavigationBar.setBackgroundColorAsync('green')

      await NavigationBar.setVisibilityAsync('visible')

      await SystemUI.setBackgroundColorAsync('green');
    }

    navgationBar();
  })

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('light-content'); // or 'dark-content'
      StatusBar.setBackgroundColor('green');   // or any color you want
    }, [])
  );

  return (
    <>
    
      <StatusBar 
        backgroundColor={'green'}
        barStyle={'light-content'}
      />
      <Tabs
        screenOptions={{
          headerTitleAlign:"center",
          headerTitleStyle:{
            color:'white'
          },
          headerStyle:{
              backgroundColor:'green',
              shadowColor:'green'
          },
          tabBarStyle:{
            borderTopRightRadius:30,
            borderTopLeftRadius:30,
            borderWidth:1,
            justifyContent:'center',
            alignContent:'center',
            height:75,
            backgroundColor:'green',
            elevation:0
          },
          tabBarLabelStyle:{
            fontSize:13
          },
          tabBarShowLabel:false,
          tabBarActiveTintColor:'blue',
          tabBarIconStyle:{
            justifyContent:'center',
            alignItems:'center',
            flex:1,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tabs.Screen 
          name="mainIndex"
          options={{
            title:"Home",
            tabBarIcon: () =>{
               return( 
                  <Home 
                    color={'white'}
                    size={24}
                  />
               )
            },
          }}
        />
        
        <Tabs.Screen 
          name="article"
          options={{
            title:"Tax Update",
            tabBarIcon:() =>{
              return(
                  <Newspaper 
                    color={'white'} 
                    size={24} 
                  />
              )
            },
          }}
        />

        <Tabs.Screen 
          name="taxRules"
          options={{
            title:"Regulations",
            tabBarIcon:()=>{
              return(
                  <BookOpenText 
                    color={"white"}
                    size={24}
                  />
              )
            }
          }}
        />
        <Tabs.Screen 
          name="profile"
          options={{
            title:"Profile",
            tabBarIcon:() =>{
              return(
                  <User 
                    color={'white'} 
                    size={24} 
                  />
              )
            }
          }}
        />
        <Tabs.Screen 
          name="taxcalculator"
          options={{
            href:null,
            title:"taxcalculator",
            tabBarIcon:() =>{
              return(
                  <User 
                    color={'white'} 
                    size={24} 
                  />
              )
            }
          }}
        />

      </Tabs>
    
    </>
  );
}
