import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './Button'

class ResultView extends Component {
  
  render() {
    const { correctAnswers, totalQuestions, onRestartQuiz, onGoBackToDeck } = this.props
    const percentage = Math.round((correctAnswers / totalQuestions * 100) * 100) / 100
    return (
      <View style={styles.main}>
        <Text style={styles.mainText}>You answered {correctAnswers} correct out of {totalQuestions} Questions</Text>
        <Text style={styles.percentageText}>You secure {percentage}% in the quiz</Text>
        <Button onPress={()=> onRestartQuiz()} style={styles.button} textStyle={styles.btnText}>
          Restart Quiz
        </Button>
        <Button onPress={()=> onGoBackToDeck()}>
            Back to Deck
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
  mainText: {
    fontSize: 28,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center'
  },
  percentageText: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 60
  },
  button: {
    backgroundColor: '#0000',
    borderColor: '#00b5ad',
  },
  btnText:{
    color:'#00b5ad'
  }
})

export default ResultView