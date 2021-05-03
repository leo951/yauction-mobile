import React from 'react';
import axios from 'axios';
import { BASE_URL } from '../config';
import { createAction } from '../utils/createAction';
import { sleep } from '../utils/sleep';
// import SecureStorage from 'react-native-secure-storage';
// import AsyncStorage from 'react-native';


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
            loading: true,
		}
	);
	const auth = React.useMemo(
		() => ({
			login: async (email, password) => {
				console.log('login', email, password);
				// console.log("Je suis data",data);

				// await sleep( 2000);

				const { data } = await axios.post(
					`${BASE_URL}users/login`,
					{
						email: email,
						password
					}
				);
				console.log('Je suis data', data);
				const user = {
					email: email,
					token: data.token
				};
                // await SecureStorage.setItem('user', JSON.stringify(user));
				dispatch(createAction('SET_USER', user));
				console.log('Je suis result', result);
			},
			logout: async () => {
                // await SecureStorage.removeItem('user')
				dispatch(createAction('REMOVE_USER'));
				console.log('logout');
			},
			register: async (email, password) => {
				await sleep(2000);
				await axios
					.post(`${BASE_URL}users`, {
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
						console.log(response.data.token);
						console.log('La creation de user a fonctionné');
						token = response.data.token;
					})
					.catch((error) => {
						// Handle error.
						console.log('An error occurred:', error.response);
						console.log('La creation de user ne fonctionne pas');
					});
			}
		}),
		[]
	);
    // React.useEffect( () => {
    //     SecureStorage.getItem('user').then(user => {
    //         console.log('user', user)
    //         if (user) {
	// 		    dispatch(createAction('SET_USER', JSON.parse(user)));
    //         }
    //     })
    // }, [])
	return { auth, state };
}
