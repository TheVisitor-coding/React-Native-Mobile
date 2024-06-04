const removeBg = async (base64) => {
  const options = {
    method: 'POST',
    headers: {
      'x-api-key': process.env.REMOVE_BG_API_KEY,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      image_file_b64: base64.split(',')[1]
    })
  }

  try {
    const response = await fetch(process.env.REMOVE_BG_API_URL, options)
    const responseJson = await response.json()
    if (responseJson?.data?.result_b64) {
      return responseJson.data.result_b64
    } else {
      console.error(responseJson)
    }
  } catch (error) {
    console.error(error)
  }
}

export {
  removeBg
}
