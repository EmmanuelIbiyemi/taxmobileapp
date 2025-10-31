import { View, Text , FlatList , TouchableOpacity , Image} from 'react-native'
import React from 'react'


const arrayBlog = [
    {id:1, blogtitle:"blog1 This is just a simple blog", blog:"This is the main blog main blog main blog main blog", imgaeblog:'https://picsum.photos/seed/picsum/200/300'},
    {id:2, blogtitle:"blog2 This is just a simple blog", blog:"This is the main blog main blog main blog main blog", imageblog:'https://picsum.photos/seed/picsum/200/300'},
    {id:3, blogtitle:"blog3 This is just a simple blog", blog:"This is the main blog main blog main blog main blog", imageblog:'https://picsum.photos/200/300?grayscale'},
    {id:4, blogtitle:"blog4 This is just a simple blog", blog:"This is the main blog main blog main blog main blog", imageblog:'https://picsum.photos/200/300/?blur'},
]
const DisplayArticle=()=>{
    return(
        <>
         <FlatList 
            data={arrayBlog}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity activeOpacity={1}>
                        <View className=' justify-center items-center flex-row gap-14 rounded-2xl bg-white border border-gray-300' style={
                            {
                                height:140,
                                margin:20,
                                shadowColor:'green',
                                elevation:5
                            }
                        }>
                            <View className='flex-[1]'>
                             {/* This is the title section */}
                                <Text className='font-bold color-gray-500 italic'>
                                    {item.blogtitle}
                                </Text>
                                <Text>
                                    {item.blog}
                                </Text>   
                            </View>
                            <View className='flex-[6] justify-center items-center self-center'>
                                <Image 
                                    source={{uri: item.imageblog}}
                                    style={{width:200 , height:120}}
                                    resizeMode="cover"
                                    className='rounded-2xl'
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
         />
        </>
        
    )
}
export default function Article() {
  return (
    <>
        <View className='flex-1 bg-white'>
            <DisplayArticle />
        </View>
    </>
  )
}