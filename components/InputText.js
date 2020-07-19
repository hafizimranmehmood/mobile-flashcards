import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputText = ({ value, placeholder, onChangeText, placeholderTextColor='#999', style = {} }) => {
  
  return (
    <TextInput 
      style = {[styles.input, style]}
      placeholder = {placeholder}
      placeholderTextColor = {placeholderTextColor}
      onChangeText = {text => onChangeText(text)}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  input: {
      margin: 15,
      height: 40,
      borderColor: '#000',
      borderRadius: 6,
      fontSize: 16,
      paddingHorizontal: 10,
      borderWidth: 1,
   }
});

export default InputText