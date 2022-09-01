import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path, Circle } from "react-native-svg"
import { theme } from '../core/theme';
import React, { useState } from 'react';
import SplashScreen from '../screen/SplashScreen';
import HomeScreen from '../screen/HomeScreen';
import AddmoneyScreen from '../screen/AddmoneyScreen';
import TransferScreen from '../screen/TransferScreen';
import AddmoneystepScreen from '../screen/AddmoneystepScreen';
import TransactioncompScreen from '../screen/TransactioncompScreen';
import TransfertoScreen from '../screen/TransfertoScreen';
import TransactionhistoryScreen from '../screen/TransactionhistoryScreen';
import ProfileScreen from '../screen/ProfileScreen';
import ProfileeditScreen from '../screen/ProfileeditScreen';
import WalletnumberScreen from '../screen/WalletnumberScreen';
import PrivacyScreen from '../screen/PrivacyScreen';
import ChangepasswordScreen from '../screen/ChangepasswordScreen';
import ChangepinScreen from '../screen/ChangepinScreen';
import HelpScreen from '../screen/HelpScreen';
import PaymentScreen from '../screen/PaymentScreen';
import SendMoneyScreen from '../screen/SendMoneyScreen';
import ContactScreen from '../screen/ContactScreen';
import CryptoScreen from '../screen/CryptoScreen';
import QrcodeScreen from '../screen/QrcodeScreen';
import SatisticsScreen from '../screen/SatisticsScreen';


const Stack = createNativeStackNavigator()

