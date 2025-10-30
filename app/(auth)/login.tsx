import { 
        View, 
        Text, 
        TextInput,
        TouchableOpacity,
        Image
        } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Eye } from 'lucide-react-native'

import ToastManager , { Toast }  from 'toastify-react-native';
import { toastConfig } from '@/components/addons/toasts';
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
    const [showPass , setShow] = useState(false);

    
    const [validateemail , setValidmail] = useState(false);
    const [validatepass , setValidpass] = useState(false);


    function handleShowPassword(){
      setShow(true)
      const timeToShowPass=()=>{
        setTimeout(()=>{
            setShow(false)
          },2000)
      }
      timeToShowPass()
    }
    
     const loginApi = () => {
          let isValid = true;
    
          if (email === "" || email.length <= 3) {
            // setValidname(true);
            Toast.warn('Invalid Mail!', "bottom");
            console.log("Mail Is Empty");
            isValid = false;
          } else {
            setValidmail(false);
          }
    
          if (password === "" || password.length <= 3) {
            Toast.warn('Invalid Password!', "bottom");
            console.log("Inavalid Passowrd")
            isValid = false;
          } else {
            setValidpass(false);
          }
          if (email === "" && password === ""){
              Toast.error('Invaid Details', 'bottom');
              console.log("Kindly Fill Up the whole details")
          }
          if (isValid) {
            Toast.success('Login Successful!', "top")
            router.replace("/mainapp/mainIndex")
          }
    }

  return(
    <>
      <View className='flex-[2] bg-white w-full h-full gap-2 justify-center ' style={{borderTopRightRadius:50 , borderTopLeftRadius:50}}>

        {/* These are the inputs like the form*/}
        <View className='gap-3 w-full'>
          <View style={{paddingHorizontal:20, gap:10}}>
            <TextInput
              placeholder='Email'
              value={email}
              onChangeText={setMail}
              cursorColor={'black'}
              style={{borderWidth:1, paddingLeft:20}}
              className='bg-gray-100 rounded-xl h-[55px] border-gray-400'
              placeholderTextColor={'black'}
            />


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

            <TouchableOpacity onPress={()=>{loginApi()}}>
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

  const [isRTL, setIsRTL] = useState(false)
  const [showProgressBar, setShowProgressBar] = useState(true)
  const [showCloseIcon, setShowCloseIcon] = useState(true)
    
  return (
    <>
      <View className='flex-1 justify-center items-center bg-emerald-500 flex-col'>
        <TopShow />
        <InputFeilds/>
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