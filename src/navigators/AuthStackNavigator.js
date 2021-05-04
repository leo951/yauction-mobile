import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//importer des components
import { LoginScreen } from '../Screens/LoginScreen';
import { RegistrationScreen } from '../Screens/RegistrationScreen';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
	return (
		<AuthStack.Navigator
			mode={'modal'}
			screenOptions={{
				headerShown: false
			}}
		>
			<AuthStack.Screen name={'Login'} component={LoginScreen} />
			<AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
		</AuthStack.Navigator>
	);
}

export default function App() {
	return <RegistrationScreen />;
}
