import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useRef } from 'react'
import { MessageCircle } from 'lucide-react-native'

interface Message {
  id: string;
  text: string;
  from: 'user' | 'bot';
  timestamp: number;
}

interface MessageInpProps {
  onSend: (text: string) => void;
}

const MessageInp = ({ onSend }: MessageInpProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  return (
    <>
      <View className='flex-row rounded-2xl' style={{ borderWidth: 1, paddingLeft: 20 }}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder='Message'
          inputMode='text'
          className='w-[100px] gap-[20px] flex-1'
          cursorColor={'black'}
          returnKeyType='send'
          placeholderTextColor={'black'}
          blurOnSubmit={false}
          onSubmitEditing={handleSend}
        />

        <TouchableOpacity activeOpacity={1} onPress={handleSend}>
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
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "How may we help you ...?", from: "bot", timestamp: Date.now() },
  ]);
  
  const flatListRef = useRef<FlatList>(null);
  const [botRepling , setBot] = useState("")

  const handleSend = (text: string) => {

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      from: "user",
      timestamp: Date.now()
    };

    if(text.includes("Hello")){
      setBot("Welcome To Taxparata")
    } else {
      setBot("Thanks for your message! We'll get back to you soon.")
    }
    
    setMessages((prev) => [...prev, newMessage]);

    // Auto scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Simulate bot response (remove this in production)
    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: botRepling,
        from: "bot",
        timestamp: Date.now()
      };
      setMessages((prev) => [...prev, botReply]);
      
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }, 1000);
  };

  const renderMessage = ({ item }: { item: Message }) => {
    const isUser = item.from === 'user';
    
    return (
      <View
        className={`px-4 py-3 mb-3 rounded-xl max-w-[80%] ${
          isUser ? 'self-end bg-green-600' : 'self-start bg-slate-600'
        }`}
        style={{ marginHorizontal: 10 }}
      >
        <Text className='color-white text-[15px]'>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      <View className='flex-1 bg-white'>
        <View className='flex-1'>
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={renderMessage}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingTop: 20, paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
        </View>

        <View className='mb-[15px]' style={{ paddingHorizontal: 10 }}>
          <MessageInp onSend={handleSend} />
        </View>
      </View>
    </>
  )
}