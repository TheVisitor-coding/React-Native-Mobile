import axios from 'axios'

const api = axios.create({
  baseURL: process.env.CLARIFAI_API_URL,
  headers: {
    Authorization: `Key ${process.env.CLARIFAI_API_KEY}`,
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

const identifyImageWithLlava = async (imageBase64) => {
  try {
    const res = await api.post('/users/liuhaotian/apps/llava/models/llava-v1_6-mistral-7b/versions/763595a061834b12adb55c929716145e/outputs', {
      inputs: [
        {
          data: {
            image: {
              base64: imageBase64
            },
            text: {
              raw: "For an e-commerce site, I'd like you to describe the product in this image. Your tone should be engaging and commercial. You must respond with an JSON object directly, containing: the product title named “title”, the product description named “description” and 5 keywords associated with the product in an array named “tags”. I need to parse it directly with code."
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
  identifyImage,
  identifyImageWithLlava
}
