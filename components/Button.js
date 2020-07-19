import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ children, onPress, disabled, style = {}, textStyle={} }) => {
  return (
    <TouchableOpacity 
    	style={[styles.button, style]}
    	onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.btnText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#00b5ad',
    borderColor: '#00a69e',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  btnText:{
    color:'#fff',
    fontSize: 20,
    textAlign:'center',
  }
})

export default Button