
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { PRIME_TRUST_URL } from '@env';
import axios from 'axios';
export default function SignupScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [username, setUsername] = useState('');
  const [def, setDef] = useState('');
  const [pin, setPin] = useState('');
  const getToken = async () => {
    await fetch(
      `${PRIME_TRUST_URL}auth/jwts?email=${email.value}&password=${password.value}`,
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          // 'Username': email,
          // 'Password': password.value,
        },//flm reference
      }
    ).then(res => res.json()).then((data) => { }).catch(err => { createUser(); });
    createUser();
  };
  const createUser = async () => {
    await axios({
      method: "POST",
      data: {
        data: {
          type: "user",
          attributes: {
            email: email.value,
            name: username,
            password: password.value,
          },
        },
      },
      url: `${PRIME_TRUST_URL}v2/users`,
    })
      .then((response) => {

      })
      .catch((err) => {
        console.log("error", err?.response?.data?.errors[0]?.title);
        res.status(400).send({ message: err.response?.data?.errors[0]?.title });
      });
  };
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 110 }} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome
        </Text>
        <Text style={styles.subtitle}>
          Let’s sign you up.
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.doublegroup}>
          <View style={[styles.inputgroup, { width: '45%' }]}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              placeholder="Enter First Name"
              returnKeyType="next"
              value={username}
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.inputgroup, { width: '45%' }]}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Enter Last Name"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="example@email.com"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="(000)-000-0000"
            returnKeyType="next"
            value={def}
            onChangeText={(text) => setDef(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.doublegroup}>
          <View style={[styles.inputgroup, { width: '45%' }]}>
            <Text style={styles.label}>City</Text>
            <TextInput
              placeholder="Enter City"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.inputgroup, { width: '45%' }]}>
            <Text style={styles.label}>State</Text>
            <TextInput
              placeholder="Enter State"
              returnKeyType="next"
              value={email.value}
              onChangeText={(text) => setEmail({ value: text, error: '' })}
              error={!!email.error}
              errorText={email.error}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            placeholder="Enter Country"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password must be at least 8 characters long"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="Re-enter your password"
            returnKeyType="next"
            value={def}
            onChangeText={(text) => setDef(text)}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>PIN</Text>
          <TextInput
            placeholder="PIN number must be 4 digits "
            returnKeyType="next"
            value={pin}
            onChangeText={(text) => setPin(text)}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Confirm PIN</Text>
          <TextInput
            placeholder="Re-enter your PIN number"
            returnKeyType="next"
            value={def}
            onChangeText={(text) => setDef(text)}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
          />
        </View>
        <Button onPress={() => { getToken(); }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <Text style={styles.bttext}>
            Sign Up
          </Text>
        </Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.desc}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => { navigation.navigate('LoginScreen'); }}>
          <Text style={styles.redir}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
    backgroundColor: theme.colors.backgroundColor
  },
  title: {
    color: theme.colors.thickyellowColor,
    fontSize: theme.fontSize.title1,
    fontWeight: theme.fontWeight.normal
  },
  subtitle: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.small,
    opacity: 0.66
  },
  inputgroup: {
    marginBottom: 10,
  },
  mannual: {
    backgroundColor: theme.colors.yellowtextColor,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  bttext: {
    textAlign: 'center',
    fontWeight: theme.fontWeight.bold,
    fontSize: 18,
    lineHeight: 22,
  },
  body: {
    marginVertical: 'auto',
    width: '100%'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center'
  },
  label: {
    margin: 8,
    color: theme.colors.whiteColor
  },
  footer: {
    textAlign: 'center',
    fontSize: theme.fontSize.smallSize,
    fontWeight: theme.fontWeight.normal,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    color: theme.colors.whiteColor,
  },
  redir: {
    paddingLeft: 5,
    color: theme.colors.thickyellowColor,
  },
  doublegroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
