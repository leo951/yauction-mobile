import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importer des components
import { ProductsListScreen } from '../Screens/ProductsListScreen'
import { DetailScreen } from '../Screens/DetailScreen'
import { LoginScreen } from '../Screens/LoginScreen'
import { Route } from 'react-router';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function MainStackNavigator({route}) {
	return (
		<Stack.Navigator independent={true}>
			<Stack.Screen name={'Voiture'} component={ProductsListScreen} initialParams={{ vehicle: route.params.vehicle }} />
			<Stack.Screen name={'Detail'} component={DetailScreen} />
		</Stack.Navigator>
	);
}
