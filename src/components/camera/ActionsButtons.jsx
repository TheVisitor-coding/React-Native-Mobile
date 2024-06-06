import { Layout, Spinner } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../../styles/cameraStyle'
import { getBase64FromImage } from '../../utils/image'
import { useState } from 'react'
import { flashIcon } from '../../utils/camera'
import { CameraType } from 'react-native-camera-kit'

function ActionsButtons ({ cameraRef, cameraType, setCameraType, flashIconIndex, setFlashIconIndex, setZoom, navigation }) {
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Take a picture and set the result to the state
   */
  const handleTakePicture = async () => {
    setIsLoading(true)
    if (cameraRef.current) {
      const image = await cameraRef.current.capture()
      if (image) {
        const base64 = await getBase64FromImage(image.uri)
        navigation.navigate('Picture', { base64 })
      }
    }
    setIsLoading(false)
  }

  /**
   * Switch the camera type between front and back
   */
  const handleSwitchCamera = () => {
    setCameraType(cameraType === CameraType.Front ? CameraType.Back : CameraType.Front)
    setZoom(1)
  }

  /**
   * Switch the flash mode between auto, on and off
   */
  const handleSwitchFlashMode = () => {
    flashIconIndex === 2 ? setFlashIconIndex(0) : setFlashIconIndex(flashIconIndex + 1)
  }

  return (
    <>
      <Layout style={{ justifyContent: 'center', alignItems: 'center' }}>
        {/* FlashMode Button */}
        <TouchableOpacity
          style={styles.cameraFlash}
          onPress={handleSwitchFlashMode}
          disabled={cameraType === CameraType.Front}
        >
          <Icon
            name={flashIcon[flashIconIndex].name} size={30} color='white'
          />
        </TouchableOpacity>

        {/* Take Picture Button */}
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

        {/* Switch Camera Button */}
        <TouchableOpacity
          style={styles.cameraSwitch}
          onPress={handleSwitchCamera}
        >
          <Icon
            name='camera-party-mode' size={30} color='white'
          />
        </TouchableOpacity>
      </Layout>
    </>
  )
}

export default ActionsButtons
