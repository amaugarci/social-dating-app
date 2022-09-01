
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import { theme } from '../core/theme';
import Svg, { Path, Circle } from "react-native-svg"
import Button from '../components/Button';

export default function AddmoneyScreen({ navigation }) {

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
      <View style={{ marginVertical: 'auto' }}>
        <View style={styles.header}>
          <Text style={styles.title}>
            How would you like to add money?
          </Text>
        </View>
        <Button onPress={() => { navigation.navigate('AddmoneystepScreen'); }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <View style={styles.row}>
            <Text style={styles.text}>
              Direct Bank Transfer
            </Text>
            <View style={styles.svg}>
              <Svg
                width={10}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M.42.308C.152.506 0 .773 0 1.052c0 .28.151.547.42.744l7.112 5.21-7.111 5.21c-.262.199-.407.465-.404.74.004.277.155.54.421.736.267.195.627.306 1.004.308.376.002.74-.104 1.01-.296L10.58 7.75c.27-.197.421-.465.421-.744 0-.279-.151-.546-.42-.744L2.451.308A1.737 1.737 0 0 0 1.436 0C1.056 0 .69.11.421.308Z"
                  fill="#fff"
                />
              </Svg>
            </View>
          </View>
        </Button>
        <Button onPress={() => { }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <View style={styles.row}>
            <Text style={styles.text}>
              Credit Card
            </Text>
            <View style={styles.svg}>
              <Svg
                width={10}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M.42.308C.152.506 0 .773 0 1.052c0 .28.151.547.42.744l7.112 5.21-7.111 5.21c-.262.199-.407.465-.404.74.004.277.155.54.421.736.267.195.627.306 1.004.308.376.002.74-.104 1.01-.296L10.58 7.75c.27-.197.421-.465.421-.744 0-.279-.151-.546-.42-.744L2.451.308A1.737 1.737 0 0 0 1.436 0C1.056 0 .69.11.421.308Z"
                  fill="#fff"
                />
              </Svg>
            </View>
          </View>
        </Button>
        <Button onPress={() => { }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <View style={styles.row}>
            <Text style={styles.text}>
              Cryptocurrency Transfer
            </Text>
            <View style={styles.svg}>
              <Svg
                width={10}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M.42.308C.152.506 0 .773 0 1.052c0 .28.151.547.42.744l7.112 5.21-7.111 5.21c-.262.199-.407.465-.404.74.004.277.155.54.421.736.267.195.627.306 1.004.308.376.002.74-.104 1.01-.296L10.58 7.75c.27-.197.421-.465.421-.744 0-.279-.151-.546-.42-.744L2.451.308A1.737 1.737 0 0 0 1.436 0C1.056 0 .69.11.421.308Z"
                  fill="#fff"
                />
              </Svg>
            </View>
          </View>
        </Button>
        <Button onPress={() => { }} color={theme.colors.backgroundColor} style={styles.mannual}>
          <View style={styles.row}>
            <Text style={styles.text}>
              Foreign Transfer
            </Text>
            <View style={styles.svg}>
              <Svg
                width={10}
                height={15}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M.42.308C.152.506 0 .773 0 1.052c0 .28.151.547.42.744l7.112 5.21-7.111 5.21c-.262.199-.407.465-.404.74.004.277.155.54.421.736.267.195.627.306 1.004.308.376.002.74-.104 1.01-.296L10.58 7.75c.27-.197.421-.465.421-.744 0-.279-.151-.546-.42-.744L2.451.308A1.737 1.737 0 0 0 1.436 0C1.056 0 .69.11.421.308Z"
                  fill="#fff"
                />
              </Svg>
            </View>
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    paddingHorizontal: 19,
    paddingTop: 45,
    paddingBottom: 130,
  },
  header: {
    textAlign: 'center',
  },
  title: {
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.subtitle0,
    fontWeight: theme.fontWeight.bold,
    marginVertical: 20,
    marginBottom: 46,
    width: 280,
    textAlign: 'left'
  },
  mannual: {
    backgroundColor: theme.colors.yellowtextColor,
    marginVertical: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'space-between'
  },
  svg: {
    marginLeft: 10,
    width: 25,
    height: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.backgroundColor,
    borderRadius: 25,
  },
  text: {
    fontWeight: theme.fontWeight.normal,
    fontSize: 18,
    lineHeight: 22,
  },
  row: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});
