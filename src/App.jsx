import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import MainNavigator from './navigation/Navigator'
import BootSplash from 'react-native-bootsplash'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
