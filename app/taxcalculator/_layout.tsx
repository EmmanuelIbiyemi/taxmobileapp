import { Stack } from "expo-router";

import { StatusBar } from "react-native";

export default function CalculatorLayout(){
    return (
        <>
            <StatusBar 
                backgroundColor={'green'}
                barStyle={'light-content'}
            />
            <Stack 
                screenOptions={{
                    headerStyle:{
                        backgroundColor:"green",
                    },
                    headerTintColor:'white'
                }}
            >
                <Stack.Screen 
                    name="taxCal"
                    options={{
                        title:"Tax Calculator",
                        headerTitleStyle:{
                            color:'white'
                        },
                        headerTitleAlign:'center'
                    }}
                />
                <Stack.Screen 
                    name="Paye"
                    options={{
                        title:"Personal Income Tax",
                        headerTitleStyle:{
                            color:'white'
                        },
                        headerTitleAlign:'center'
                    }}
                />
                <Stack.Screen 
                    name="Vat"
                    options={{
                        title:"Vat Income Tax",
                        headerTitleStyle:{
                            color:'white'
                        },
                        headerTitleAlign:'center'
                    }}
                />
                <Stack.Screen 
                    name="companyTax"
                    options={{
                        title:"Company Tax",
                        headerTitleStyle:{
                            color:'white'
                        },
                        headerTitleAlign:'center'
                    }}
                />
            </Stack>
        </>
    )
}