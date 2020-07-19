import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import Tabs from './Tabs'
import DeckView from './DeckView'
import CardView from './CardView'
import QuizView from './QuizView'

const Stack = createStackNavigator()

export const AppStackNavigator = ()=> {
  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: '#00b5ad' },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={Tabs}/>
        <Stack.Screen name="DeckView" component={DeckView} 
          options={{
            headerShown: true,
            title: 'Deck View',
            headerTitleStyle: {
              fontSize: 24,
            },
            cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
          }}
        />
        <Stack.Screen name="CardView" component={CardView} 
          options={{
            headerShown: true,
            title: 'Add Card',
            headerTitleStyle: {
              fontSize: 24
            },
          }}
        />
        <Stack.Screen name="QuizView" component={QuizView} 
          options={{
            headerShown: true,
            title: 'Quiz',
            headerTitleStyle: {
              fontSize: 24,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStackNavigator