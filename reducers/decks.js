import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

export default function decks(state = {}, action){
  switch (action.type)
  {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD:
      const{deck, question, answer} = action.card
      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: [...state[deck].questions, {question, answer}]
        }
      }
    default :
      return state
  }
}
