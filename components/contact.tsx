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
      <View className='flex-row rounded-2xl' style={{ borderWidth: 1, paddingLeft: 20 ,marginTop:10}}>
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

const getBotReply = (text:string) => {
  const message = text.toLowerCase();

  if (message.includes("hello") || message.includes("hi")) {
    return "👋 Welcome to TaxParata! I’m your virtual tax assistant. How can I help you today?";
  } 
  
  if (message.includes("register") || message.includes("tin")) {
    return "🧾 To register for a personal TIN, I’ll need your full name, email, and address. Would you like to start the process? Kindly go to the TIN section";
  } 
  
  if (message.includes("tax") && message.includes("payment")) {
    return "💰 You can make your tax payment directly through the FIRS portal or our app’s payment section.";
  }

  if (message.includes("deadline") || message.includes("due date")) {
    return "⏰ Tax filing deadlines vary by type. Personal income tax is usually due by March 31st each year.";
  }

  if (message.includes("receipt") || message.includes("proof")) {
    return "📄 Once payment is confirmed, you’ll receive a PDF receipt via email automatically.";
  }

  if (message.includes("help") || message.includes("support")) {
    return "🙋 Sure! Tell me what you need help with — registration, payment, or general tax info?";
  }

  // Default / fallback
  return "🤖 I didn’t quite catch that. You can ask me things like ‘register TIN’, ‘tax payment’, or ‘deadline’.";
};

export default function Contact() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: "How may we help you ...?", from: "bot", timestamp: Date.now() },
  ]);
  
  const flatListRef = useRef<FlatList>(null);

  const handleSend = (text: string) => {

    const newMessage: Message = {
      id: Date.now().toString(),
      text: text,
      from: "user",
      timestamp: Date.now()
    };

   const botReplying = getBotReply(text=text)
    
    setMessages((prev) => [...prev, newMessage]);

    // Auto scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);

    // Simulate bot response (remove this in production)
    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        text: botReplying,
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