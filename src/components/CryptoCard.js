import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { theme } from '../core/theme'

export default function CryptoCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatergroup}>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
          <View style={styles.dategroup}>
            <Text style={styles.date}>
              {item.name}
            </Text>
          </View>
        </View>
        <Text style={styles.money}>
          ${item.money}
        </Text>
        <Text style={styles.percent}>
          {item.percent}%
        </Text>
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
    width: 40,
    height: 40,
    borderRadius: 50
  },
  row: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  avatergroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: theme.colors.underlineColor,
    height: 1,
  },
  percent: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(41, 161, 39, 0.29)',
    borderRadius: 5,
    color: 'rgba(41, 161, 39, 1)'
  }
})