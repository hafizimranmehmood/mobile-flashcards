import { AsyncStorage } from 'react-native'
const DECK_STORAGE_KEY = 'deck_storage_key'

const data = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function saveDeck(title){
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title: title,
      questions: []
    }
  }))
}

export function getDeckList(){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      if(results === null){
        return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        .then(() => {
          return AsyncStorage.getItem(DECK_STORAGE_KEY)
        })
        .then((results) => {
          return JSON.parse(results)
        })
      } else {
        return JSON.parse(results)
      }
    }
  )
}

export function addCardToDeck(deck, card){
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then((results) => {
    const decks = JSON.parse(results);
    decks[deck].questions.push(card)
    return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
  })
  .then(() => {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
  })
  .then((results) => {
    return JSON.parse(results)
  })
}