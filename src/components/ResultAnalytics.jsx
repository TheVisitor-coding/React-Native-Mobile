import { Text, Button, List, View } from 'react-native'
import styles from '../styles/resultStyle'

function ResultItem ({ item }) {
  let color = ''
  if (item.value > 0.95) {
    color = 'green'
  } else if (item.value <= 0.95 && item.value > 0.90) {
    color = 'orange'
  } else {
    color = 'red'
  }

  return (
    <View style={styles.listItem}>
      <Text style={{ color, fontWeight: 'bold' }}>{item.name}</Text>
      <Text style={{ color, fontWeight: 'bold' }}>{(item.value * 100).toFixed(2)} %</Text>
    </View>
  )
}

function Result ({ result, onExit }) {
  const concepts = result?.outputs[0]?.data?.concepts
  return (
    <>
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
      <Button
        title='Retour' style={{
          flex: 1
        }} onPress={onExit}
      />
    </>
  )
}

export default Result
