import { View, Text , TouchableOpacity , TextInput, Image, Alert , KeyboardAvoidingView , ScrollView, Platform} from 'react-native'
import React, { useState } from 'react'

import { router } from 'expo-router'

const TopShow = ()=>{
  return(
    <>
      <View className='flex-[1] bg-emerald-500 w-full'>
        <Image 
          source={require("@/assets/auth_images/welcome.png")}
          style={{width:400 , height:400}}
        />
      </View>
    </>
  )
}


const InputFeilds = ()=>{
    const [fullName , setName ] = useState("");
    const [email , setMail] = useState("");
    const [password , setPass] = useState("");

    const [validatename , setValidname] = useState(false);
    const [validateemail , setValidmail] = useState(false);
    const [validatepass , setValidpass] = useState(false);



    // -- Function for sending the user info to public
    const signupApi =()=>{
      if (fullName == ""){
        setValidname(true);
      } else if (fullName.length > 3){
        setValidname(false)
      }
      else if (email == ""){
        setValidmail(true)
      } else if (email.length > 3){
        setValidmail(false)
      }
      else if (password == ""){
        setValidpass(true)
      } else if (password.length > 3){
        setValidpass(false)
      }
      else {
        Alert.alert("Sign Up SucessFull");
        router.navigate("/(auth)/login");
      }
    }
    
  return(
    <>
      <KeyboardAvoidingView style={{flex:2 , backgroundColor:'white' , width:'100%' , borderTopRightRadius:50 , borderTopLeftRadius:50}}
              behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      >
        <ScrollView 
        contentContainerStyle={{flex:1 , justifyContent:'center', alignItems:'center',padding:20}}
          keyboardShouldPersistTaps="handled"
        >
        {/* These are the inputs like the form*/}
            <View className='gap-3 w-full'>
              <View style={{paddingHorizontal:20, gap:10}}>
                <TextInput
                  placeholder='Full Name'
                  value={fullName}
                  onChangeText={setName}
                  cursorColor={'black'}
                  style={{borderWidth:1, paddingLeft:20}}
                  className='bg-gray-200 rounded-xl h-[55px]'
                />
                { 
                  validatename && <Text className='color-red-600 font-bold'>User Name Empty</Text>
                }
                  
                <TextInput
                  placeholder='Email'
                  value={email}
                  onChangeText={setMail}
                  cursorColor={'black'}
                  style={{borderWidth:1, paddingLeft:20}}
                  className='bg-gray-200 rounded-xl h-[55px]'
                />
                  { 
                    validateemail && <Text className='color-red-600 font-bold'>User Email Empty</Text>
                  }
                <TextInput
                  placeholder='Password'
                  value={password}
                  onChangeText={setPass}
                  cursorColor={'black'}
                  style={{borderWidth:1, paddingLeft:20}}
                  className='bg-gray-200 rounded-xl h-[55px]'
                />
                {
                  validatepass && <Text className='color-red-600 font-bold'>Password Empty</Text>
                }
              </View>
              <TouchableOpacity activeOpacity={1} onPress={()=> signupApi()}>
                <View className='justify-center items-center bg-yellow-500 p-[20] rounded-3xl w-72 self-center'>
                  <Text className='font-semibold'>
                    Sign up
                  </Text>
                </View>
              </TouchableOpacity>

            </View>

            <View className='flex-row justify-center items-center gap-2'>
              <Text className='color-black font-semibold'>
                Already Have an account ?
              </Text>
              <TouchableOpacity activeOpacity={1} onPress={()=>{router.navigate("/(auth)/login")}}>
                <View>
                  <Text className='color-yellow-400 font-semibold'>
                    Login
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    </>
  )
}
export default function Signup() {
  return (
    <View className='flex-1 justify-center items-center flex-col bg-emerald-500'>

        {/* <View className='w-full h-full'> */}
          <TopShow />
        {/* </View> */}

        {/* <View className='w-full h-full bg-emerald-500'> */}
          <InputFeilds />
        {/* </View> */}
    </View>
  )
}