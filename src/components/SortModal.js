
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from './Button';

export default function SortModal({ sort, setSort, onPress }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { onPress() }} style={{ paddingHorizontal: 19, }}>
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
          Sort Transactions
        </Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 40, paddingVertical: 25, display: 'flex', justifyContent: 'space-around' }}>
        <TouchableOpacity style={styles.row} onPress={() => { setSort(true) }}>
          <Text style={(sort ? styles.checktext : styles.unchecktext)}>Newest First</Text>
          <View style={(!sort ? styles.uncheck : styles.check)}>
            {sort ? <Svg
              width={14}
              height={11}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.39.285A.932.932 0 0 1 13.058 0a.92.92 0 0 1 .666.285.99.99 0 0 1 .013 1.359L6.21 10.69a.933.933 0 0 1-.672.31.918.918 0 0 1-.683-.284L.275 5.997A.988.988 0 0 1 .58 4.415a.92.92 0 0 1 1.028.21l3.885 4.003L12.365.313a.307.307 0 0 1 .026-.028Z"
                fill="#EFEFEF"
              />
            </Svg> : <View></View>}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={() => { setSort(false) }}>
          <Text style={(!sort ? styles.checktext : styles.unchecktext)}>Oldest First</Text>
          <View style={(sort ? styles.uncheck : styles.check)}>
            {!sort ? <Svg
              width={14}
              height={11}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M12.39.285A.932.932 0 0 1 13.058 0a.92.92 0 0 1 .666.285.99.99 0 0 1 .013 1.359L6.21 10.69a.933.933 0 0 1-.672.31.918.918 0 0 1-.683-.284L.275 5.997A.988.988 0 0 1 .58 4.415a.92.92 0 0 1 1.028.21l3.885 4.003L12.365.313a.307.307 0 0 1 .026-.028Z"
                fill="#EFEFEF"
              />
            </Svg> : <View></View>}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Button onPress={() => { }} color={theme.colors.backgroundColor} style={[styles.mannual]}>
          <Text style={[styles.bttext, { paddingHorizontal: 50 }]}>
            Confirm
          </Text>
        </Button>
      </View>
    </View >
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
  unchecktext: {
    color: theme.colors.backgroundColor,
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
