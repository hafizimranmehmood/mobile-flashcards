import {getDeckList, saveDeck, addCardToDeck} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

function receiveDecks(decks){
  return{
    type : RECEIVE_DECKS,
    decks
  }
}

export function handleInitialData()
{
  return (dispatch) => {
    dispatch(showLoading())
    return getDeckList()
    .then((decks) => {
      dispatch(receiveDecks(decks))
      dispatch(hideLoading())
    })
  }
}

function addDeck (title) {
  return {
    type: ADD_DECK,
    title,
  }
}

export function handleAddDeck(title)
{
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(addDeck(title)) 
    return saveDeck(title)
    .then((decks) => {
      dispatch(hideLoading())
    })
  }
}

function addCard (card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function handleAddCard(deck, question, answer)
{
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(addCard({deck, question, answer}))
    return addCardToDeck(deck, {question, answer})
    .then((decks) => {
      dispatch(hideLoading())
    })
  }
}
