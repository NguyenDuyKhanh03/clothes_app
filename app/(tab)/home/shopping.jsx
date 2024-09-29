import { View, Text, Image, ImageBackground, FlatList} from 'react-native'
import React, { useState } from 'react'
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
const products=[
  {
    id:1,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    isBestseller:true,
    discountRate:'-20 %'
  },
  {
    id:2,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    sBestseller:true
  },
  {
    id:3,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:4,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:5,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:6,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:7,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:8,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  },
  {
    id:9,
    url:'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
    name:'Áo sơ mi trắng',
    price:'200.000đ',
    discountRate:'20%'
  }

]

const Shopping = () => {
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

  return (
    <SafeAreaView className='w-96 h-full bg-pink-400'>
      <ImageBackground
        
      >
        <View className='flex flex-row mx-2 mt-2'>
          <TouchableOpacity
            className='mr-3'
          >
            <Image
              source={icons.ic_heart}
              className='w-9 h-9 '
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
              className='w-9 h-9'
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
            url={item.url}
            name={item.name}
            price={item.price}
            discountRate={item.discountRate}
            containerStyles={{width:width/2-20}}
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
  )
}

export default Shopping