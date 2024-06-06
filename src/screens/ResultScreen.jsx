import { View } from 'react-native'
import styles from '../styles/resultStyle'
import { Button, Layout, List, Text } from '@ui-kitten/components'
import { sanatizeClarifaiResponse } from '../utils/Strings'

function ResultItem ({ item }) {
  let color = 'black'
  if (item.value > 0.95) {
    color = 'green'
  } else if (item.value > 0.90 && item.value <= 0.95) {
    color = 'orange'
  } else if (item.value <= 0.90) {
    color = 'red'
  }
  return (
    <View style={styles.listItem}>
      <Text style={{ color, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ color, fontWeight: 'bold' }}>{(item.value * 100).toFixed(2)}%</Text>
    </View>
  )
}

function ResultScreen ({ route, navigation }) {
  const { result } = route.params

  const data = sanatizeClarifaiResponse(result)
  console.log(JSON.stringify(data, null, 2))

  // Model Llava Clarifai
  // const concepts = result?.outputs[0]?.data?.regions[0]?.data?.concepts

  // Model Basic Clarifai
  // const concepts = result?.outputs[0]?.data?.concepts
  return (
    <>
      <Layout>

        {/* <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <List
          style={styles.container}
          data={concepts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ResultItem item={item} />
          )}
          ListHeaderComponent={() => (
            <View style={styles.listItem}>
              <Text style={{ fontWeight: 'bold' }}>Concept</Text>
              <Text style={{ fontWeight: 'bold' }}>Précision</Text>
            </View>
          )}
        />
        <Button onPress={() => navigation.goBack()}>Retour</Button>
        {/* <Text>{JSON.stringify(result, null, 2)}</Text> */}
      </Layout>
    </>
  )
}

export default ResultScreen