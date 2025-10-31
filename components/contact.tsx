import { View, Text , TextInput , TouchableOpacity, Alert, FlatList} from 'react-native'
import React from 'react'

import { MessageCircle } from 'lucide-react-native'



export default function Contact() {
  const [Message , setMsg] = React.useState<{ id: string; text: string; from: string }[]>([
    { id: 1, text: "How may we help you ...?", from: "bot" },
  ]);
  const [input, setInput] = React.useState("");
  const flatListRef = React.useRef<FlatList>(null);

  
  const handleSend = () => {
    if (!input.trim()) return;
    const newMessage = { id: Date.now().toString(), text: input.trim(), from: "user" };
    setMsg((prev) => [...prev, newMessage]);
    setInput("");

    // Auto scroll to bottom
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

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
    return(
      <>
        <View className='flex-row rounded-2xl' style={{borderWidth:1, paddingLeft:20}}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder='Message'
              inputMode='text'
              className='w-[100px] gap-[20px] flex-1'
              cursorColor={'black'}
              returnKeyType='send'
              placeholderTextColor={'black'}
            />

          <TouchableOpacity activeOpacity={1} onPress={()=>{handleSend()}}>
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