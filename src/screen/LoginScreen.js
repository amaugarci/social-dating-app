
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import CheckBox from 'react-native-check-box';
import { User } from '../module/user/User'
import { userStore } from '../module/user/UserStore'

export default function LoginScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const login = () => {
    // if (email === '') {
    //   Alert.alert('Warning', 'Please input Login');
    //   return;
    // }
    // if (password === '') {
    //   Alert.alert('Warning', 'Please input password');
    //   return;
    // }
    const loginResponse = {
      userId: 1,
      authToken: 'test',
      refreshToken: 'test',
      permission: 1,
    };
    const user = User.fromJson(loginResponse, email)
    userStore.setUser(user)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Welcome Back
        </Text>
        <Text style={styles.subtitle}>
          Let’s sign you in.
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Username, email, or phone number</Text>
          <TextInput
            placeholder="Enter your username, email, or phone number"
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
          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            returnKeyType="next"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            checkBoxColor={theme.colors.whiteColor}
            isChecked={isSelected}
            onClick={() => { setSelection(!isSelected); }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember Me</Text>
        </View>
        <Button onPress={login} color={theme.colors.backgroundColor} style={styles.mannual}>
          <Text style={styles.bttext}>
            Log In
          </Text>
        </Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.desc}>
          Don’t have an account?
          <TouchableOpacity onPress={() => { navigation.navigate('SignupScreen'); }}>
            <Text style={styles.redir}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.redir}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 118,
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
    opacity: 0.66,
    marginBottom: 40,
  },
  inputgroup: {
    marginBottom: 10,
  },
  mannual: {
    backgroundColor: theme.colors.yellowtextColor,
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
    color: theme.colors.backgroundColor
  },
  body: {
    marginVertical: 'auto',
    width: '100%'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    // color: theme.colors.whiteColor,
  },
  label: {
    margin: 8,
    color: theme.colors.whiteColor
  },
  footer: {
    marginBottom: 82,
    textAlign: 'center',
    fontSize: theme.fontSize.smallSize,
    fontWeight: theme.fontWeight.normal,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  desc: {
    color: theme.colors.whiteColor,

  },
  redir: {
    paddingLeft: 5,
    color: theme.colors.thickyellowColor,
  },
});
