import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import MainNavigator from './navigation/Navigator'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
