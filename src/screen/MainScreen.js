
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text,TouchableOpacity , View} from 'react-native';
import { theme } from '../core/theme';
export default function SplashScreen({navigation}) {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.navigate('DashboardScreen');}}>
          <View style={styles.title}>
              <Text style={styles.oro}>
                ORO
                  <Text style={styles.cash}>
                      cash
                  </Text>
              </Text>
          </View>
        <View style={styles.footer}>
          <Text style={styles.product}>
                  An ORO Financial Product
          </Text>
          <Text style={styles.reserve}>
              @2022-2023 Zimbali. All Rights Reserved.
          </Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:theme.colors.backgroundColor,
  },
  title:{
    flex:1,
    textAlign:'center',
    fontSize:theme.fontSize.title,
    fontWeight:theme.fontWeight.bold,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  footer:{
    position:'absolute',
    width:'100%',
    bottom:76,
  },
  oro:{
    color:theme.colors.yellowtextColor,
    fontSize:theme.fontSize.title,
    fontWeight:theme.fontWeight.normal,
  },
  cash:{
    color:theme.colors.whiteColor,
  },
  product:{
    height:20,
    textAlign:'center',
    color:theme.colors.greytextColor,
    fontSize:theme.fontSize.smallSize,
    fontWeight:theme.fontWeight.normal,
  },
  reserve:{
    height:20,
    textAlign:'center',
    color:theme.colors.thickgreytextColor,
    fontSize:theme.fontSize.smallSize,
    fontWeight:theme.fontWeight.normal,
  }
});
