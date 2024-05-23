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
  }
})
