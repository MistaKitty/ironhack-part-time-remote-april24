const express = require("express");
const app = express();
const port = 3000;
 
app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Good morning there!' })
  })
 
app.listen(port, ()=> console.log(`App is running on port ${port}`));