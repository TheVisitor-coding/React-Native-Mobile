import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { sanitizeClarifaiResponse } from '../utils/Strings'
import { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'

function TagsList ({ data }) {
  const [tagsList, setTagsList] = useState(data)
  const [newTag, setNewTag] = useState('')

  const handleDelete = (index) => {
    setTagsList(tagsList.filter((tag, id) => id !== index))
  }

  const handleChange = (e) => {
    setNewTag(e)
  }

  const handleSubmitTag = (e) => {
    e.preventDefault()
    if (newTag !== '') {
      setTagsList([...tagsList, newTag])
      setNewTag('')
    }
  }

  return (
    <Layout style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      width: '100%',
      alignItems: 'center'
    }}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Tags: </Text>
      {
        tagsList && tagsList.map((tag, index) => (
          <Layout
            style={{ padding: 8, borderRadius: 8, backgroundColor: '#D6FACF', flexDirection: 'row', alignItems: 'center', width: 'auto' }}
            key={index}
          >
            <Text category='s1'>{tag}</Text>
            <TouchableOpacity onPress={() => handleDelete(index)}>
              <Icon
                name='cross' size={20} style={{ color: 'black' }}
              />
            </TouchableOpacity>
          </Layout>
        ))
      }

      <Input
        placeholder='Ajouter un tag' value={newTag}
        onChangeText={handleChange}
        onSubmitEditing={handleSubmitTag}
      />

    </Layout>
  )
}

function ResultScreen ({ route, navigation }) {
  const { result } = route.params
  const [changedata, setChangeData] = useState({
    title: '',
    description: ''
  })

  const data = sanitizeClarifaiResponse(result)
  console.log(JSON.stringify(data, null, 2))

  // Model Llava Clarifai
  // const concepts = result?.outputs[0]?.data?.regions[0]?.data?.concepts

  // Model Basic Clarifai
  // const concepts = result?.outputs[0]?.data?.concepts
  return (
    <>
      <KeyboardAvoidingView style={{ width: '100%', height: '100%' }} behavior='height'>
        <Layout style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%', paddingTop: '10%' }}>
          <Layout style={{ width: '90%', gap: 16 }}>
            <Text style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginBottom: 20
            }}
            >Résultat de l'analyse
            </Text>
            <Input
              selection={{ start: 0, end: 0 }}
              label='Titre'
              value={
              changedata.title || data?.title
            } onChange={
            (value) => setChangeData({ ...changedata, title: value })
          }
            />
            <Input
              label='Description'
              style={{
                maxHeight: 250
              }}
              multiline
              value={
            changedata.description || data?.description
          } onChange={(value) => setChangeData({ ...changedata, description: value })}
            />

            <TagsList data={data?.tags} />
          </Layout>

          <Button style={{ width: '100%' }} onPress={() => navigation.goBack()}>Retour</Button>
        </Layout>
      </KeyboardAvoidingView>
    </>
  )
}

export default ResultScreen
