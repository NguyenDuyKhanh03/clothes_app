import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import icons from "../constants/icons"
import OrderItem from '../components/OrderItem'
import { router } from 'expo-router'
import OrderItem1 from '../components/OrderItem1'
import { fetchCartItems } from '../services/CartService'
import { orderReducer } from '../reducer/orderReducer'



const initState={
    'orderItems':[],
    totalPrice:0
}

const INCREASE_QUANTITY='increateQuantity'
const DECREASE_QUANTITY='decreaseQuantity'

const orders = [
    {
        id: 1,
        url: 'https://i.pinimg.com/564x/5e/0c/dd/5e0cdd3800cea7f8a6d66aecb1649a7c.jpg',
        proName: 'Abstract Art',
        proPrice: 100,
        quantity: 4,
        size: 'M',
        color: 'Black',
    },
]

const Checkout = () => {

    const [state,dispatch]=useReducer(orderReducer,initState)

    useEffect(()=>{
        fetchCartItems(dispatch)
    },[])

    return (
        <SafeAreaView className='w-full h-full bg-white  '>
            <View className='flex flex-row w-full items-center bg-white'>
                <TouchableOpacity
                    onPress={() => router.back()}
                    className='w-10 h-10 ml-2 items-center justify-center'
                >
                    <Image
                        source={icons.ic_arrow_left}
                        className="w-6 h-6  "
                        resizeMode='contain'
                    />
                </TouchableOpacity>
                <Text className='flex-1 text-base font-bold text-black items-center absolute left-28'>Bảo đảm vận chuyển an toàn</Text>
            </View>
            <View className='flex-1 bg-[#f4f4f4]'>
                <TouchableOpacity
                    activeOpacity={0.8}
                    className='mt-4 p-2 bg-white rounded-lg'
                >
                    <View className='flex flex-row'>
                        <View className='flex flex-row mr-2'>
                            <Image
                                source={icons.ic_locate}
                                className='w-5 h-5 mr-2'
                                resizeMode='contain'
                            />
                            <Text className='text-[#27272780] text-base'>Nguyễn Văn A</Text>
                        </View>
                        <Text>0373886032</Text>
                    </View>
                    <Text className='text-[#27272780] text-base'>219/26 đường số 5</Text>
                    <Text className='text-[#27272780] text-base'>Phường 8, Quận Gò Vấp, Thành phố Hồ Chí Minh</Text>
                </TouchableOpacity>
                <View className='bg-white mt-2'>
                    <Text className=' mx-4  my-3 text-black font-semibold text-xl'>Đặt hàng các mặt hàng</Text>

                    {state.orderItems.length == 1 &&(
                        <OrderItem
                            url={state.orderItems[0].url}
                            proName={state.orderItems[0].productName}
                            proPrice={state.orderItems[0].price}
                            quantity={state.orderItems[0].quantity}
                            size={state.orderItems[0].size}
                            color={state.orderItems[0].color}
                            containerStyles='mb-2 mx-4'
                        />
                    )}
                    {state.orderItems.length > 1 &&(
                        <FlatList
                            data={state.orderItems}
                            keyExtractor={(item) => item.productId.toString()}
                            renderItem={({ item }) => (
                                <OrderItem1
                                    url={item.url}
                                    proPrice={item.price}
                                    quantity={item.quantity}
                                    containerStyles='ml-2'
                                />

                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    )}

                </View>
                <View className='bg-white h-40 mt-2'>
                    <View className='flex flex-row justify-between mt-2 mx-4 mb-4'>
                        <Text className='text-sm font-normal'>Giá bán lẻ</Text>
                        <Text className='text-base font-normal'>281.000đ</Text>
                    </View>
                    <View className='flex flex-row justify-between  mx-4 mb-4'>
                        <Text className='text-sm font-normal'>Tổng phụ</Text>
                        <Text className='text-base font-normal'>121.000đ</Text>
                    </View>
                    <View className='flex flex-row justify-between mx-4 mb-4'>
                        <Text className='text-sm font-normal'>Phí vận chuyển</Text>
                        <Text className='text-base font-normal'>FREE</Text>
                    </View>
                    <View className='flex flex-row justify-between items-center mx-4'>
                        <Text className='text-sm font-normal'>Tổng số đơn hàng</Text>
                        <Text className='text-xl text-red-500'>121.000đ</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Checkout