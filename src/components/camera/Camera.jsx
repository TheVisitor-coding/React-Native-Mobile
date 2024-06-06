import { View, TouchableOpacity, Animated } from 'react-native'
import { Camera, CameraType } from 'react-native-camera-kit'
import styles from '../../styles/cameraStyle'
import { useRef, useState } from 'react'
import { flashIcon } from '../../utils/camera'
import ActionsButtons from './ActionsButtons'

function CustomCamera ({ navigation }) {
  const cameraRef = useRef(null)
  const [cameraType, setCameraType] = useState(CameraType.Front)
  const [flashIconIndex, setFlashIconIndex] = useState(0)
  const [zoom, setZoom] = useState(1)

  return (
    <>
      <View style={styles.container}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          cameraType={cameraType}
          zoomMode='on'
          zoom={zoom}
          maxZoom={6}
          flashMode={flashIcon[flashIconIndex].mode}
        />
        <TouchableOpacity
          style={styles.cameraZoom}
          onPress={() => setZoom(1)}
        >
          <Animated.Text>
            {zoom ? zoom.toFixed(1) : '?'}x
          </Animated.Text>
        </TouchableOpacity>

        <ActionsButtons
          cameraRef={cameraRef}
          cameraType={cameraType}
          setCameraType={setCameraType}
          flashIconIndex={flashIconIndex}
          setFlashIconIndex={setFlashIconIndex}
          setZoom={setZoom}
          navigation={navigation}
        />
      </View>
    </>
  )
}

export default CustomCamera
