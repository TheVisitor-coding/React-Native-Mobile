import { View, TouchableOpacity } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/cameraStyle'
import { useRef } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function CustomCamera () {
  const cameraRef = useRef(null)

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      console.log(image)
    }
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
          <Icon
            name='camera-iris' size={40} color='white'
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default CustomCamera