export function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MaineScreen"
        component={MaineScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddmoneyScreen"
        component={AddmoneyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WalletnumberScreen"
        component={WalletnumberScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransferScreen"
        component={TransferScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddmoneystepScreen"
        component={AddmoneystepScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HelpScreen"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileeditScreen"
        component={ProfileeditScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactioncompScreen"
        component={TransactioncompScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransfertoScreen"
        component={TransfertoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TransactionhistoryScreen"
        component={TransactionhistoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SendMoneyScreen"
        component={SendMoneyScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function MaineScreen() {
  const [index, setIndex] = useState(0);
  const [num, setNumber] = useState(0);
  const onChnage = (val) => {
    if (num == val) {
      setNumber(0);
    }
    else {
      setNumber(val);
    }
  }
  const ChangeHomeScreen = props => {
    switch (num) {
      case 0: return <HomeScreen {...props} onView={(num) => { onChnage(num) }} />
      case 1: return <TransactionhistoryScreen {...props} onView={(num) => { onChnage(num) }} />
      case 2: return <CryptoScreen {...props} onView={(num) => { onChnage(num) }} />
    }
  }
  return (
    <Tab.Navigator
      screenListeners={{
        state: (e) => {
          setIndex(e.data.state.index);
          setNumber(0);
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.inactive,
        tabBarStyle: {
          height: 80,
          backgroundColor: theme.colors.backgroundColor,
          borderWidth: 0
        }
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={ChangeHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={index == 0 ? styles.active : ''}>
              <Svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M19.585 9.84 11.061.818 10.49.214A.676.676 0 0 0 10 0a.676.676 0 0 0-.49.214L.415 9.839c-.134.141-.239.309-.31.493a1.57 1.57 0 0 0-.105.582c.009.822.655 1.478 1.432 1.478h.937V20h15.262v-7.608h.957c.377 0 .732-.156 1-.439.13-.138.235-.303.306-.485a1.56 1.56 0 0 0 .106-.573c0-.397-.148-.773-.415-1.056Zm-8.35 8.478h-2.47v-4.765h2.47v4.765Zm4.807-7.607v7.607h-3.395v-5.325c0-.517-.395-.935-.882-.935h-3.53c-.487 0-.882.418-.882.935v5.325H3.958v-7.607H1.84l8.162-8.636.51.54 7.65 8.096h-2.12Z"
                  fill={color}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SatisticsScreen"
        component={SatisticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={index == 1 ? styles.active : ''}>
              <Svg
                width={20}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M4.545 10.91H.91a.91.91 0 0 0-.909.908v7.273A.91.91 0 0 0 .91 20h3.635a.91.91 0 0 0 .91-.91v-7.272a.909.909 0 0 0-.91-.909Zm-.909 7.272H1.818v-5.455h1.818v5.455Zm15.455-10.91h-3.637a.91.91 0 0 0-.909.91V19.09a.909.909 0 0 0 .91.909h3.636a.909.909 0 0 0 .909-.91V8.183a.91.91 0 0 0-.91-.91Zm-.91 10.91h-1.817V9.09h1.818v9.09ZM11.819 0H8.182a.91.91 0 0 0-.91.91v18.18a.91.91 0 0 0 .91.91h3.636a.909.909 0 0 0 .91-.91V.91a.91.91 0 0 0-.91-.91Zm-.909 18.182H9.091V1.818h1.818v16.364Z"
                  fill={color}
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="QrcodeScreen"
        component={QrcodeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.scan}>
              <Svg
                width={59}
                height={59}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Circle cx={29.5} cy={29.5} r={29.5} fill="#EFEFEF" />
                <Path
                  d="M18.117 25.625h1.695a.243.243 0 0 0 .243-.242v-5.328h5.328a.243.243 0 0 0 .242-.242v-1.696a.243.243 0 0 0-.242-.242h-5.45c-1.138 0-2.058.92-2.058 2.059v5.449c0 .133.109.242.242.242Zm15.5-5.57h5.328v5.328c0 .133.11.242.242.242h1.696a.243.243 0 0 0 .242-.242v-5.45c0-1.138-.92-2.058-2.059-2.058h-5.449a.243.243 0 0 0-.242.242v1.695c0 .134.109.243.242.243Zm-8.234 18.89h-5.328v-5.328a.243.243 0 0 0-.242-.242h-1.696a.243.243 0 0 0-.242.242v5.45c0 1.138.92 2.058 2.059 2.058h5.449a.243.243 0 0 0 .242-.242v-1.696a.243.243 0 0 0-.242-.242Zm15.5-5.57h-1.696a.243.243 0 0 0-.242.242v5.328h-5.328a.243.243 0 0 0-.242.242v1.696c0 .133.109.242.242.242h5.45c1.138 0 2.058-.92 2.058-2.059v-5.449a.243.243 0 0 0-.242-.242Zm.484-4.965H17.633a.243.243 0 0 0-.242.242v1.696c0 .133.109.242.242.242h23.734a.243.243 0 0 0 .242-.242v-1.696a.243.243 0 0 0-.242-.242Z"
                  fill="#242424"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={index == 3 ? styles.active : ''}>
              <Svg
                width={22}
                height={20}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M6 1C3.239 1 1 3.216 1 5.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C20.125 13.395 21 8.157 21 5.95 21 3.216 18.761 1 16 1s-5 3-5 3-2.239-3-5-3Z"
                  stroke={color}
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={index == 4 ? styles.active : ''}>
              <Svg
                width={28}
                height={28}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M23.625 14.665v-1.339l1.68-1.47a1.75 1.75 0 0 0 .333-2.231l-2.065-3.5a1.75 1.75 0 0 0-1.514-.875 1.75 1.75 0 0 0-.56.087l-2.126.718a9.926 9.926 0 0 0-1.147-.656l-.446-2.205a1.75 1.75 0 0 0-1.75-1.409h-4.095a1.75 1.75 0 0 0-1.75 1.409L9.74 5.399c-.4.193-.785.412-1.155.656L6.5 5.302a1.75 1.75 0 0 0-.56-.052 1.75 1.75 0 0 0-1.513.875l-2.065 3.5a1.75 1.75 0 0 0 .358 2.196l1.654 1.514v1.339l-1.654 1.47a1.75 1.75 0 0 0-.358 2.231l2.065 3.5a1.75 1.75 0 0 0 1.513.875c.19.001.38-.028.56-.087l2.127-.718c.367.244.75.463 1.146.656l.446 2.205a1.75 1.75 0 0 0 1.75 1.409h4.13a1.75 1.75 0 0 0 1.75-1.409l.446-2.205c.4-.193.785-.412 1.155-.656l2.118.718c.18.059.37.088.56.087a1.75 1.75 0 0 0 1.514-.875l1.995-3.5a1.75 1.75 0 0 0-.36-2.196l-1.653-1.514ZM22.06 21l-3.001-1.015a7.75 7.75 0 0 1-2.372 1.374l-.62 3.141h-4.13l-.622-3.106A8.188 8.188 0 0 1 8.95 20.02l-3.01.98-2.065-3.5 2.38-2.1a7.788 7.788 0 0 1 0-2.739L3.876 10.5 5.941 7l3.002 1.015a7.752 7.752 0 0 1 2.37-1.374l.622-3.141h4.13l.621 3.106A8.19 8.19 0 0 1 19.05 7.98l3.01-.98 2.065 3.5-2.38 2.1a7.791 7.791 0 0 1 0 2.739l2.38 2.161-2.065 3.5Z"
                  fill={color}
                />
                <Path
                  d="M14 19.25A5.25 5.25 0 1 1 19.25 14 5.2 5.2 0 0 1 14 19.25Zm0-8.75a3.42 3.42 0 0 0-3.5 3.5 3.42 3.42 0 0 0 3.5 3.5 3.42 3.42 0 0 0 3.5-3.5 3.42 3.42 0 0 0-3.5-3.5Z"
                  fill={color}
                />
              </Svg>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  active: {
    height: 70,
    backgroundColor: theme.colors.bottomColor,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginBottom: 10,
    borderTopWidth: 5,
    borderTopColor: theme.colors.whiteColor
  },
  scan: {
    position: 'absolute',
    top: -25,
  }
});
