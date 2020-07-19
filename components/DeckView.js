import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'

class DeckView extends Component {

  render() {
    const {decks, route, navigation} = this.props
    const {id} = route.params;
    const deck = decks[id]
    navigation.setOptions({title: deck.title})
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{deck.title}</Text>
        <Text style={styles.textDescription}>{deck.questions.length} cards</Text>
        <Button onPress={() => navigation.navigate('CardView', {id: id})} 
          style={styles.button} 
          textStyle={styles.btnText} 
        >
          Add Card
        </Button>
        {
          deck.questions.length > 0 && (
            <Button onPress={() => navigation.navigate('QuizView', {id: id})}>
              Start Quiz
            </Button>
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0000',
    borderColor: '#00b5ad',
  },
  btnText:{
    color:'#00b5ad'
  },
  textTitle: {
    fontSize: 32,
    color: '#00b5ad',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center'
  },
  textDescription: {
    fontSize: 22,
    color: '#00b5ad',
    marginBottom: 80
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckView)