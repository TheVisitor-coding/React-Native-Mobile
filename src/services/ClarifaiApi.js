import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.clarifai.com/v2',
  headers: {
    Authorization: 'Key a53727b301404918865a9dc2fbc59834',
    'Content-Type': 'application/json'
  }
})

const identifyImage = async (imageBase64) => {
  try {
    const res = await api.post('/users/clarifai/apps/main/models/general-image-recognition/versions/aa7f35c01e0642fda5cf400f543e7c40/outputs', {
      inputs: [
        {
          data: {
            image: {
              base64: imageBase64
            }
          }
        }
      ]
    })
    return res.data
  } catch (e) {
    console.error(e)
  }
}

export {
  identifyImage
}
