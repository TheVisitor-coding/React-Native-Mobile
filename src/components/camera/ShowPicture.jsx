import { Button, Layout, Spinner, Text } from '@ui-kitten/components'
import { useState } from 'react'
import { Image } from 'react-native'
import { cutoutImage } from '../../services/PhotoroomApi'

function ShowPicture ({ result, onExit }) {
  const [base64Img, setBase64Img] = useState(`data:image/png;base64,${result}`)
  const [isLoading, setIsLoading] = useState(false)

  const handleCutoutPicture = async () => {
    setIsLoading(true)
    try {
      const imageCutout = await cutoutImage(base64Img)
      if (imageCutout) {
        setBase64Img(`data:image/png;base64,${imageCutout}`)
      }
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  return (
    <>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, width: '100%' }}>
        <Text category='h2'>Photo prise</Text>
        <Image source={{ uri: base64Img }} style={{ width: 300, height: 300, borderWidth: 1, borderColor: 'red' }} />
        <Layout style={{ flexDirection: 'row', gap: 16 }}>
          <Button onPress={onExit}>Retour</Button>
          <Button
            onPress={handleCutoutPicture}
            appearance='outline'
          >
            {
                isLoading
                  ? <Spinner size='small' />
                  : 'Détourer la photo'
            }
          </Button>
        </Layout>
      </Layout>
    </>
  )
}

export default ShowPicture
