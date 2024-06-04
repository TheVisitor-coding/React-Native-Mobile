import { View, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/cameraStyle'
import { useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { getBase64FromImage } from '../../utils/image'
// import { identifyImage } from '../../services/ClarifaiApi'
import { Spinner } from '@ui-kitten/components'

function CustomCamera ({ setResult }) {
  const cameraRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTakePicture = async () => {
    setIsLoading(true)
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      if (image) {
        const base64 = await getBase64FromImage(image.uri)
        setResult(base64)
        // const res = await identifyImage(base64)
        // setResult && setResult(res)
      }
    }
    setIsLoading(false)
  }
  return (
    <>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          cameraType={CameraType.Front}
          zoomMode='on'
        />
        <TouchableOpacity
          style={styles.cameraButton}
          onPress={handleTakePicture}
        >
          {
            isLoading
              ? <Spinner size='large' />
              : <Icon
                  name='camera-iris' size={40} color='white'
                />
          }

        </TouchableOpacity>
      </View>
    </>
  )
}

export default CustomCamera
