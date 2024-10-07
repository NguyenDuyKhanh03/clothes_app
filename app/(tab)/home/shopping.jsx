import { View, Text, Image, ImageBackground, FlatList, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButtonSearch from '../../../components/CustomButtonSearch'
import icons from "../../../constants/icons"
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import PagerView from 'react-native-pager-view'
import ProductItem from '../../../components/ProductItem'
import GridPage from '../../../components/GridPage'
import {width} from '../../../utils/Scaling'
import { router } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from 'expo-router'
import { handleGetProduct } from '../../../services/ProductService'
import { handleAddCart } from '../../../services/CartService'

const categories=[
  {
    id:1,
    name:"Áo sơ mi",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:2,
    name:"Áo thun",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362063/cate_aothun_xloqbw.png"
  },
  {
    id:3,
    name:"Quần Short",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362063/cate_quanshort_aukca7.png"
  },
  {
    id:4,
    name:"Áo Tees",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362063/cate_aotees_q3vsmu.png"
  },
  {
    id:5,
    name:"Áo khoác",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362673/cate_aokhoac_u9fzqt.png"
  },
  {
    id:6,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362673/cate_quantay_bpta7v.png"
  },
  {
    id:7,
    name:"Quần short",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362674/cate_quanshortdibien_ncftj4.png"
  },
  {
    id:8,
    name:"Quần short",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727362674/cate_quanshortthethao_bcjeoq.png"
  },
  {
    id:9,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:10,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:11,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:12,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:13,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:14,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:15,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:16,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:17,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:18,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:19,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
  {
    id:20,
    name:"Quần tây",
    url:"https://res.cloudinary.com/dkzvrtfvc/image/upload/v1727348925/category_aonam_s4dujo.png"
  },
]

const Shopping = () => {

  const [products, setProducts] = useState([])
  const Navigation=useNavigation()

  const [categoryIndex, setCategoryIndex] = useState(1)

  const chunkData = (data, itemsPerPage) => {
    const chunkedData = [];
    for(let i=0;i<data.length;i+=itemsPerPage){
      chunkedData.push(data.slice(i,i+itemsPerPage))
    }
    return chunkedData
  }

  const itemsPerPage = 12; 
  const pages = chunkData(categories, itemsPerPage);


  useEffect(() => {
    const fetchProduct = async () => {
      const productData=await handleGetProduct();
      if(productData){
        setProducts(productData);
        console.log('ProductsA:', productData);
      }
    }
    fetchProduct();
  },[]);
  return (

    <LinearGradient
      colors={['#00669991', '#E5EFF5']}
      locations={[0.36,1]}
    >
      
      <SafeAreaView className='w-full h-full '>

        <ImageBackground
          
        >
          <View className='flex flex-row mx-2 mt-2 items-center'>
            <TouchableOpacity
              className='mr-3'
            >
              <Image
                source={icons.ic_heart}
                className='w-6 h-6  '
                resizeMode='contain'
              />
            </TouchableOpacity>
            <CustomButtonSearch
              value="Shopping"
              icon={icons.ic_search}
              containerStyles="flex-1 mr-3"
            />
            <TouchableOpacity
              activeOpacity={1}
              onPress={()=>router.push('../../cart')}
            >
              <Image
                source={icons.ic_cart}
                className='w-7 h-6'
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className='my-3 mx-2'
          >
            {categories.map((item)=>(
              <View 
                key={item.id.toString()}
                className='px-2 py-2'
              >
                <TouchableOpacity
                  onPress={()=>{
                    setCategoryIndex(item.id)
                    console.log(categoryIndex+" "+item.id)
                  }}
                > 
                  <Text className='text-white'>{item.name}</Text>
                  {item.id === categoryIndex ? (<View className={`w-[${item.name.length*8}] h-1 bg-white`}></View>) : <></>}
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </ImageBackground>
        

        <FlatList
          data={products}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductItem
              url={item.images[0]}
              name={item.name}
              price={item.price}
              discountRate={item.discountRate}
              onPressPro={()=>Navigation.navigate('product_detail',{id:item.id})}
              onPressAddCart={()=>handleAddCart(item.id)}
              containerStyles={['ml-[11px] shadow-[8px_8px_24px_0px_rgba(0,_0,_0,_0.10)]',{width:width/2-20}]}
            />
          )}
          ListHeaderComponent={() => (
            <>
              <PagerView
                className='h-80 bg-white'
                style={{ width:width }}
                initialPage={0}
              >
                {pages.map((page, index) => (
                  <GridPage
                    key={index}
                    data={page}
                  />
                ))}
              </PagerView>
            </>
          )}

          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Shopping
