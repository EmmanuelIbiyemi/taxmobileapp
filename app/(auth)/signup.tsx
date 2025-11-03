import { View, Text , TouchableOpacity , TextInput, Image, Alert , KeyboardAvoidingView , ScrollView, Platform} from 'react-native'
import React, { useState } from 'react'

import { router } from 'expo-router';

import { Eye } from 'lucide-react-native';

import ToastManager , { Toast } from 'toastify-react-native';

// icons image
import '@/assets/auth_images/facebook-icon.png'
import '@/assets/auth_images/google-color-icon.png'

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

      // Trim to avoid "spaces only" inputs
      const name = fullName.trim();
      const mail = email.trim();
      const pass = password.trim();

      let isValid = true;

      if (name === "" || fullName.length <= 3) {
        // setValidname(true);
        Toast.warn('Name empty!', "top");
        console.log("Name is empty");
        return;
      } else {
        setValidname(false);
      }

      if ( mail === "" || mail.includes("@") || mail.length <= 3) {
        // setValidmail(true);
        Toast.warn('Invalid Mail!', "top");
        console.log("Inavalid Email")
        return;
      } else {
        setValidmail(false);
      }

      if (pass === "" || pass.length <= 3) {
        // setValidpass(true);
        Toast.warn('Empty Password!', "top");
        console.log("Password Empty")
        return;
      } else {
        setValidpass(false);
      }

      if (name === "" && mail === "" && pass === ""){
          Toast.error('Put Your Info', 'top');
          console.log("Kindly Fill Up the whole details")
          return;
      }

      if (isValid) {
        handleSignup()
      }
    };

    const handleSignup = async () => {
      const userData = {
        fullName: fullName,
        email: email,
        password: password
      };

      try {
        const response = await fetch("http://127.0.0.1:8000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const data = await response.json();
        console.log("Signup Response:", data);

        if (response.ok) {
          // Alert.alert("Success", "Account created successfully!");
          Toast.success("Account created successfully!", "top");
          router.navigate("/(auth)/login");
        } else {
          // Alert.alert("Error", data.Error || "Signup failed");
          Toast.error("SignUp Failed", "top")
        }
      } catch (error) {
        console.error("Network Error:", error);
        Alert.alert("Error", "Unable to reach server. Make sure backend is running.");
      }
    };

    
  return (
  <>
    <View
      style={{
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          backgroundColor:'white',
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* OAuth Buttons */}
        <View className="flex-row gap-3 mb-6 mt-6">
          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4"
          >
            <Image
              source={require('@/assets/auth_images/google-color-icon.png')}
              className="w-[25px] h-[25px]"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4"
          >
            <Image
              source={require('@/assets/auth_images/facebook-icon.png')}
              className="w-[45px] h-[45px]"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            className="bg-white rounded-3xl border border-gray-300 w-[70px] h-[70px] justify-center items-center shadow-2xl shadow-green-400 p-4"
          >
            <Image
              source={require('@/assets/auth_images/apple-icon.png')}
              className="w-[25px] h-[25px]"
            />
          </TouchableOpacity>
        </View>

        {/* Form Section wrapped in KeyboardAvoidingView */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ width: '100%' }}
          keyboardVerticalOffset={Platform.OS === 'android' ? 80 : 0}
        >
          <View className="gap-3 w-full">
            <View style={{ paddingHorizontal: 5, gap: 10 }}>
              <TextInput
                placeholder="Full Name"
                value={fullName}
                onChangeText={setName}
                cursorColor={'black'}
                style={{ borderWidth: 1, paddingLeft: 20 }}
                className="bg-gray-100 rounded-xl h-[55px] border-gray-400"
                placeholderTextColor={'black'}
              />
              
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setMail}
                cursorColor={'black'}
                style={{ borderWidth: 1, paddingLeft: 20 }}
                className="bg-gray-100 rounded-xl h-[55px] border-gray-400"
                placeholderTextColor={'black'}
              />
              

              <View className="flex-row border border-gray-400 bg-gray-100 rounded-xl h-[55px]">
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={setPass}
                  cursorColor={'black'}
                  style={{ paddingLeft: 20 }}
                  className="flex-[1]"
                  placeholderTextColor={'black'}
                  secureTextEntry={!showPass}
                />
                <TouchableOpacity onPress={handleShowPassword} activeOpacity={0.5}>
                  <View
                    className="flex-[2] justify-center items-center bg-transparent self-center"
                    style={{ paddingHorizontal: 10 }}
                  >
                    <Eye color={'black'} size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              
            </View>

            <TouchableOpacity activeOpacity={1} onPress={()=>{signupApi()}}>
              <View className="justify-center items-center bg-yellow-500 p-[20] rounded-3xl w-72 self-center">
                <Text className="font-semibold">Sign up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/* Footer */}
        <View className="flex-row justify-center items-center gap-2 mt-5">
          <Text className="color-black font-semibold">
            Already Have an account ?
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              router.navigate('/(auth)/login');
            }}
          >
            <Text className="color-yellow-400 font-semibold">Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  </>
);

}

import { toastConfig } from '@/configings/toasts';
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