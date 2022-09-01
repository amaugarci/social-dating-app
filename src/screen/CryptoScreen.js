
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';
import PagerView from 'react-native-pager-view';
import { Searchbar } from 'react-native-paper';
import CryptoCard from '../components/CryptoCard';
import { MaterialCommunityIcon } from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CryptoScreen({ navigation, onView }) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const data = [
    { id: 1, avatar: 1, name: "BTC", percent: '6.20', money: "25.95" },
    { id: 2, avatar: 2, name: "ETH", percent: '6.20', money: "40.21" },
    { id: 3, avatar: 3, name: "XRP", percent: '6.20', money: "100.00" },
    { id: 4, avatar: 4, name: "AAA", percent: '6.20', money: "5.95" },
    { id: 5, avatar: 5, name: "BBB", percent: '6.20', money: "5.95" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{ paddingHorizontal: 19, }} onPress={() => { onView(2); }} >
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
          Purchase Crypto
        </Text>
      </View>
      <View style={styles.tabbargroup}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={styles.tabbar} >Markets</Text>
          <View style={styles.bottom}></View>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={styles.untabbar} >Watch List</Text>
          <View style={styles.bottom2}></View>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={styles.untabbar} >Gainers</Text>
          <View style={styles.bottom2}></View>
        </View>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Text style={styles.untabbar} >Losers</Text>
          <View style={styles.bottom2}></View>
        </View>
      </View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <View key="1">
          <Searchbar
            iconColor={theme.colors.whiteColor}
            icon={
              <MaterialCommunityIcon name='Search' size={10} />
            }
            style={styles.searchbar}
            elevation={0}
            placeholder="Search"
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
                <CryptoCard item={item} />
              )
            }} />
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
    backgroundColor: theme.colors.backgroundColor,
    paddingTop: 45
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
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  tabbargroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  tabbar: {
    color: theme.colors.whiteColor,
    borderColor: theme.colors.whiteColor,
  },
  untabbar: {
    color: theme.colors.greytextColor,
    borderColor: theme.colors.whiteColor,
  },
  pagerView: {
    flex: 1,
  },
  bottom: {
    width: "110%",
    height: 4,
    backgroundColor: theme.colors.whiteColor,
    borderRadius: 4,
  },
  searchbar: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
    backgroundColor: theme.colors.textinputbackColor,
    color: theme.colors.whiteColor
  }
});
