import React, { useState, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, Image, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';
import PaymentCard from '../components/PaymentCard';
import RBSheet from "react-native-raw-bottom-sheet";
import PaymentBottom from '../components/PaymentBottom';
import PaymentAdd from '../components/PaymentAdd';

export default function PaymentScreen({ navigation }) {
  const data = [
    { id: 1, avatar: "avatar.jpg", name: "Lisa Benson", bank: '04 August, 2022' },
    { id: 2, avatar: "avatar.jpg", name: "Cody Christian", bank: '21 July, 2022' },
  ];
  const refRBSheet = useRef();
  const refRBSheetcard = useRef();
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
        <Text style={styles.headertitle}>
          Payment Methods
        </Text>
      </View>
      <RBSheet
        ref={refRBSheetcard}
        height={400}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }
        }}
      >
        <PaymentBottom item={data[0]} />
      </RBSheet>
      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5
          }
        }}
      >
        <PaymentAdd />
      </RBSheet>
      <View>
        <FlatList style={styles.list}
          data={data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(list) => {
            const item = list.item;
            return (
              <TouchableOpacity onPress={() => refRBSheetcard.current.open()}>
                <PaymentCard item={item} />
              </TouchableOpacity>
            );
          }} />
        <TouchableOpacity style={styles.footer} onPress={() => refRBSheet.current.open()}>
          <Svg
            width={43}
            height={43}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Circle cx={21.5} cy={21.5} r={21.5} fill="#C6A15A" />
            <Path
              d="M22 11a1.25 1.25 0 0 1 1.25 1.25v7.5h7.5a1.25 1.25 0 0 1 0 2.5h-7.5v7.5a1.25 1.25 0 0 1-2.5 0v-7.5h-7.5a1.25 1.25 0 0 1 0-2.5h7.5v-7.5A1.25 1.25 0 0 1 22 11Z"
              fill="#141414"
            />
          </Svg>
          <Text style={styles.text}>
            Add payment method
          </Text>
        </TouchableOpacity>
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
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    fontWeight: theme.fontWeight.bold,
    marginVertical: 20
  },
  list: {
    marginTop: 100,
    marginHorizontal: 17,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 17,
  },
  headertitle: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle,
    fontWeight: theme.fontWeight.normal,
  },
  text: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle1,
    fontWeight: theme.fontWeight.normal,
  },
});
