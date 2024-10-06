import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view'
import { router, useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native'
import { width } from '../utils/Scaling'
import CommentItem from '../components/CommentItem'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import icons from '../constants/icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
const ProductDetail = () => {
  const searchParams =useLocalSearchParams()
  
  const [product,setProduct]=useState({})
  
  const storeData= async (key) =>{
    try{
      const value = await AsyncStorage.getItem(key)
      if(value !== null){
        return value;
      }
    }catch(e){
      console.log('Error:',e)
    }

  }
  const getProduct= async () =>{
    const token=await storeData('token')
    const id=searchParams.id;
    axios.get(`http://192.168.2.29:8080/api/v1/products/get`,{
      headers:{
        'Authorization':`Bearer ${token}`
      },
      params:{
        id:id
      }
    })
    .then(response=>{
      setProduct(response.data)
      console.log('Product:',product)
    })
    .catch(error=>{
      console.log('Get product error:',error)
    });
    

  }
  useEffect(()=>{
    getProduct()
  },[])
  // const product={
  //   id:id,
  //   price:20000,
  //   productName:'Men\'s Harrington Jacket',
  //   description:'Built for life and made to last, this full-zip corduroy jacket is part of our Nike Life collection. The spacious fit gives you plenty of room to layer underneath, while the soft corduroy keeps it casual and timeless.',
  //   comments:[
  //     {
  //       id:1,
  //       username:'duykhanh',
  //       content:'Sản phẩm rất tốt',
  //       rating:4,
  //       date:'2021-10-10'
  //     },
  //     {
  //       id:2,
  //       username:'duy',
  //       content:'Sản phẩm đẹp',
  //       rating:4,
  //       date:'2021-10-10'
  //     },
  //     {
  //       id:3,
  //       username:'duyen',
  //       content:'Vừa vặn',
  //       rating:3,
  //       date:'2021-10-10'
  //     },
  //     {
  //       id:4,
  //       username:'duykhanh',
  //       content:'Quá chật',
  //       rating:2,
  //       date:'2021-10-10'
  //     }
  //   ],
  //   url:[
  //     'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
  //     'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
  //     'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
  //   ]
  // }
  return (
    <SafeAreaView>
      <View className='flex flex-row w-full mt-2'>
          <TouchableOpacity
            onPress={() => router.back()}
            className='w-10 h-10 ml-4 items-center'
          >
            <Image
              source={icons.ic_arrow_left}
              className="w-6 h-6  "
              resizeMode='contain'
            />
          </TouchableOpacity>
        </View>
      <ScrollView>

        <PagerView
          initialPage={0}
          className='w-full'
          style={{width:width,height:500}}
        >
          {
            product.images.map((url,index)=>(
              <View key={index}>
                <Image source={{uri:url}} 
                  className='w-full h-full'
                  resizeMode='cover'
                />
              </View>
            ))
          }
        </PagerView>
        <Text className='text-xl font-bold text-red-600 mt-2 mx-4'>{product.price}</Text>
        <Text className='text-base font-bold text-black mt-3 mx-4'>{product.name}</Text>
        <Text className='text-xs font-normal text-[#27272780] mt-3 mx-4'>{product.description}</Text>
        <Text className='text-base font-bold text-black mt-6 mx-4'>Nhận xét</Text>
        {/* <FlatList
          data={product.comments}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item }) => (
            <CommentItem
              username={item.username}
              content={item.content}
              rating={item.rating}
              date={item.date}
              containerStyles='mt-3 mx-4'
            />
          )}
        /> */}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProductDetail