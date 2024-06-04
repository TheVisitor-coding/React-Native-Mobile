import { View } from 'react-native'
import styles from '../styles/HomeScreenStyle'
import CustomCamera from '../components/camera/Camera'
import { useState } from 'react'
// import Result from '../components/Result'
import ShowPicture from '../components/camera/ShowPicture'

function HomeScreen ({ navigation }) {
  const [result, setResult] = useState(null)

  const onExit = () => {
    setResult(null)
  }
  return (
    <>
      <View style={styles.container}>
        {
          result
            // ? <Result result={result} onExit={onExit} />
            ? <ShowPicture result={result} onExit={onExit} />
            : <CustomCamera setResult={setResult} />
        }
      </View>
    </>
  )
}

export default HomeScreen
