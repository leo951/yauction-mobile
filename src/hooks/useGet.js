import React from 'react'
// import {UserContext} from '../contexts/UserContext';
import axios from 'axios';
import { VUE_APP_API_URL } from "@env"
import AsyncStorage from '@react-native-community/async-storage';

const getItem = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    return result;
  } catch (error) {
    console.log(error);
  }
}
export function useGet(endpoint, initialValue = []) {
    var token = "";
    const [data, setData] = React.useState(initialValue);
    getItem('token').then((data) => {
      token = data
    })
    React.useEffect( () => {
      axios.get(`${VUE_APP_API_URL}${endpoint}`, {
        headers: {
          Authorization: token
        }
      }).then(({data}) => {
        setData(data.products)
      })
    }, [token, endpoint])
    return data
}
export function useGetOne(endpoint, initialValue = []) {
  const [data, setData] = React.useState(initialValue);
  React.useEffect( () => {
    axios.get(`${VUE_APP_API_URL}${endpoint}`, {
    }).then(({data}) => {
      setData(data.product)
    })
  }, [endpoint])
  return data
}