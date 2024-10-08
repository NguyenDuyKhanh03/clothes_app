import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeSetData= async (key,value) =>{
    try{
      await AsyncStorage.setItem(key,value)
    }catch(e){
      console.log('Error:',e)
    }
  }

export const storeGetData= async (key) =>{
    try{
      const value = await AsyncStorage.getItem(key)
      if(value !== null){
        return value;
      }
    }catch(e){
      console.log('Error:',e)
    }

  }