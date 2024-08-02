const express = require('express') // importing the express package
const app = express() // starting a server
const port = 3000

app.use(express.static('public')) // connecting Express to the public folder

// Home route
app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/views/index.html`)
})

// About route
app.get('/about', function (req, res) {
    res.sendFile(`${__dirname}/views/about.html`)
})

// Contact route
app.get('/data', function (req, res) {
    const list = [{dogName: 'John', breed: 'labrador'}]
    res.json(list)
})

app.listen(port, ()=> console.log(`App is running on port ${port}`)) // defines which port should be used for incoming requests from clients