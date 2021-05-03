import * as React from 'react';
import { View, Text } from 'react-native';

// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//importer des components
import {ProductsListScreen} from '../Screens/ProductsListScreen'
import {OffersScreen} from '../Screens/OffersScreen'



const Tab = createBottomTabNavigator();
// const MainStack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator independent={true}>
 		<Tab.Screen name={'ProductsListScreen'} component={ProductsListScreen} />
 		<Tab.Screen name={'OffersScreen'} component={OffersScreen} />
    </Tab.Navigator>
  );
}

export function MainStackNavigator() {
	return (
	  <NavigationContainer independent={true}>
		<MyTabs />
	  </NavigationContainer>
	);
  }


// export function MainStackNavigator() {

// 	return (
// 		<MainStack.Navigator>
// 			<MainStack.Screen name={'ProductsListScreen'} component={ProductsListScreen} />
// 		</MainStack.Navigator>
// 	);
// }
