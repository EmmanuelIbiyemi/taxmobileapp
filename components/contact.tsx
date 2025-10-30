import { View, Text , TextInput , TouchableOpacity, Alert} from 'react-native'
import React from 'react'

import { MessageCircle } from 'lucide-react-native'

const ChatSection =()=>{
  return(
    <>
      <View className='flex-1 pt-[20px]'>

        {/* User Sending */}
        <View className='self-end bg-green-600 rounded-lg px-4 py-3 mb-3' style={{marginHorizontal:10}}>
            <Text className='color-white'>
               Helo
            </Text>
        </View>
        
        {/* Firs reply */}
        <View className='self-start bg-slate-600  px-4 py-3 mb-3 rounded-xl' style={{marginHorizontal:10}}>
          <Text className='color-white'>
            How May we help you ...?
          </Text>
        </View>
      </View>
    </>
  )
}
const MessageInp =()=>{

  const [Message , setMsg] = React.useState("")
  return(
    <>
      <View className='flex-row rounded-2xl' style={{borderWidth:1, paddingLeft:20}}>
          <TextInput
            value={Message}
            onChangeText={setMsg}
            placeholder='Message'
            inputMode='text'
            className='w-[100px] gap-[20px] flex-1'
            cursorColor={'black'}
            returnKeyType='send'
            placeholderTextColor={'black'}
          />

        <TouchableOpacity activeOpacity={1} onPress={()=>{Alert.alert("Message sent"), setMsg("")}}>
          <View className='bg-emerald-600 justify-center items-center p-[20px] rounded-2xl self-end'>
              <MessageCircle 
                color={'white'}
                size={21}
              />
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}
export default function Contact() {


  return (
    <>
      <View className='flex-1 bg-white'>

        <View className='flex-1'>
          <ChatSection />
        </View>
        <View className='mb-[15px]' style={{paddingHorizontal:10}}>
          <MessageInp />
        </View>

      </View>
    </>
  )
}