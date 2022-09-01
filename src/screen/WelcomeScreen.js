
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';

export default function WelcomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Welcome!
          </Text>
          <Text style={styles.subtitle}>
            Your bank account has been linked and
          </Text>
          <Text style={styles.subtitle}>
            your account has been created
          </Text>
        </View>
        <Button onPress={() => { navigation.navigate('LoginScreen'); }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <Text style={styles.bttext}>
            Log In
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
    paddingHorizontal: 19,
    paddingVertical: 45,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  header: {
    textAlign: 'center',
  },
  title: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    fontWeight: theme.fontWeight.bold,
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.small,
    opacity: 0.66,
    letterSpacing: 1.5
  },
  iconSend: {
    width: 100,
    height: 30,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  footer: {
    marginBottom: 82,
    textAlign: 'center',
    fontSize: theme.fontSize.smallSize,
    fontWeight: theme.fontWeight.normal,
  },
  desc: {
    color: theme.colors.whiteColor,
  },
  mannual: {
    backgroundColor: theme.colors.yellowtextColor,
    fontSize: theme.fontSize.subtitle1,
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bttext: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.backgroundColor,
    fontSize: 18,
    lineHeight: 22,
  },
  redir: {
    paddingLeft: 5,
    color: theme.colors.thickyellowColor,
  },
  inputgroup: {
    marginBottom: 10,
  },
  label: {
    margin: 8,
    color: theme.colors.whiteColor
  },
});
