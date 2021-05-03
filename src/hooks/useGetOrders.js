import React from 'react'
import {UserContext} from '../contexts/UserContext';
import axios from 'axios';
import {BASE_URL} from '../config';

export function useGetOrders(endpoint, initialValue = []) {
    const {token} = React.useContext(UserContext);
    const [data, setData] = React.useState(initialValue);
  
    React.useEffect( () => {
      axios.get(`${BASE_URL}${endpoint}`, {
        headers: {
          Authorization: `${token}`
        }
      }).then(({data}) => {
        // setData(data.products)
        console.log(data)
      })
    }, [token, endpoint])
    return data
}