import {
  createNativeStackNavigator
} from '@react-navigation/native-stack'
import PinScreen from '../screen/PinScreen';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator()

export function PinNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PinScreen"
        component={PinScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
