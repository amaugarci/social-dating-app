import React from 'react'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from "react-native-svg"

export default function Keyboard({ add, del }) {
  function onPress(val) {
    if (val == 'del') {
      del();
    } else {
      add(val);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('1') }}>
            <Text style={styles.buttonLabel}>
              1
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('2') }}>
            <Text style={styles.buttonLabel}>
              2
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('3') }}>
            <Text style={styles.buttonLabel}>
              3
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('4') }}>
            <Text style={styles.buttonLabel}>
              4
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('5') }}>
            <Text style={styles.buttonLabel}>
              5
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('6') }}>
            <Text style={styles.buttonLabel}>
              6
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('7') }}>
            <Text style={styles.buttonLabel}>
              7
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('8') }}>
            <Text style={styles.buttonLabel}>
              8
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('9') }}>
            <Text style={styles.buttonLabel}>
              9
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('•') }}>
            <Text style={styles.buttonLabel}>
              •
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('0') }}>
            <Text style={styles.buttonLabel}>
              0
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => { onPress('del') }}>
            <Text style={styles.buttonLabel}>
              <Svg
                width={40}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M11.709.75h25.916c.475 0 .931.167 1.267.464.336.297.525.7.525 1.12v25.333c0 .42-.189.822-.525 1.12a1.918 1.918 0 0 1-1.267.463H11.71c-.295 0-.585-.064-.846-.187-.26-.123-.481-.3-.645-.518L.663 15.88A1.456 1.456 0 0 1 .362 15c0-.313.105-.619.301-.879l9.555-12.666c.164-.217.385-.395.645-.518s.55-.187.846-.187Zm.958 3.167L4.307 15l8.36 11.083h23.167V3.917H12.666Zm10.625 8.844 5.067-4.48 2.535 2.241L25.825 15l5.069 4.478-2.535 2.24-5.067-4.48-5.067 4.48-2.535-2.24L20.758 15l-5.068-4.478 2.535-2.24 5.067 4.48Z"
                  fill="#fff"
                />
              </Svg>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.pinbackColor,
    paddingVertical: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    width: 270,
    fontSize: 19,
  },
  buttonLabel: {
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 20,
    color: theme.colors.whiteColor,
    fontSize: theme.fontSize.title2,
    fontWeight: theme.fontWeight.normal,
  },
  button: {
    width: "33.333333333%",
  },
  row: {
    flexDirection: "row",
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  }
})