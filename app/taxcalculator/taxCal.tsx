import { View, Text , FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Index() {

  const buttons=[
    {title:"Personal Income Tax", route:""},
    {title:"Company Tax", route:""}
  ]
  
  return (
    <>
      <View className='flex-1 bg-white justify-center items-center gap-5'>
        <View className='flex-row gap-5' style={{marginHorizontal:10}}>
              <TouchableOpacity activeOpacity={1} onPress={()=>{router.navigate("/mainapp/taxcalculator/Paye")}}>
                <View className='w-[170px] h-[159px] rounded-2xl justify-center items-center' 
                  style={{
                    marginLeft:30 ,
                    shadowOpacity:10 ,
                    backgroundColor: '#fff',
                    shadowColor:'green',
                    shadowOffset:{width: 0 , height:10},
                    shadowRadius:60,
                    elevation: 10,
                    borderRadius:20
                  }}
                >
                  <Text>
                    PAYE 
                  </Text>
                  <Text>
                    (Salary earners)
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={1} onPress={()=>{router.navigate("/mainapp/taxcalculator/companyTax")}}>
                <View className='w-[170px] h-[159px] rounded-2xl justify-center items-center' 
                style={{marginRight:30,
                        shadowOpacity:10 ,
                        backgroundColor: '#fff',
                        shadowColor:'green',
                        shadowOffset:{width: 0 , height:10},
                        shadowRadius:60,
                        elevation: 10,
                        borderRadius:20}}>
                  <Text>
                    Company Tax
                  </Text>
                </View>
              </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={1} onPress={()=>{router.navigate("/mainapp/taxcalculator/Vat")}}>
          <View className='w-[200px] h-[159px] rounded-2xl justify-center items-center' 
           style={{
                marginLeft:30 ,
                shadowOpacity:10 ,
                backgroundColor: '#fff',
                shadowColor:'green',
                shadowOffset:{width: 0 , height:10},
                shadowRadius:60,
                elevation: 10,
                borderRadius:20
              }}>
            <Text>
              VAT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}