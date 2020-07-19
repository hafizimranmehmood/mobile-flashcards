import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionView from './QuestionView'
import ResultView from './ResultView'

class QuizView extends Component {
  state = {
    index: 0,
    correctAnswers: 0,
    flipCard: false,
    showResult: false,
  }
  
  onCardFlip = ()=>{
    this.setState((prevState) => ({
      flipCard: !prevState.flipCard
    }))
  }

  onQuestionAnswer = (answer) => {
    const {decks, route} = this.props
    const {correctAnswers, index} = this.state
    const deck = decks[route.params.id]

    this.setState((prevState) => ({
      correctAnswers: answer ? prevState.correctAnswers + 1 : prevState.correctAnswers,
      index: ((prevState.index + 1) < deck.questions.length) ? prevState.index + 1 : prevState.index,
      showResult: (prevState.index + 1) >= deck.questions.length
    }))
  }

  onRestartQuiz = ()=> {
    this.setState({
      index: 0,
      correctAnswers: 0,
      flipCard: false,
      showResult: false,
    })
  }

  onGoBackToDeck = ()=> {
    const {navigation} = this.props
    navigation.goBack()
  }
  
  render() {
    const {correctAnswers, index, flipCard, showResult} = this.state
    const { decks, route } = this.props
    const {id} = route.params
    const deck = decks[id]
    return (
        showResult ? (
          <ResultView correctAnswers={correctAnswers} 
            totalQuestions={deck.questions.length} 
            onRestartQuiz={this.onRestartQuiz} 
            onGoBackToDeck={this.onGoBackToDeck}
          />
        ) : (
          <QuestionView flipCard={flipCard} 
            id={id} index={index}
            onCardFlip={this.onCardFlip} 
            onQuestionAnswer={this.onQuestionAnswer} 
          />
        )
    )
  }
}

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(QuizView)