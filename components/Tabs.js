import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import DeckList from './DeckList'
import NewDeck from './NewDeck'

const Tab = createMaterialTopTabNavigator();

export const Tabs = ()=> {
  return(
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#777777',
        style: {
          backgroundColor: '#00b5ad',
        },
        labelStyle: {
          textAlign: 'center',
          padding: 10,
          fontSize: 18,
          fontWeight: 'bold'
        },
        indicatorStyle: {
          borderBottomColor: '#fbbd08',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{
          tabBarLabel: 'Decks',
        }}  />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{
          tabBarLabel: 'New Deck',
        }} />
    </Tab.Navigator>
  )
}

export default Tabs