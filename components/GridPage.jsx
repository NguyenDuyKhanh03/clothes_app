import { View, Text,FlatList } from 'react-native'
import React from 'react'
import Category from "./category"

const GridPage = ({data}) => {
  return (
    <View className='w-full justify-center items-center'>
      <FlatList
        contentContainerStyle={[
          {  alignItems: 'center', flexGrow: 1,marginBottom:8 }, 
        ]}
        data={data}
        numColumns={4}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item,index})=>(
          <Category
            image={item.url}
            name={item.name}
            containerStyles={[
              'mr-6 ml-1 mb-2 mt-2'
            ]}
            onPress={()=>{
              console.log(item.name)
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        howsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      /> 
    </View>
  )
}

export default GridPage