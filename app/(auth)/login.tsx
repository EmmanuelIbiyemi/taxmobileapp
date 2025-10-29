import { 
        View, 
        Text, 
        TextInput,
        TouchableOpacity,
        Image
        } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'


const TopShow = ()=>{
  return(
    <>
      <View className='flex-[1] bg-emerald-500 w-full'>
        <Image 
          source={require("@/assets/auth_images/login.png")}
          style={{width:300 , height:300}}
        />
      </View>
    </>
  )
}


const InputFeilds = ()=>{
    const [email , setMail] = useState("");
    const [password , setPass] = useState("");

    
    const send_fetch =()=>{
        console.log ("Sending and fetching data !!!")
    }

  return(
    <>
      <View className='flex-[2] bg-white w-full h-full gap-2 justify-center items-center' style={{borderTopRightRadius:50 , borderTopLeftRadius:50}}>

        {/* These are the inputs like the form*/}
        <View className='gap-3 w-full'>
          <View style={{paddingHorizontal:20, gap:10}}>
            <TextInput
              placeholder='Full Name'
              value={email}
              onChangeText={setMail}
              cursorColor={'black'}
              style={{borderWidth:1, paddingLeft:20}}
              className='bg-gray-200 rounded-xl h-[55px]'
            />
            <TextInput
              placeholder='Email'
              value={password}
              onChangeText={setPass}
              cursorColor={'black'}
              style={{borderWidth:1, paddingLeft:20}}
              className='bg-gray-200 rounded-xl h-[55px]'
            />

            <TouchableOpacity onPress={()=>{router.replace("/mainapp/mainIndex")}}>
              <View className='justify-center items-center bg-yellow-500 p-[20] rounded-3xl w-[200px] self-center'>
                <Text className='font-semibold'>
                  Login
                </Text>
              </View>
            </TouchableOpacity>

                <View className='flex-row justify-center items-center gap-2'>
                  <Text className='color-black font-semibold'>
                    Don't Have an account Register
                  </Text>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{router.back()}}>
                    <View>
                      <Text className='color-yellow-400 font-semibold'>
                        Signup
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
          </View>
        </View>
      </View>
    </>)
    }
export default function Login() {
    
  return (
    <>
      <View className='flex-1 justify-center items-center bg-emerald-500 flex-col'>
        <TopShow />
        <InputFeilds/>
      </View>
    </>
  )
}