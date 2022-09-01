import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { theme } from '../core/theme'

export default function HomeCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.avatergroup}>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
          <View style={styles.dategroup}>
            <Text style={styles.name}>
              {item.name}
            </Text>
            <Text style={styles.date}>
              {item.date}
            </Text>
          </View>
        </View>
        <Text style={styles.money}>
          ${item.money}
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
    width: 50,
    height: 50,
    borderRadius: 50
  },
  row: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    marginLeft: 60,
    backgroundColor: theme.colors.underlineColor,
    height: 1,
  }
})