import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PagerView from 'react-native-pager-view'
import { router, useLocalSearchParams } from 'expo-router'
import { Image } from 'react-native'
import { width } from '../utils/Scaling'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import icons from '../constants/icons'
import { getProduct } from '../services/ProductService'
import { handleAddCart } from '../services/CartService'

const ProductDetail = () => {
  const searchParams =useLocalSearchParams()
  
  const [product,setProduct]=useState({})

  const [color,setColor]=useState('')
  const [size,setSize]=useState('')


  useEffect(()=>{
    const fetchProduct=async()=>{
      try{
        const productData=await getProduct(searchParams.id)
        setProduct(productData)
        console.log('Product:',product)
      }catch(error){
        console.log('Get product error:',error)
      }
    }
    fetchProduct()
  },[])

  const getColorStyle = (color) => {
    return { backgroundColor: color.toLowerCase() };
  };
  return (
    

    <SafeAreaView className='relative'>
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
            product.images && product.images.length > 0 ? (product.images.map((url,index)=>(
              <View key={index}>
                <Image source={{uri:url}} 
                  className='w-full h-full'
                  resizeMode='cover'
                />
              </View>
            ))):<></>
          }
        </PagerView>
        <Text className='text-xl font-bold text-red-600 mt-2 mx-4'>{product.price}</Text>
        <Text className='text-base font-bold text-black mt-3 mx-4'>{product.name}</Text>
        <View>
          <Text className='text-base font-normal text-black mt-3 mx-4 mb-2'>Màu sắc</Text>
          <View className='flex flex-row items-center justify-start ml-4'>
            {
              product.sizes && product.sizes.length > 0 ? (product.colors.map((color,index)=>(
                <TouchableOpacity
                  key={index}
                  onPress={()=>setColor(color)}
                  className='flex flex-row items-center justify-center mr-3 rounded-xl w-14'
                >
                  <View
                    style={getColorStyle(color)}
                  className={`w-10 h-10 rounded-full  `} />
                </TouchableOpacity>
              ))

              ):<></>
            }
          </View>
        </View>
        <View>
          <Text className='text-base font-normal text-black mt-3 mx-4 mb-2'>Kích thước</Text>
          <View className='flex flex-row items-center justify-start ml-4'>
            {
              product.sizes && product.sizes.length > 0 ? (product.sizes.map((size,index)=>(
                <TouchableOpacity
                  onPress={()=>setSize(size)}
                  className='flex flex-row items-center justify-center mr-3 rounded-xl border w-14'
                >
                  <Text className='text-base font-normal  text-black '>{size}</Text>
                </TouchableOpacity>
              ))

              ):<></>
            }
          </View>
        </View>
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
      <TouchableOpacity
        className='w-full mx-4 absolute bottom-0'
        onPress={() => {
          console.log('Add to cart:',product.id);
          console.log('Color:',color);
          console.log('Size:',size);
          handleAddCart(product.id,size,color)
        }
        }
      >
        <Text className='text-base font-bold text-white bg-red-600 rounded-xl text-center py-2 mx-4 mt-4'>Thêm vào giỏ hàng</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProductDetail