import React,{useState} from 'react';
import { StyleSheet, Text,TouchableOpacity, FlatList, Image, View} from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path,Circle } from "react-native-svg"
import Button from '../components/Button';
import PaymentCard from '../components/PaymentCard';

export default function TransfertoScreen({navigation}) {
  const data= [
    {id:1, avatar:"avatar.jpg",name:"Lisa Benson", bank:'04 August, 2022'},
    {id:2, avatar:"avatar.jpg",name:"Cody Christian", bank:'21 July, 2022'},
  ];
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
      <View>
        <View style={styles.header}>                      
          <Text style={styles.title}>
            Where would you like
          </Text>
          <Text style={styles.title}>
            to transfer money to?
          </Text>
        </View>
        <FlatList style={styles.list}
          data={data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(list) => {
            const item = list.item;
            return (
              <PaymentCard item={item}/>
            );
          }}/>
        <View style={styles.footer}>
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
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.backgroundColor,
    paddingHorizontal:19,
    paddingVertical:45
  },
  header:{
    textAlign:'center',
    marginVertical:50,
  },
  title:{
    color:theme.colors.whiteColor,
    fontSize:theme.fontSize.subtitle0,
    fontWeight:theme.fontWeight.bold,
    textAlign:'left'
  },
  list:{
    marginHorizontal:17,
  },
  footer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginTop:20,
    marginLeft:17,
   },
   text:{
    color:theme.colors.whiteColor,
    fontSize:theme.fontSize.subtitle1,
    fontWeight:theme.fontWeight.normal,
    marginLeft:30
  },
});
