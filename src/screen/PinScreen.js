
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path } from "react-native-svg";
import Keyboard from '../components/Keyboard';
import { User } from '../module/user/User'
import { userStore } from '../module/user/UserStore'


export default function PinScreen({ navigation }) {
  const [pins, setPins] = useState([]);
  function addPin(val) {
    if (pins.length < 4) {
      setPins([...pins, val]);
      if (pins.length == 3) {
        IsOk();
      }
    }

  }
  function IsOk() {
    pinLogin();
  }
  const goBack = () => {
    userStore.logout();
  }
  const pinLogin = () => {
    // if (email === '') {
    //   Alert.alert('Warning', 'Please input Login');
    //   return;
    // }
    // if (password === '') {
    //   Alert.alert('Warning', 'Please input password');
    //   return;
    // }
    const loginResponse = {
      ...userStore.user,
      userId: userStore.user.id,
      permission: 2,
    }

    const user = User.fromJson(loginResponse, loginResponse.email)
    userStore.setUser(user);
  }
  function delPin(val) {
    const mid = [...pins];
    mid.pop();
    setPins(mid);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Svg
          width={22}
          height={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M20.333 8.667H4.52l4.84-5.814a1.335 1.335 0 1 0-2.053-1.706l-6.667 8c-.045.063-.085.13-.12.2 0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173.035.07.075.137.12.2l6.667 8a1.333 1.333 0 0 0 1.026.48 1.333 1.333 0 0 0 1.027-2.186l-4.84-5.814h15.813a1.333 1.333 0 1 0 0-2.666Z"
            fill="#fff"
          />
        </Svg>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>
          Enter PIN
        </Text>
        <Text style={styles.subtitle}>
          Please enter your PIN to proceed
        </Text>
      </View>
      <View style={styles.pingroup}>
        <Text style={[styles.pin, { backgroundColor: (pins.length > 0 ? theme.colors.whiteColor : theme.colors.greytextColor) }]}>{pins.length > 0 ? "•" : ""}</Text>
        <Text style={[styles.pin, { backgroundColor: (pins.length > 1 ? theme.colors.whiteColor : theme.colors.greytextColor) }]}>{pins.length > 1 ? "•" : ""}</Text>
        <Text style={[styles.pin, { backgroundColor: (pins.length > 2 ? theme.colors.whiteColor : theme.colors.greytextColor) }]}>{pins.length > 2 ? "•" : ""}</Text>
        <Text style={[styles.pin, { backgroundColor: (pins.length > 3 ? theme.colors.whiteColor : theme.colors.greytextColor) }]}>{pins.length > 3 ? "•" : ""}</Text>
      </View>
      <Keyboard add={addPin} del={delPin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: 19,
    paddingVertical: 45
  },
  header: {
    textAlign: 'center',
    marginVertical: 40
  },
  title: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    fontWeight: theme.fontWeight.bold,
    marginBottom: 20
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.small,
    opacity: 0.66,
    letterSpacing: 1.5,

  },
  pingroup: {
    paddingHorizontal: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 'auto'
  },
  pin: {
    width: 46,
    height: 54,
    backgroundColor: theme.colors.whiteColor,
    color: theme.colors.backgroundColor,
    fontSize: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: -15,
  }
});
