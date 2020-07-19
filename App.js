import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import AppStatusBar from './components/AppStatusBar'
import AppStackNavigator from './components/AppStackNavigator'
import { setLocalNotification } from './utils/helpers'

class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <AppStatusBar backgroundColor={'#00a69e'} barStyle="light-content" />
        <AppStackNavigator />
      </Provider>
    )
  }
}

export default App;