
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path } from "react-native-svg"
import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default function LinkbankLoginScreen({ navigation }) {
  const [password, setPassword] = useState({ value: '', error: '' })
  ////navigation.goBack
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.goBack}>
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
      <View style={{ marginVertical: 'auto' }}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Link Bank Account
          </Text>
          <Text style={styles.subtitle}>
            Link your bank account in order
          </Text>
          <Text style={styles.subtitle}>
            to add funds to your account
          </Text>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Name of Bank</Text>
          <TextInput
            placeholder="Re-enter your PIN number"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Account Number</Text>
          <TextInput
            placeholder="Re-enter your PIN number"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            autoCapitalize="none"
          />
        </View>
        <Button onPress={() => { navigation.navigate('WelcomeScreen'); }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <Text style={styles.bttext}>
            Submit
          </Text>
        </Button>
        <View style={styles.footer}>
          <Text style={styles.desc}>
            Dont have a bank account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.redir}>
              Create without bank
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: 19,
    paddingVertical: 45
  },
  header: {
    textAlign: 'center',
    marginVertical: 40
  },
  title: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    fontWeight: theme.fontWeight.bold,
    marginBottom: 20
  },
  subtitle: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.normal,
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
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
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
