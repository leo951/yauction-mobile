import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import jwt_decode from "jwt-decode";

// import { AuthStackNavigator } from './navigators/AuthStackNavigator';
import { lightTheme } from './themes/light';
import { AuthContext } from './contexts/AuthContext';
import { MainStackNavigator } from './navigators/MainStackNavigator';
import { MainTabNavigator } from './navigators/MainTabNavigator';
import { useAuth } from './hooks/useAuth';
// import { UserContext } from './contexts/UserContext';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { darkTheme } from './themes/dark';
import { ThemeContext } from './contexts/ThemeContext';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ProductsListScreen } from './Screens/ProductsListScreen';

const RootStack = createStackNavigator();

export default function () {
  const { auth, state } = useAuth();

  async function getItem(key) {
    try {
      const result = await AsyncStorage.getItem(key);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  var token = "";
  getItem('token').then((data) => {
    token = data
  })

  const renderScreens = () => {
    return (
      token == "" ? (
        <RootStack.Screen name={'Vehicule'} component={MainTabNavigator} />
      ) : (
        <RootStack.Screen name={'Login'} component={LoginScreen} />)
    );
  }

  return (
    <ThemeContext.Provider >
      <StatusBar />
      <AuthContext.Provider value={auth}>
        <NavigationContainer>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}