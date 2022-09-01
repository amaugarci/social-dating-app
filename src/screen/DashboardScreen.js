
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { theme } from '../core/theme';
import { ViewPager } from 'react-native-viewpager-carousel'

const _renderPage = ({ data }) => {
  var icon;
  switch (data.photo) {
    case 1: icon = require('../assets/pageview1.png'); break;
    case 2: icon = require('../assets/pageview2.png'); break;
    default: icon = require('../assets/pageview3.png'); break;
  };
  return (
    <View>
      <ImageBackground source={icon} style={styles.title}>
        <Text style={styles.oro}>
          ORO
          <Text style={styles.cash}>
            cash
          </Text>
        </Text>
      </ImageBackground>
      <View style={styles.textgroup}>
        <Text style={styles.ptitle}>{data.title}</Text>
        <Text style={styles.ptitle}>{data.subtitle}</Text>
        <Text style={styles.pcontent}>{data.content}</Text>
      </View>
    </View>
  );
}
export default function DashboardScreen({ navigation }) {
  const data = [
    { title: 'Add Currency To', photo: 1, subtitle: 'Your Wallet', content: 'Just click add, select how you would like to add money, pick your amount, and confirm!' },
    { title: 'Quick and Easy ', photo: 2, subtitle: 'Payments', content: 'Send and receive payments from all around the world in seconds!' },
    { title: 'View Your ', photo: 3, subtitle: 'Statistics & History', content: 'Keep track of your transactions and view meaningful insights in the statistics tab.' },
  ]
  const [index, setIndex] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.pageview}>
        <ViewPager
          onPageChange={(index) => {
            setIndex(index);
          }}
          firePageChangeIfPassedScreenCenter={true}
          data={data}
          renderPage={_renderPage}
        />
      </View>
      <View style={styles.indicater}>
        <View style={(index != 1 ? styles.dot : styles.dash)}></View>
        <View style={(index != 2 ? styles.dot : styles.dash)}></View>
        <View style={(index != 3 ? styles.dot : styles.dash)}></View>
      </View>
      <View style={styles.buttons}>
        <Button onPress={() => { navigation.navigate('LoginScreen'); }} style={styles.Login} >
          <Text style={[styles.bttext, { color: theme.colors.whiteColor }]}>
            Log In
          </Text>
        </Button>
        <Button onPress={() => { navigation.navigate('SignupScreen'); }} color={theme.colors.backgroundColor} style={styles.Sign}>
          <Text style={styles.bttext}>
            Sign Up
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
  title: {
    textAlign: 'center',
    fontSize: theme.fontSize.title,
    fontWeight: theme.fontWeight.bold,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    height: 350,
  },
  oro: {
    color: theme.colors.yellowtextColor,
    fontSize: theme.fontSize.title,
    fontWeight: theme.fontWeight.normal,
  },
  cash: {
    color: theme.colors.whiteColor,
  },
  pageview: {
    height: 600,
    // backgroundColor: '#FFFFFF'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 45,
    marginBottom: 102,
  },
  Login: {
    borderColor: theme.colors.whiteColor
  },
  Sign: {
    backgroundColor: theme.colors.yellowtextColor,
  },
  bttext: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
    color: theme.colors.backgroundColor
  },
  textgroup: {
    marginHorizontal: 10,
  },
  ptitle: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    opacity: 0.7,
  },
  pcontent: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle01,
    opacity: 0.3,
  },
  indicater: {
    height: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dot: {
    marginHorizontal: 2,
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: theme.colors.whiteColor
  },
  dash: {
    marginHorizontal: 2,
    width: 39,
    height: 7,
    borderRadius: 7,
    backgroundColor: theme.colors.whiteColor,
    opacity: 0.3,
  }
});
