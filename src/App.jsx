import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import MainNavigator from './navigation/Navigator'
import BootSplash from 'react-native-bootsplash'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'
import theme from './theme.json'

function App () {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <MainNavigator />
      </NavigationContainer>
    </ApplicationProvider>
  )
}

export default App
