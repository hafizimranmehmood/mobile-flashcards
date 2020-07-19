import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { handleInitialData } from '../actions'
import Button from './Button'
import DeckItem from './DeckItem'

class DeckList extends Component {
  
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(handleInitialData())
  }

  onItemClick = (deck)=> {
    const {navigation} = this.props
    navigation.navigate('DeckView', {id: deck})
  }

  renderItem = (deck) => {
    return (
      <DeckItem key={deck.item.title} 
        deck={deck.item} 
        onItemClick={this.onItemClick} />
    )
  }

  render(){

    const {decks, navigation} = this.props
    
    return (
      <View style={styles.main}>
      {
        Object.keys(decks).length >= 0 ?
        (
          <FlatList
            data={Object.values(decks)}
            renderItem={this.renderItem} 
            keyExtractor={(deck)=> deck.title}
          />
        ) : (
          <View style={styles.noDeck}>
            <Text style={styles.noDeckText}>No decks to show</Text>
            <Button onPress={() => navigation.navigate('NewDeck')}>
                New Deck
            </Button>
          </View>
        )
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignSelf: 'stretch',
    padding: 5
  },
  noDeck: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDeckText: {
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    marginBottom: 60
  },
});

function mapStateToProps ({ decks }) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)