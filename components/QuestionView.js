import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Button from './Button'

class QuestionView extends Component {
  
  render() {
    const { flipCard, id, index, onCardFlip, onQuestionAnswer, decks, route } = this.props
    const deck = decks[id]
    const card = deck.questions[index]
    const cardText = flipCard ? card.answer : card.question
    const btnText = flipCard ? 'Show Question' : 'Show Answer'
    return (
      <View style={styles.main}>
        <Text style={styles.count}>{(index + 1)} / {deck.questions.length}</Text>
        <Text style={styles.question}>{cardText}</Text>
        <TouchableOpacity onPress={onCardFlip}>
          <Text style={styles.answer}>{btnText}</Text>
        </TouchableOpacity>
        
        <Text style={styles.info}>Press {btnText} to flip card</Text>
        <Button onPress={()=> onQuestionAnswer(true)}>
          Correct
        </Button>
        <Button onPress={()=> onQuestionAnswer(false)} 
          style={{backgroundColor: '#f00', borderColor: '#f00'}} >
            Incorrect
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 28,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  answer: {
    fontSize: 22,
    color: '#00b5ad',
    marginTop: 15
  },
  info: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 40
  },
  count: {
    top: 10,
    position: 'absolute',
    fontSize: 20,
    margin:10,
    alignSelf: 'flex-start'
  }
})

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(QuestionView)