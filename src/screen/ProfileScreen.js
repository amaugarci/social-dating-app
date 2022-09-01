
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import ProfilelistCard from '../components/ProfilelistCard';
import ProfileCard from '../components/ProfileCard';

export default function ProfileScreen({ navigation, onView }) {
  const properity = {
    avatar: '',
    name: 'John Doe',
    nickname: '@johndoe',
    phone: '(000)-000-0000',
    email: 'johndoe@emailaddress.com'
  }
  const data = [
    { id: 1, avatar: "profile.svg", name: "Profile", navigate: '04 August, 2022' },
    { id: 2, avatar: "payment.svg", name: "Payment Methods", navigate: '21 July, 2022' },
    { id: 3, avatar: "wallet.svg", name: "View Wallet ID", navigate: '16 July, 2022' },
    { id: 4, avatar: "privacy.svg", name: "Privacy and Security", navigate: '08 July, 2022' },
    { id: 5, avatar: "help.svg", name: "Help", navigate: '16 July, 2022' },
    { id: 6, avatar: "logout.svg", name: "Logout", navigate: '08 July, 2022' },
  ];
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Settings
        </Text>
        <ProfileCard item={properity} />
        <FlatList style={styles.list}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(list) => {
            const item = list.item;
            return (
              <ProfilelistCard item={item} navigation={navigation} />
            )
          }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.whiteColor,
    paddingHorizontal: 19,
    paddingVertical: 45,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  text: {
    textAlign: 'center',
    color: theme.colors.blackColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  searchbar: {
    marginVertical: 40,
    shadowColor: theme.colors.whiteColor,
    borderColor: theme.colors.searchborderColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  list: {
    marginHorizontal: 30,
  },
  subtitle: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.lightgreytextColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.small,
    opacity: 0.66,
    letterSpacing: 1.5
  },
});
