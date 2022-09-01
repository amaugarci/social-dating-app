
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg";
import PaymentAddCard from './PaymentAddCard';

export default function PaymentAdd({ navigation }) {
  const data = [
    { id: 1, name: 'Credit or Debit Card' },
    { id: 2, name: 'Bank Account' },
    { id: 3, name: 'Crypto Account' },
  ]
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { }} style={{ paddingHorizontal: 19, }}>
          <Svg
            width={14}
            height={16}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M13.73 14.03a1.097 1.097 0 0 1-.15 1.583 1.19 1.19 0 0 1-.745.261 1.18 1.18 0 0 1-.897-.405L7 9.726 2.063 15.44c-.23.267-.562.405-.896.405a1.19 1.19 0 0 1-.746-.26 1.097 1.097 0 0 1-.15-1.585l5.21-6.03-5.21-5.998A1.097 1.097 0 0 1 .42.387 1.194 1.194 0 0 1 2.063.53L7 6.242 11.936.53A1.196 1.196 0 0 1 13.58.385c.495.398.562 1.107.15 1.585l-5.21 6.029 5.211 6.03Z"
              fill="#121244"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.text}>
          Add New Payment Method
        </Text>
      </View>
      <FlatList style={styles.list}
        data={data}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={(list) => {
          const item = list.item;
          return (
            <PaymentAddCard item={item} />
          )
        }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.colors.whiteColor,
    paddingTop: 45
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  footer: {
    bottom: 0,
    paddingBottom: 40,
    width: '100%',
    backgroundColor: theme.colors.whiteColor,
    paddingHorizontal: 30,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
  },
  mannual: {
    borderColor: theme.colors.yellowtextColor,
    backgroundColor: theme.colors.yellowtextColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  bttext: {
    color: theme.colors.backgroundColor,
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
  },
  Sign: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  checktext: {
    color: theme.colors.thickyellowColor,

  },
  check: {
    backgroundColor: theme.colors.thickyellowColor,
    width: 25,
    height: 25,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  uncheck: {
    borderColor: theme.colors.thickyellowColor,
    width: 25,
    height: 25,
    borderRadius: 25,
    borderWidth: 2
  }
});
