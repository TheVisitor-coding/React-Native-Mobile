const cutoutImage = async (base64) => {
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': process.env.PHOTOROOM_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      image_file_b64: base64.split(',')[1]
    })
  }

  try {
    const response = await fetch(process.env.PHOTOROOM_API_URL, options)
    const responseJson = await response.json()
    if (responseJson?.result_b64) {
      return responseJson.result_b64
    } else {
      console.error(responseJson)
    }
  } catch (error) {
    console.error(error)
  }
}

export {
  cutoutImage
}
