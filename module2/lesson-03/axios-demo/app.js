const express = require("express");
const axios = require('axios')
const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res)=> {
    
    axios.get('https://catfact.ninja/facts')
        .then((response)=>{
            console.log('response', response.data.data)
            res.render('index', {facts: response.data.data})
        })
        .catch((err)=>console.log(err))

})

app.listen(port, ()=> console.log(`Axios-demo app running on port ${port}`))