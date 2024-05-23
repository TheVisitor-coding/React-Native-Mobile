import { View } from 'react-native'
import styles from '../styles/HomeScreenStyle'
import CustomCamera from '../components/camera/Camera'

function HomeScreen ({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <CustomCamera />
      </View>
    </>
  )
}

export default HomeScreen
