
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { theme } from '../core/theme';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { PRIME_TRUST_URL } from '@env';
import axios from 'axios';
import { DateInput } from 'react-native-date-input';
import { User } from '../module/user/User'
import { userStore } from '../module/user/UserStore';
import Moment from 'moment';
import CountryPicker from "react-native-region-country-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
export default function KycScreen({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const [firstname, setfirst] = useState('');
  const [lastname, setLast] = useState('');
  const [birth, setBirth] = useState('');
  const [taxid, setTaxid] = useState('');
  const [taxco, setTaxico] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [phoneco, setPhoneco] = useState('');
  const createIndividualAccount = async () => {
    await axios({
      method: "POST",
      headers: { Authorization: `Bearer ${userStore.user.authToken}` },
      data: {
        data: {
          type: "account",
          attributes: {
            "account-type": "custodial",
            name: "Dragon Account",
            "authorized-signature": "John Connor",
            owner: {
              "contact-type": "natural_person",
              name: "John Connor",
              email: "dragondev93@gmail.com",
              "date-of-birth": "1971-01-01",
              "tax-id-number": "111223333",
              "tax-country": "US",
              "primary-phone-number": {
                country: "US",
                number: "123456789",
                sms: true,
              },
              "primary-address": {
                "street-1": "NaKaKu",
                "street-2": "Apt 260",
                "postal-code": "89145",
                city: "Las Vegas",
                region: "NV",
                country: "US",
              },
            },
          },
        },
      },
      url: "https://sandbox.primetrust.com/v2/accounts?include=owners,contacts,webhook-config",
      // url: "https://sandbox.primetrust.com/v2/users",
    })
      .then((response) => {
        console.log("response", response.data);
      })
      .catch((err) => {
        console.log("error", err?.response?.data?.errors);
        // res.status(400).send({ message: err.response?.data?.errors[0]?.title });
      });
  };
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    console.log(date);
    setBirth(Moment(date).format('y-M-d'));
    hideDatePicker();
  };
  let countryPickerRef = undefined;

  // // use countryPickerRef
  // countryPickerRef.open();
  // countryPickerRef.close();

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
              value={firstname}
              onChangeText={(text) => setfirst(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.inputgroup, { width: '45%' }]}>
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              placeholder="Enter Last Name"
              returnKeyType="next"
              value={lastname}
              onChangeText={(text) => setLast(text)}
              autoCapitalize="none"
            />
          </View>
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>birthday</Text>
          <TextInput
            onPressIn={(e) => { showDatePicker() }}
            showSoftInputOnFocus={false}
            type='date'
            placeholder="1991-01-01"
            returnKeyType="next"
            value={birth}
            onChangeText={(text) => setBirth(text)}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>taxi_id</Text>
          <TextInput
            placeholder="taxid"
            returnKeyType="next"
            value={taxid}
            onChangeText={(text) => setTaxico(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Tax Country</Text>
          <TextInput
            placeholder="Enter Country"
            returnKeyType="next"
            value={taxco}
            onChangeText={(text) => setTaxico(text)}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.inputgroup}>
          <Text style={styles.label}>Phone Country</Text>
          <TextInput
            placeholder="phone country"
            returnKeyType="next"
            value={phoneco}
            onChangeText={(text) => setPhoneco(text)}
            autoCapitalize="none"
          />
        </View>
        <CountryPicker
          countryPickerRef={(ref) => {
            countryPickerRef = ref;
          }}
          enable={true}
          darkMode={false}
          countryCode={"US"}
          containerConfig={{
            showFlag: true,
            showCallingCode: true,
            showCountryName: true,
            showCountryCode: true,
          }}
          modalConfig={{
            showFlag: true,
            showCallingCode: true,
            showCountryName: true,
            showCountryCode: true,
          }}
          onSelectCountry={(data) => {
            console.log("DATA", data);
          }}
          onInit={(data) => {
            console.log("DATA", data);
          }}
          onOpen={() => {
            console.log("Open");
          }}
          onClose={() => {
            console.log("Close");
          }}
          containerStyle={{
            container: {},
            flagStyle: {},
            callingCodeStyle: {},
            countryCodeStyle: {},
            countryNameStyle: {},
          }}
          modalStyle={{
            container: {},
            searchStyle: {},
            tileStyle: {},
            itemStyle: {
              itemContainer: {},
              flagStyle: {},
              countryCodeStyle: {},
              countryNameStyle: {},
              callingNameStyle: {},
            },
          }}
          title={"Country"}
          searchPlaceholder={"Search"}
          showCloseButton={true}
          showModalTitle={true}
        />
        <Button onPress={() => { createIndividualAccount(); }} color={theme.colors.backgroundColor} style={styles.mannual}>
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
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
