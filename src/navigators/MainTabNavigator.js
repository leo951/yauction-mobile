import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator } from "./MainStackNavigator";
import { AuthStackNavigator } from "./AuthStackNavigator";
import { LoginScreen } from "../Screens/LoginScreen"

const Tab = createBottomTabNavigator();

export function MainTabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Voiture" component={MainStackNavigator} initialParams={{ vehicle: "voiture" }} />
            <Tab.Screen name="Moto" component={MainStackNavigator} initialParams={{ vehicle: "moto" }} />
            <Tab.Screen name="Scooter" component={MainStackNavigator} initialParams={{ vehicle: "scooter" }} />
            <Tab.Screen name="Connexion" component={AuthStackNavigator} />
        </Tab.Navigator>
    );
};

