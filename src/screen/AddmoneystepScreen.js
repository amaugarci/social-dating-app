
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path } from "react-native-svg"
import Keyboard from '../components/Keyboard';
import Button from '../components/Button';

export default function AddmoneystepScreen({ navigation }) {
  const [val, setVal] = useState(20);
  function addPin(mon) {
    const mid = val + mon;
    setVal(mid);
  }
  function delPin() {
    const mid = val.toString().slice(0, -1);
    setVal(mid);
  }
  return (
    <View style={styles.container} >
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
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
          <Text style={styles.text}>
            Add Money
          </Text>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
        </View>
        <TouchableOpacity style={styles.cashwallet}>
          <Text style={styles.cahshtext}>Cash Wallet</Text>
          <Svg
            width={15}
            height={9}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M.311 1.211c.2-.191.47-.299.751-.299.282 0 .552.108.751.3l5.26 5.053 5.26-5.054c.2-.186.468-.289.747-.286.278.002.545.11.742.299.197.189.308.445.31.713a1 1 0 0 1-.297.718L7.824 8.43c-.2.191-.47.299-.751.299-.282 0-.552-.108-.751-.3L.312 2.656A1.001 1.001 0 0 1 0 1.933c0-.27.112-.53.311-.722Z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.currentmoney}>
          ${val}.00
        </Text>
        <Text style={styles.subtitle}>
          Wallet balance after transaction: $405.00
        </Text>
        <Button onPress={() => { navigation.navigate('TransactioncompScreen'); }} color={theme.colors.backgroundColor} style={styles.Sign}>
          <Text style={styles.bttext}>
            Add Money
          </Text>
        </Button>
        <Keyboard add={addPin} del={delPin} />
      </ScrollView>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  text: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  cashwallet: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cahshtext: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal,
    marginRight: 10,
  },
  currentmoney: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.thickyellowColor,
    fontSize: theme.fontSize.title01,
    fontWeight: theme.fontWeight.normal,
  },
  subtitle: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.small,
    opacity: 0.66,
    letterSpacing: 1.5
  },
  Sign: {
    backgroundColor: theme.colors.yellowtextColor,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bttext: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
  },
});
