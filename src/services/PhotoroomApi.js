// import axios from 'axios'

// const api = axios.create({
//   headers: {
//     'X-Api-Key': '15745b5f2ee6a45fc784ccea9ea35f02a1648892',
//     'Content-Type': 'application/json',
//     Accept: 'image/png, application/json'
//   }
// })

// const cutoutImage = async (base64) => {
//   try {
//     const response = await api.post('https://sdk.photoroom.com/v1/segment', {
//       body: JSON.stringify({
//         image_file_b64: base64.split(',')[1]
//       })
//     })
//     console.log('response', response, response.data)
//   } catch (error) {
//     console.error(error)
//   }
// }

const cutoutImage = async (base64) => {
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': '15745b5f2ee6a45fc784ccea9ea35f02a1648892',
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      image_file_b64: base64.split(',')[1]
    })
  }

  try {
    const response = await fetch('https://sdk.photoroom.com/v1/segment', options)
    const responseJson = await response.json()
    return responseJson.result_b64
  } catch (error) {
    console.error(error)
  }
}

export {
  cutoutImage
}
