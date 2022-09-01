import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function HelpCard({ item }) {
  var icon;
  switch (item.avatar) {
    case 1: icon = require('../assets/email.png'); break;
    default: icon = require('../assets/phone.png'); break;
  }
  return (
    <View style={styles.container}>
      <View style={styles.avatergroup}>
        <View style={styles.avatercontainer}>
          <Image resizeMode='stretch' style={styles.avatar} source={icon} />
        </View>
        <View style={styles.dategroup}>
          <Text style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.date}>
            {item.email}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: theme.colors.whiteColor,
    padding: 14,
    borderRadius: 5
  },
  avatar: {
    width: 23,
    height: 15,
  },
  avatergroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatercontainer: {
    backgroundColor: theme.colors.yellowtextColor,
    borderRadius: 4,
    padding: 10
  },
  dategroup: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  name: {
    color: theme.colors.blackColor,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal
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
    marginTop: 10,
    backgroundColor: theme.colors.underlineColor,
    height: 1,
  }
})