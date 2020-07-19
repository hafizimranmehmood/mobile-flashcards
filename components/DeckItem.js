import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from './Button'

class DeckItem extends Component {

  onPressed = ()=> {
    const {deck, onItemClick} = this.props
    onItemClick(deck.title)
  }

  render() {
    const {deck} = this.props
    return (
      <TouchableOpacity onPress={this.onPressed} style={styles.main}>
        <Text style={styles.textTitle}>{deck.title}</Text>
        <Text style={styles.textDescription}>{deck.questions.length} cards</Text>
        <View style={styles.divider} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  textTitle: {
    fontSize: 28,
    color: '#00b5ad',
    textAlign: 'center'
  },
  textDescription: {
    fontSize: 20,
    color: '#00b5ad',
    marginBottom: 15
  },
  divider: {
    width: 800,
    backgroundColor: '#00b5ad',
    height: 1
  }
})

export default DeckItem