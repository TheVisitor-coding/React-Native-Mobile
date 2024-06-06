import { Dimensions, StyleSheet } from 'react-native'
const { height, width } = Dimensions.get('window')
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height,
    width
  },
  camera: {
    height,
    width
  },
  cameraButton: {
    position: 'absolute',
    bottom: 80,
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraSwitch: {
    position: 'absolute',
    bottom: 80,
    left: 70,
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraFlash: {
    position: 'absolute',
    bottom: 80,
    right: 70,
    height: 70,
    width: 70,
    borderRadius: 50,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraZoom: {
    position: 'absolute',
    bottom: 130,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'white',
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
