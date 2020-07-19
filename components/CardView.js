import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import { handleAddCard } from '../actions' 
import Button from './Button'
import InputText from './InputText'

class CardView extends Component {
  state = {
    answer: '',
    question: ''
  }

  onQuestionText = (question) => {
    this.setState({question: question})
  }

  onAnswerText = (answer) => {
    this.setState({answer: answer})
  }

  onAddCard = () => {
    const {answer, question} = this.state
    const {dispatch, navigation, route} = this.props
    const {id} = route.params;
    dispatch(handleAddCard(id, question, answer))
    this.setState({
      answer: '',
      question: ''
    })

    navigation.goBack()
  }
  
  render() {
    const {answer, question} = this.state
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Enter Question here</Text>
        <InputText value={question} 
          onChangeText={this.onQuestionText} 
          placeholder='Enter question'
          style={{width: 300}}
        />
        <Text style={styles.text}>Enter Answer here</Text>
        <InputText value={answer} 
          onChangeText={this.onAnswerText} 
          placeholder='Enter answer'
          style={{width: 300}}
        />
        <Button onPress={this.onAddCard} disabled={question === '' || answer === ''}>
          Add Card
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
  text: {
    fontSize: 24
  }
})

export default connect()(CardView)