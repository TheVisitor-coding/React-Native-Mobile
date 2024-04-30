import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import ProductsScreen from '../screens/ProductsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomTapBar from './Navbar'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const BottomTab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <CustomTapBar {...props} />}
    >
      <BottomTab.Screen
        options={{ headerShown: false, title: 'Home' }}
        name='HomeStack'
        component={StackNavigator}
      />
      <BottomTab.Screen name='Products' component={ProductsScreen} />
    </BottomTab.Navigator>
  )
}

export default TabNavigator
