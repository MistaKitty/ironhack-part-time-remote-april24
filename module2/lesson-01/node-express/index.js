const express = require('express') // import the 'express' package
const app = express() // creating a server
const port = 3000 // server port

app.get('/', (request, response) => {
  response.send('<h1>Homepage </h1>')
})

app.get('/about', (request, response) => {
    response.send('<h1>About page </h1>')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})