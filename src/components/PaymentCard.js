import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function PaymentCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatergroup}>
        <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
        <View style={styles.dategroup}>
          <Text style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.date}>
            {item.bank}
          </Text>
        </View>
      </View>
      <View style={styles.underline}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  avatar: {
    width: 53,
    height: 37,
    borderRadius: 5
  },
  avatergroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
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