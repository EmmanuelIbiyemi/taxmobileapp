import { View, Text , TouchableOpacity , TextInput, Image, Alert , KeyboardAvoidingView , ScrollView, Platform} from 'react-native'
import React, { useState } from 'react'

import { router } from 'expo-router';

import { Eye } from 'lucide-react-native';

import ToastManager , { Toast } from 'toastify-react-native'

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
    const [showPass , setShow] = useState(false);


    
    
    
        function handleShowPassword(){
          setShow(true)
          const timeToShowPass=()=>{
            setTimeout(()=>{
                setShow(false)
              },2000)
          }
          timeToShowPass()
        }



    const signupApi = () => {
      let isValid = true;

      if (fullName === "" || fullName.length <= 3) {
        // setValidname(true);
        Toast.warn('Name empty!', "bottom");
        console.log("Name is empty");
        isValid = false;
      } else {
        setValidname(false);
      }

      if (email === "" || email.length <= 3) {
        // setValidmail(true);
        Toast.warn('Invalid Mail!', "bottom");
        console.log("Inavalid Email")
        isValid = false;
      } else {
        setValidmail(false);
      }

      if (password === "" || password.length <= 3) {
        // setValidpass(true);
        Toast.warn('Empty Password!', "bottom");
        console.log("Password Empty")
        isValid = false;
      } else {
        setValidpass(false);
      }

      if (fullName === "" && email === "" && password === ""){
          Toast.error('Put Your Info', 'bottom');
          console.log("Kindly Fill Up the whole details")
      }

      if (isValid) {
        Toast.success('Sign Up Successful!', "top");
        router.navigate("/(auth)/login");
      }
};
    
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
                  className='bg-gray-100 rounded-xl h-[55px] border-gray-400'
                  placeholderTextColor={'black'}
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
                  className='bg-gray-100 rounded-xl h-[55px] border-gray-400'
                  placeholderTextColor={'black'}
                />
                  { 
                    validateemail && <Text className='color-red-600 font-bold'>User Email Empty</Text>
                  }
                <View className='flex-row border border-gray-400 bg-gray-100 rounded-xl h-[55px]'>
                  <TextInput
                    placeholder='Password'
                    value={password}
                    onChangeText={setPass}
                    cursorColor={'black'}
                    style={{paddingLeft:20}}
                    className='flex-[1]'
                    placeholderTextColor={'black'}
                    secureTextEntry={!showPass}
                  />
                  <TouchableOpacity onPress={()=>{handleShowPassword()}} activeOpacity={0.5}>
                    <View className='flex-[2] justify-center items-center bg-transparent self-center' style={{paddingHorizontal:10}}>
                      <Eye 
                        color={"black"}
                        size={20}
                      />
                    </View>
                </TouchableOpacity>
            </View>
                {
                  validatepass && <Text className='color-red-600 font-bold'>Password Empty</Text>
                }
              </View>
              <TouchableOpacity activeOpacity={1} onPress={()=> {signupApi()}}>
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

import { toastConfig } from '@/components/addons/toasts';
export default function Signup() {

  const [isRTL, setIsRTL] = useState(false)
  const [showProgressBar, setShowProgressBar] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(true)

  return (
    <>
      <View className='flex-1 justify-center items-center flex-col bg-emerald-500'>

          {/* <View className='w-full h-full'> */}
            <TopShow />
          {/* </View> */}

          {/* <View className='w-full h-full bg-emerald-500'> */}
            <InputFeilds />
          {/* </View> */}
      </View>

      <ToastManager 
        config={toastConfig}
        position={'bottom'}
        isRTL={isRTL}
        showProgressBar={showProgressBar}
        showCloseIcon={showCloseIcon}
        animationStyle='fade'
        useModal={false}
      />
    </>
  )
}