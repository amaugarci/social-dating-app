/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { LoginNavigator } from './src/navigation/LoginNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useInitUser, userStore } from './src/module/user/UserStore';
import { MainNavigator } from './src/navigation/MainNavigator';
import { PinNavigator } from './src/navigation/PinNavigator'
import { observer } from 'mobx-react-lite';



export default App = () => {
  useInitUser();
  return (
    <NavigationContainer>
      <NavigatorSwitch />
    </NavigationContainer>
  );
};
const NavigatorSwitch = observer(() => {
  // console.log(userStore.user);
  if (!userStore.user || userStore.user.permission == 0) {   //auth funcc
    return <LoginNavigator />
  } else if (userStore.user.permission == 1) {
    return <PinNavigator />
  } else {
    return <MainNavigator />
  }
})
