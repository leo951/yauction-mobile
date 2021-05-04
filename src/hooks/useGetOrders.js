import React from 'react'
import {UserContext} from '../contexts/UserContext';
import axios from 'axios';
import { VUE_APP_API_URL } from "@env"

export function useGetOrders(endpoint, initialValue = []) {
    const {token} = React.useContext(UserContext);
    const [data, setData] = React.useState(initialValue);
  
    React.useEffect( () => {
      axios.get(`${VUE_APP_API_URL}${endpoint}`, {
        headers: {
          Authorization: `${token}`
        }
      }).then(({data}) => {
        // setData(data.products)
      })
    }, [token, endpoint])
    return data
}