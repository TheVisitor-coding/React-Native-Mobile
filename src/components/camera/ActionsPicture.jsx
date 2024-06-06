import { Button, Layout, Spinner } from '@ui-kitten/components'

function ActionsPicture (

  {
    handleAnalysePicture,
    handleRemoveBackground,
    isLoading,
    isLoadingAnalyse
  }

) {
  return (
    <Layout style={{ flexDirection: 'row', gap: 16, paddingBottom: '10%', width: '100%', justifyContent: 'center' }}>
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
        onPress={handleAnalysePicture}
      >
        {
                isLoadingAnalyse
                  ? <Spinner size='small' status='basic' />
                  : 'Analyser la Photo'
        }
      </Button>
    </Layout>
  )
}

export default ActionsPicture
