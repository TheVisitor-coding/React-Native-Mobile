import * as RNFS from '@dr.pogodin/react-native-fs'

const getBase64FromImage = async (fileURI) => {
  try {
    const res = await RNFS.readFile(fileURI, 'base64')
    return res
  } catch (e) {
    console.error(e)
  }
}

export {
  getBase64FromImage
}
