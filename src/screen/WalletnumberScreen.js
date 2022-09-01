
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Icon } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import TextInput from '../components/TextInput';
import Button from '../components/Button';

export default function WalletnumberScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ paddingHorizontal: 19, }}>
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
          Wallet ID Number
        </Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.name}>
          Your Wallet ID Number
        </Text>
        <Text style={styles.content}>
          Your wallet ID is private and should not be
        </Text>
        <Text style={styles.content}>
          shared with anyone
        </Text>
        <View style={styles.inputgroup}>
          <TextInput
            secureTextEntry={true}
            placeholder="Enter State"
            returnKeyType="next"
            value={email.value}
            onChangeText={(text) => setEmail({ value: text, error: '' })}
            error={!!email.error}
            errorText={email.error}
            autoCapitalize="none"
          />
        </View>
        <Button onPress={() => { }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <Text style={styles.bttext}>
            Return to Settings
          </Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 98,
    paddingHorizontal: 23,
    backgroundColor: theme.colors.backgroundColor
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 10,
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  name: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    marginVertical: 30,
    fontSize: theme.fontSize.subtitle1,
    fontWeight: theme.fontWeight.bold,
  },
  content: {
    textAlign: 'center',
    color: theme.colors.whiteColor,
    marginVertical: 5,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal,
  },
  body: {
    marginVertical: 'auto',
    paddingBottom: 50,
  },
  inputgroup: {
    width: '100%',
    marginVertical: 20,
  },
  label: {
    margin: 8,
    color: theme.colors.whiteColor
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
});
