import { 
        View, 
        Text, 
        TextInput,
        TouchableOpacity,
        Image,
        ScrollView,
        Alert
        } from 'react-native'
import React, { useState } from 'react'
import { router } from 'expo-router'
import { Eye } from 'lucide-react-native'

import ToastManager , { Toast }  from 'toastify-react-native';
import { toastConfig } from '@/configings/toasts';



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
            handleLogin()
          }
    };

    const handleLogin = async () => {
          const userData = {
            email: email,
            password: password
          };
    
          try {
            const response = await fetch("https://taxparabackend.onrender.com/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            });
    
            const data = await response.json();
            console.log("Login Response:", data);
    
            if (data.Error === "null") {
              // Alert.alert("Success", "Account created successfully!");
              Toast.success("Login successfully!", "top");
              router.replace("/mainapp/mainIndex");
            } else if (data.Error === "list index out of range"){
               Toast.warn("User Don't Exist!", "top");
               const timer = setTimeout(() => {
                  router.back()
              }, 1000)
    
              return ()=>clearTimeout(timer)
            } 
            else {
              Toast.error("Login Failed", "top")
            }
          } catch (error) {
            // console.error("Network Error:", error);
            Toast.error("NetWork Error", "top");
          }
        };

  return(
    <>
      <View className='flex-[1] bg-white w-full h-full gap-2 justify-center ' style={{borderTopRightRadius:50 , borderTopLeftRadius:50}}>

        <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              backgroundColor:'white',
            }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            <View className='flex-row gap-3 mb-6 mt-6 justify-center items-center'>
            
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        className='bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4'
                        // onPress={()=>promptAsync()}
                      >
                        <View>
                          <Image 
                            source={require("@/assets/auth_images/google-color-icon.png")}
                            className="w-[25px] h-[25px]"
                          />
                        </View>
                      </TouchableOpacity>
            
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        className='bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4'
                      >
                        <View>
                          <Image 
                            source={require("@/assets/auth_images/facebook-icon.png")}
                            className="w-[45px] h-[45px]"
                          />
                        </View>
                      </TouchableOpacity>
            
                      <TouchableOpacity 
                        activeOpacity={0.8}
                        className='bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4'
                      >
                        <View>
                          <Image 
                            source={require("@/assets/auth_images/apple-icon.png")}
                            className="w-[25px] h-[25px]"
                          />
                        </View>
                      </TouchableOpacity>
            
                    </View>

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
                  className='flex-[1] color-black'
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

              <View className='w-[200px] self-center'>
                <TouchableOpacity onPress={()=>{loginApi()}}>
                  <View className='justify-center items-center bg-yellow-500 p-[20] rounded-3xl w-[200px] self-center'>
                    <Text className='font-semibold'>
                      Login
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

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
        </ScrollView>
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