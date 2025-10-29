import { View, Text , TouchableOpacity , Platform, UIManager, LayoutAnimation , FlatList, ListRenderItem} from 'react-native'
import React, { useState } from 'react'
import { ArrowDown } from "lucide-react-native"


import { taxRuless } from "../taxRuless"
// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

interface TaxRule {
  id: string;
  title: string;
  info: string;
}
export default function TaxRegulations() {

   const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId(openId === id ? null : id);
  };


  const renderItem:  ListRenderItem<TaxRule>= ({ item }) => (
    <View
      style={{
        marginVertical: 5,
        borderColor: '#86efac',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => toggleItem(item.id)}
        style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12 }}
      >
        <Text style={{ fontWeight: '500' }}>{item.title}</Text>
        <ArrowDown color="black" />
      </TouchableOpacity>
      {openId === item.id && (
        <View style={{ paddingBottom: 10 }}>
          <Text style={{ color: '#333' }}>{item.info}</Text>
        </View>
      )}
    </View>
  );
  return (
    <>
      <View className='flex-1 bg-white items-center'>

         <FlatList
          data={taxRuless}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={{ padding: 10 }}
          showsVerticalScrollIndicator={false}
        />
      
      </View>
    </>
   
  )
}