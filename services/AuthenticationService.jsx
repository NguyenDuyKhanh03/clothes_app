import axios from 'axios'
import { storeSetData } from './GetData';

export const handleLogin = async (email,password) => {
    console.log("Button pressed!");
    axios.post('http://192.168.2.29:8080/api/v1/auth/login', {
      email: email,
      password: password
    })
    .then(response => {
      const token = response.data.token;
      console.log('JWT Token:', token);
      storeSetData('token',token)
    })
    .catch(error => {
      console.log('Login error:', error);
    });
  };