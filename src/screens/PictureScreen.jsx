import { Button, Layout } from '@ui-kitten/components'
import { useState } from 'react'
import { Image, ToastAndroid } from 'react-native'
// import { cutoutImage } from '../../services/PhotoroomApi'
import { removeBg } from '../services/RemoveBgApi'
import Icon from 'react-native-vector-icons/Ionicons'
import { identifyImage, identifyImageWithLlava } from '../services/ClarifaiApi'
import ActionsPicture from '../components/camera/ActionsPicture'

function PictureScreen ({ route, navigation }) {
  const { base64 } = route.params
  const [base64Img, setBase64Img] = useState(base64)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingAnalyse, setIsLoadingAnalyse] = useState(false)

  //   const handleCutoutPicture = async () => {
  //     setIsLoading(true)
  //     try {
  //       const imageCutout = await cutoutImage(base64Img)
  //       if (imageCutout) {
  //         setBase64Img(`data:image/png;base64,${imageCutout}`)
  //       }
  //     } catch (error) {
  //       console.error(error)
  //     }
  //     setIsLoading(false)
  //   }

  const handleRemoveBackground = async () => {
    setIsLoading(true)
    try {
      const imageWithoutBg = await removeBg(base64Img)
      if (imageWithoutBg) {
        setBase64Img(imageWithoutBg)
      } else {
        ToastAndroid.show('Erreur lors de la suppression du fond', ToastAndroid.LONG)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAnalysePicture = async () => {
    setIsLoadingAnalyse(true)
    try {
      // const result = await identifyImage(base64Img)
      const result = await identifyImageWithLlava(base64Img)
      if (result) {
        navigation.navigate('Result', { result })
      }
      setIsLoadingAnalyse(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <>
      <Layout style={{ flexDirection: 'row', alignContent: 'left', width: '100%', paddingLeft: '5%', paddingTop: '10%' }}>
        <Button
          style={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name='return-up-back' size={50} style={{ color: 'black' }}
          />
        </Button>
      </Layout>

      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', gap: 16 }}>
        <Image source={{ uri: `data:image/png;base64,${base64Img}` }} style={{ width: '90%', height: '90%' }} />
      </Layout>

      <ActionsPicture
        handleAnalysePicture={handleAnalysePicture}
        handleRemoveBackground={handleRemoveBackground}
        isLoading={isLoading}
        isLoadingAnalyse={isLoadingAnalyse}
      />

    </>
  )
}

export default PictureScreen
