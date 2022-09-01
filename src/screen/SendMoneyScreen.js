
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import HomeCard from '../components/HomeCard';

export default function SendMoneyScreen({ navigation }) {
  const data = [
    { id: 1, avatar: "avatar.jpg", name: "Lisa Benson", date: '04 August, 2022', money: "25.95" },
    { id: 2, avatar: "avatar.jpg", name: "Cody Christian", date: '21 July, 2022', money: "40.21" },
    { id: 3, avatar: "avatar.jpg", name: "Abby Grahm", date: '16 July, 2022', money: "100.00" },
    { id: 4, avatar: "avatar.jpg", name: "Grace Jones", date: '08 July, 2022', money: "5.95" },
  ];
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Svg
              width={22}
              height={20}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <Path
                d="M20.333 8.667H4.52l4.84-5.814a1.335 1.335 0 1 0-2.053-1.706l-6.667 8c-.045.063-.085.13-.12.2 0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173.035.07.075.137.12.2l6.667 8a1.333 1.333 0 0 0 1.026.48 1.333 1.333 0 0 0 1.027-2.186l-4.84-5.814h15.813a1.333 1.333 0 1 0 0-2.666Z"
                fill="#000"
              />
            </Svg>
          </TouchableOpacity>
          <Text style={styles.text}>
            Send Money
          </Text>
          <Svg
            width={34}
            height={34}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx={17} cy={17} r={17} fill="#141414" />
            <Path
              d="M20.617 23.836c.387.329 1 .329 1.387 0l3.668-3.11c.099-.08.179-.175.235-.282a.794.794 0 0 0-.187-.98 1.014 1.014 0 0 0-.327-.2 1.12 1.12 0 0 0-.78-.002 1.015 1.015 0 0 0-.328.197l-1.974 1.673V10.88a.83.83 0 0 0-.293-.622 1.073 1.073 0 0 0-.707-.258c-.265 0-.52.093-.707.258a.83.83 0 0 0-.293.622v10.252l-1.974-1.673a1.015 1.015 0 0 0-.329-.197 1.118 1.118 0 0 0-.78.003 1.014 1.014 0 0 0-.326.199.875.875 0 0 0-.214.295.786.786 0 0 0 .027.685.898.898 0 0 0 .235.282l3.668 3.11ZM13.35 10.258a1.073 1.073 0 0 0-.706-.257c-.265 0-.52.092-.707.257l-3.668 3.227a.824.824 0 0 0-.268.616c.005.228.11.445.293.607.183.161.43.253.69.257.259.004.51-.08.699-.236l1.96-1.725v10.198a.83.83 0 0 0 .293.622c.188.166.442.258.708.258.265 0 .52-.092.707-.258a.83.83 0 0 0 .293-.622V13.004l1.96 1.725c.19.156.44.24.7.236.259-.004.506-.096.69-.257a.832.832 0 0 0 .292-.607.824.824 0 0 0-.268-.616l-3.668-3.227Z"
              fill="#fff"
            />
          </Svg>
        </View>
        <Searchbar
          style={styles.searchbar}
          elevation={0}
          placeholder="Type a name, username, or phone number "
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FlatList style={styles.list}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(list) => {
            const item = list.item;
            return (
              <HomeCard item={item} />
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
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
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

  },
  subtitle: {
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.lightgreytextColor,
    fontSize: theme.fontSize.content,
    fontWeight: theme.fontWeight.normal,
    opacity: 0.66,
    letterSpacing: 1.5
  },
});
