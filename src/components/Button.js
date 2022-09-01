import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

export default function Button({ mode, style, ...props }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
      ]}
      mode={mode}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 38,
    borderWidth: 1,
    borderRadius: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
  },
})