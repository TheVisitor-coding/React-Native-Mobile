import { Button, Layout, Spinner, Text } from '@ui-kitten/components'
import { useState } from 'react'
import { Image, ToastAndroid } from 'react-native'
// import { cutoutImage } from '../../services/PhotoroomApi'
import { removeBg } from '../../services/RemoveBgApi'
import Icon from 'react-native-vector-icons/Ionicons'

function ShowPicture ({ result, onExit }) {
  const [base64Img, setBase64Img] = useState(`data:image/png;base64,${result}`)
  const [isLoading, setIsLoading] = useState(false)

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
        setBase64Img(`data:image/png;base64,${imageWithoutBg}`)
      } else {
        ToastAndroid.show('Erreur lors de la suppression du fond', ToastAndroid.LONG)
      }
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, width: '100%' }}>
        <Layout style={{ flexDirection: 'row', gap: 16, alignContent: 'left', width: '100%' }}>
          <Button onPress={onExit} style={{ backgroundColor: '' }}>
            <Icon
              name='return-up-back' size={80} color='black'
            />
          </Button>
        </Layout>
        <Text category='h2'>Photo prise</Text>
        <Image source={{ uri: base64Img }} style={{ width: 300, height: 300, borderWidth: 1, borderColor: 'red' }} />
        <Layout style={{ flexDirection: 'row', gap: 16 }}>
          <Button
            onPress={handleRemoveBackground}
            appearance='outline'
          >
            {
                isLoading
                  ? <Spinner size='small' />
                  : 'Détourer la photo'
            }
          </Button>
          <Button
            appearance='filled'
          >
            Analyser la Photo
          </Button>
        </Layout>
      </Layout>
    </>
  )
}

export default ShowPicture
