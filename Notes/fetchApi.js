const url = 'https://jsonplaceholder.typicode.com/todos/1'

// ES5
fetch(url)
  .then(function(response) {
    return response.json()
  })
  .then(function(jsonResponse){
    console.log('The response', jsonResponse)
  })
  .catch(function(error){
    console.log('This will run when there is an error', error)
  })


// ES6
fetch(url)
  .then(response => response.json())
  .then(jsonResponse => console.log('The response', jsonResponse))
  .catch(error => console.log('This will run when there is an error', error))