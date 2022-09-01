import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

export default function ProfileCard({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.border}>
          <Image style={styles.avatar} source={require('../assets/avatar.jpg')} />
        </View>
        <View style={styles.properity}>
          <Text style={styles.name}>
            {item.name}
          </Text>
          <Text style={styles.nickname}>
            {item.nickname}
          </Text>
          <Text style={styles.nickname}>
            {item.phone}
          </Text>
          <Text style={styles.nickname}>
            {item.email}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    height: 200,
    borderRadius: 10,
    backgroundColor: theme.colors.backgroundColor,
    justifyContent: 'center'
  },
  border: {
    backgroundColor: theme.colors.backgroundColor,
    borderColor: theme.colors.borderColor,
    borderWidth: 2,
    borderStyle: 'dotted',
    padding: 4,
    borderRadius: 80,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  row: {
    marginVertical: 'auto',
    marginHorizontal: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  properity: {

    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
  },
  name: {
    color: theme.colors.whiteColor,
    marginVertical: 2,
    fontSize: theme.fontSize.subtitle01,
    fontWeight: theme.fontWeight.normal,
  },
  nickname: {
    color: theme.colors.whiteColor,
    marginVertical: 2,
    fontSize: theme.fontSize.smallSize,
    fontWeight: theme.fontWeight.normal,
    opacity: 0.66,
    letterSpacing: 1.5
  },
})