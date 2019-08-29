export const postNewOrder = (newOrder) => {  
  const options = {
    method: 'POST',
    body: JSON.stringify(newOrder),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  return fetch('http://localhost:3001/api/v1/purchases', options)
  .then(response => {
    console.log(response)
    if(!response.ok) {
      throw Error('Error posting new order')
    }
    return response.json()
  })
  .catch(error => {
    throw Error(error.message)
  })
}

