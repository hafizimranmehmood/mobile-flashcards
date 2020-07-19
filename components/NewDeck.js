import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { handleAddDeck } from '../actions' 
import InputText from './InputText'
import Button from './Button'

class NewDeck extends Component {
  state = {
    title: ''
  }

  onChangeText = (title) => {
    this.setState({title: title})
  }

  onAddDeck = () => {
    const {title} = this.state
    const {dispatch, navigation} = this.props
    dispatch(handleAddDeck(title))
    this.setState({title: ''})
    navigation.navigate('DeckView', {id: title})
  }

  render() {
    const {title} = this.state
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Title of New Deck</Text>
        <InputText value={title} 
          onChangeText={this.onChangeText} 
          placeholder='Enter deck name'
          style={{width: 300}}
          value={title}
        />
        <Button onPress={this.onAddDeck} disabled={title === ''}>
          Add Deck
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10
  }
})

export default connect()(NewDeck)