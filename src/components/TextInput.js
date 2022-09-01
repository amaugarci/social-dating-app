import React from 'react'
import { View, StyleSheet, Text, TextInput as Input } from 'react-native'
import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        placeholderTextColor="rgba(255, 255, 255, 0.25)"
        style={styles.input}
        selectionColor={theme.colors.textinputbackColor}
        activeOutlineColor={theme.colors.thickyellowColor}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 7,
  },
  input: {
    backgroundColor: theme.colors.inputColor,
    opacity: 0.96,
    borderRadius: 10,
    padding: 10,
    fontSize: theme.fontSize.content,
    borderColor: theme.colors.textinputbackColor,
    borderWidth: 2,
    color: theme.colors.whiteColor
  },
  description: {
    fontSize: 30,
    color: theme.colors.description,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})