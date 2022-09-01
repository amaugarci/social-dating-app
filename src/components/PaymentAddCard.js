import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { theme } from '../core/theme'
import Svg, { Path } from "react-native-svg"

export default function PaymentAddCard({ item, navigation }) {
  const onpress = () => {
    // switch (item.id) {
    //   case 1: navigation.navigate('ProfileeditScreen'); break;
    //   case 2: navigation.navigate('PaymentScreen'); break;
    //   case 3: navigation.navigate('WalletnumberScreen'); break;
    //   case 4: navigation.navigate('PrivacyScreen'); break;
    //   case 5: navigation.navigate('HelpScreen'); break;
    //   default: logout(); break;
    // }
  };
  var icon;
  switch (item.id) {
    case 1: icon = require('../assets/payment/creditcard.png'); break;
    case 2: icon = require('../assets/payment/bank.png'); break;
    default: icon = require('../assets/payment/crypto.png'); break;
  }
  return (
    <View style={styles.container} onPress={onpress}>
      <TouchableOpacity style={[styles.row, { justifyContent: 'space-between' }]}>
        <View style={styles.row}>
          <View style={styles.avatarwrap}>
            <Image style={(item.id != 3 ? styles.avatar : styles.avatar1)} source={icon} />
          </View>
          <View>
            <Text style={styles.name}>
              {item.name}
            </Text>
          </View>
        </View>
        <Svg
          width={9}
          height={15}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M.313 13.823a1.063 1.063 0 0 1 .01-1.502l5.292-5.226L.39 1.803A1.063 1.063 0 0 1 1.9.31l5.973 6.049a1.062 1.062 0 0 1-.01 1.502l-6.049 5.972a1.063 1.063 0 0 1-1.502-.01Z"
            fill="#5C5C5C"
          />
        </Svg>
      </TouchableOpacity>
      <View style={styles.underline}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    paddingHorizontal: 25
  },
  avatarwrap: {
    width: 22,
    height: 20,
    borderRadius: 5,
    backgroundColor: theme.colors.yellowtextColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 16,
    height: 12,
  },
  avatar1: {
    width: 8,
    height: 11,
  },
  row: {
    marginVertical: 7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal,
    paddingLeft: 10,
  },
  date: {
    color: theme.colors.lightgreytextColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.normal
  },
  money: {
    color: theme.colors.lightgreytextColor,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal
  },
  underline: {
    marginTop: 1,
    marginLeft: 5,
    backgroundColor: theme.colors.underlineColor,
    height: 1,
  }
})