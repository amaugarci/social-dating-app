
import React, { useState } from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, FlatList, View, ScrollView } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';
import PagerView from 'react-native-pager-view';
import HomeCard from '../components/HomeCard';

export default function SatisticsScreen({ navigation }) {
  const [check, setCheck] = useState(true);
  const data = [
    { id: 1, avatar: "avatar.jpg", name: "Lisa Benson", date: '04 August, 2022', money: "25.95" },
    { id: 2, avatar: "avatar.jpg", name: "Cody Christian", date: '21 July, 2022', money: "40.21" },
    { id: 3, avatar: "avatar.jpg", name: "Abby Grahm", date: '16 July, 2022', money: "100.00" },
    { id: 4, avatar: "avatar.jpg", name: "Grace Jones", date: '08 July, 2022', money: "5.95" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack }}>
          <Svg
            width={22}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M20.333 8.667H4.52l4.84-5.814a1.335 1.335 0 1 0-2.053-1.706l-6.667 8c-.045.063-.085.13-.12.2 0 .066 0 .106-.093.173-.06.153-.092.316-.094.48.002.164.033.327.094.48 0 .067 0 .107.093.173.035.07.075.137.12.2l6.667 8a1.333 1.333 0 0 0 1.026.48 1.333 1.333 0 0 0 1.027-2.186l-4.84-5.814h15.813a1.333 1.333 0 1 0 0-2.666Z"
              fill="#141414"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.text}>
          Statistics
        </Text>
      </View>
      <Text style={styles.text}>
        Activity
      </Text>
      <View style={styles.buttongroup}>
        <View style={(check ? styles.scan : styles.show)}>
          <Text style={styles.earn}>Earned</Text>
        </View>
        <Text style={styles.spent}>Spent</Text>
      </View>
      <PagerView style={styles.pagerView} initialPage={0}>
        <ScrollView key="1">
          <View style={{ height: 300 }}>
            <Text style={{ textAlign: 'center', marginTop: 'auto', marginBottom: 'auto' }}>Chart</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.row}>
              <Text style={styles.recent}>
                Recent Activity
              </Text>
              <TouchableOpacity onPress={() => { }}>
                <Text style={styles.all}>
                  View All
                </Text>
              </TouchableOpacity>
            </View>
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
        </ScrollView>
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
    backgroundColor: theme.colors.whiteColor,
    paddingTop: 45,
    marginLeft: 30,
    marginRight: 30,
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
    color: theme.colors.backgroundColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  buttongroup: {
    marginTop: 50,
    position: 'relative',
    width: '100%',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)'
  },
  scan: {
    position: 'absolute',
    left: 0,
    width: '50%',
    height: 39,
    borderRadius: 20,
    backgroundColor: 'rgba(198, 161, 90, 0.33)'
  },
  show: {
    position: 'absolute',
    right: 0,
    width: '50%',
    height: 39,
    borderRadius: 20,
    color: 'rgba(198, 161, 90, 0.33)'
  },
  pagerView: {
    flex: 1,
  },
  earn: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    color: theme.colors.whiteColor
  },
  spent: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: '50%',
  },
  avatar: {
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  pleaseqr: {
    marginTop: 50,
    fontSize: theme.fontSize.content,
    textAlign: 'center'
  },
  body: {
    backgroundColor: theme.colors.homebackgroundColor,
  },
  row: {
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
  },
  recent: {
    color: theme.colors.blackColor,
    fontSize: theme.fontSize.subtitle1,
    fontWeight: theme.fontWeight.normal,
  },
  all: {
    color: theme.colors.lightgreytextColor,
    fontSize: theme.fontSize.content0,
    fontWeight: theme.fontWeight.normal,
  },
  list: {
    marginHorizontal: 17,
  }
});
