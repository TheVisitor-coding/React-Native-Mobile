import { Button, Text, View } from 'react-native'
import styles from '../styles/HomeScreenStyle'

function HomeScreen ({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }

  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Profile'
          onPress={handlePress}
        />
      </View>
    </>
  )
}

export default HomeScreen
