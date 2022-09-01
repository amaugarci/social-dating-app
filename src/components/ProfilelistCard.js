import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { User } from '../module/user/User'
import { userStore } from '../module/user/UserStore'

export default function ProfilelistCard({ item, navigation }) {
  const onpress = () => {
    switch (item.id) {
      case 1: navigation.navigate('ProfileeditScreen'); break;
      case 2: navigation.navigate('PaymentScreen'); break;
      case 3: navigation.navigate('WalletnumberScreen'); break;
      case 4: navigation.navigate('PrivacyScreen'); break;
      case 5: navigation.navigate('HelpScreen'); break;
      default: logout(); break;
    }
  };
  const logout = () => {
    userStore.logout();
  }
  var icon;
  switch (item.id) {
    case 1: icon = require('../assets/profile/profile.png'); break;
    case 2: icon = require('../assets/profile/payment.png'); break;
    case 3: icon = require('../assets/profile/wallet.png'); break;
    case 4: icon = require('../assets/profile/privacy.png'); break;
    case 5: icon = require('../assets/profile/help.png'); break;
    default: icon = require('../assets/profile/logout.png'); break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={icon} />
        <TouchableOpacity onPress={onpress}>
          <Text style={styles.name}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.underline}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  avatar: {
    width: 20,
    height: 20,
  },
  row: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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
    marginTop: 5,
    marginLeft: 20,
    backgroundColor: theme.colors.underlineColor,
    height: 1,
  }
})