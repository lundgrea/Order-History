export const postNewOrder = (newIdea) => {  
  const options = {
    method: 'POST',
    body: JSON.stringify(newIdea),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  return fetch('http://localhost:3001/api/v1/purchases', options)
  .then(response => {
    if(!response.ok) {
      throw Error('Error posting new idea')
    }
    response.json()
  })
  .catch(error => {
    throw Error(error.message)
  })
}