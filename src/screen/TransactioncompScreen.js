
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';

export default function TransactioncompScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack }} style={{ paddingHorizontal: 19, }}>
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
          Transaction Complete
        </Text>
      </View>
      <View style={{ justifyContent: 'center', display: 'flex', flex: 1 }}>
        <View style={styles.checkimg}>
          <Svg
            width={88}
            height={88}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx={44} cy={44} r={44} fill="#fff" />
            <Circle cx={44} cy={44} r={44} fill="#C6A15A" fillOpacity={0.47} />
            <Circle cx={44} cy={44} r={37} fill="#C6A15A" fillOpacity={0.74} />
            <Path
              d="m27.834 43.5 11.75 11.75 19.583-23.5"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Text style={styles.currentval}>
          You successfully added
        </Text>
        <Text style={styles.currentmoney}>
          $20.00
        </Text>
        <Text style={styles.currentval}>
          to your account
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.currentval}>
          Make another transaction?
        </Text>
        <View style={styles.buttons}>
          <Button onPress={() => { navigation.navigate('LoginScreen'); }} color={theme.colors.whiteColor} style={styles.mannual} >
            <Text style={[styles.bttext, { color: theme.colors.whiteColor }]}>
              Do it Later
            </Text>
          </Button>
          <Button onPress={() => { navigation.navigate('SignupScreen'); }} color={theme.colors.backgroundColor} style={[styles.Sign]}>
            <Text style={[styles.bttext, { paddingHorizontal: 50 }]}>
              Yes
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingTop: 45
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  checkimg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  currentval: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle01,
    fontWeight: theme.fontWeight.normal,
  },
  currentmoney: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.thickyellowColor,
    fontSize: theme.fontSize.title01,
    fontWeight: theme.fontWeight.normal,
  },
  footer: {
    bottom: 0,
    height: 240,
    paddingTop: 50,
    width: '100%',
    backgroundColor: theme.colors.bottomColor,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  Login: {
    borderColor: theme.colors.whiteColor,
    paddingVertical: 5,
  },
  mannual: {
    borderColor: theme.colors.whiteColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bttext: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
  },
  Sign: {
    backgroundColor: theme.colors.yellowtextColor,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
