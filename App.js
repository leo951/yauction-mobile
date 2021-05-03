import * as React from 'react';
import { Switch, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import axios from 'axios';

//importer des components

import { AuthStackNavigator } from './src/navigators/AuthStackNavigator';
import { AuthContext } from './src/contexts/AuthContext';
import { sleep } from './src/utils/sleep';
import { MainStackNavigator } from './src/navigators/MainStackNavigator';
import { useAuth } from './src/hooks/useAuth';
import { UserContext } from './src/contexts/UserContext';

const RootStack = createStackNavigator();

export default function() {
	const { auth, state } = useAuth();

	return (
		<AuthContext.Provider value={auth}>
			<NavigationContainer>
				<RootStack.Navigator
					screenOptions={{
						headerShown: false,
						animationEnabled: false
					}}
				>
					{state.user ? (
						  <RootStack.Screen 
              name={'MainStack'}
              >
                {
                  () => (
                    <UserContext.Provider value={state.user}>
                      <MainStackNavigator/>
                    </UserContext.Provider>
                  )
                }
              </RootStack.Screen>
					) : (
						<RootStack.Screen 
            name={'AuthStack'} 
            component={AuthStackNavigator} 
            />
					)}
					{/* <RootStack.Screen name={'MainStack'} component={MainStackNavigator} /> */}
				</RootStack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
}
