import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen'
import React from 'react';
import DashboardScreen from '../screen/DashboardScreen'
import LoginScreen from '../screen/LoginScreen'
import SignupScreen from '../screen/SignupScreen'
import LinkbankScreen from '../screen/LinkbankScreen'
import LinkbankLoginScreen from '../screen/LinkbankLoginScreen'
import WelcomeScreen from '../screen/WelcomeScreen'
import SelectaccountScreen from '../screen/SelectaccountScreen';
import KycScreen from '../screen/KycScreen'
const Stack = createNativeStackNavigator()

export function LoginNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DashboardScreen"
                component={DashboardScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="KycScreen"
                component={KycScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SelectaccountScreen"
                component={SelectaccountScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignupScreen"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LinkbankScreen"
                component={LinkbankScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LinkbankLoginScreen"
                component={LinkbankLoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
