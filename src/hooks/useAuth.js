import React from 'react';
import axios from 'axios';
import { VUE_APP_API_URL } from "@env"
import { createAction } from '../utils/createAction';
import { sleep } from '../utils/sleep';
import AsyncStorage from '@react-native-community/async-storage';

export function useAuth() {
	const [ state, dispatch ] = React.useReducer(
		(state, action) => {
			switch (action.type) {
				case 'SET_USER':
					return {
						...state,
                        loading: false,
						user: { ...action.payload }
					};
				case 'REMOVE_USER':
					return {
						...state,
						user: undefined
					};
                    case 'SET_LOADING':
                        return {
                            ...state,
                            loading: action.payload,
                        }
				default:
					return state;
			}
		},
		{
			user: undefined,
            loading: false,
		}
	);
	const auth = React.useMemo(
		() => ({
			login: async (email, password) => {

				const { data } = await axios.post(
					`${VUE_APP_API_URL}users/login`,
					{
						email: email,
						password
					}
				);
				const user = {
					email: email,
					token: data.token
				};
                await AsyncStorage.setItem('token', data.token);
				dispatch(createAction('SET_USER', user));
			},
			logout: async () => {
				dispatch(createAction('REMOVE_USER'));
			},
			register: async (email, password) => {
				await sleep(2000);
				await axios
					.post(`${VUE_APP_API_URL}users`, {
						firstName: 'util',
						lastName: 'Mobile',
						email: email,
						password: password,
						phone: '0622151961',
						address: '5 rue du chapeau rouge',
						city: 'Sannois',
						postalCode: '95110',
						country: 'Pays'
					})
					.then((response) => {
						// Handle success.
						token = response.data.token
					})
					.catch((error) => {
						// Handle error.
					});
			}
		}),
		[]
	);
    // React.useEffect( () => {
    //     SecureStorage.getItem('user').then(user => {
    //         if (user) {
	// 		    dispatch(createAction('SET_USER', JSON.parse(user)));
    //         }
    //     })
    // }, [])
	return { auth, state };
}
