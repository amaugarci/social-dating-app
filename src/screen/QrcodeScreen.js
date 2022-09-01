
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';
import PagerView from 'react-native-pager-view';

export default function QrcodeScreen({ navigation }) {
  const [check, setCheck] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack }}>
          <Svg
            width={22}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M20.333 8.667H4.52l4.84-5.814a1.335 1.335 0 1 0-2.053-1.706l-6.667 8c-.045.063-.085.13-.12.2 0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173.035.07.075.137.12.2l6.667 8a1.333 1.333 0 0 0 1.026.48 1.333 1.333 0 0 0 1.027-2.186l-4.84-5.814h15.813a1.333 1.333 0 1 0 0-2.666Z"
              fill="#141414"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.text}>
          QR Code Scan
        </Text>
      </View>
      <View style={styles.buttongroup}>
        <View style={(check ? styles.scan : styles.show)}>
          <Text style={styles.earn}>Scan a QR</Text>
        </View>
        <Text style={styles.spent}>Show your QR</Text>
      </View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <Image style={styles.avatar} source={require('../assets/scan.png')} />
          <Text style={styles.pleaseqr}>
            Place the QR Code inside of the frame
          </Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteColor,
    paddingTop: 45,
    marginLeft: 30,
    marginRight: 30,
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
  buttongroup: {
    marginTop: 50,
    position: 'relative',
    width: '100%',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)'
  },
  scan: {
    position: 'absolute',
    left: 0,
    width: '50%',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)'
  },
  show: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: 39,
    borderRadius: 20,
    color: 'rgba(198, 161, 90, 0.33)'
  },
  pagerView: {
    flex: 1,
  },
  earn: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: theme.colors.whiteColor
  },
  spent: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '50%',
  },
  avatar: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pleaseqr: {
    marginTop: 50,
    fontSize: theme.fontSize.content,
    textAlign: 'center'
  }
});
