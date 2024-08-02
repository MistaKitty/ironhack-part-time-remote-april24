const express = require("express");
const app = express();
const port = 3000;

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res)=> {
    // console.log(req.ip)
    let data = {
        name: "Ironhacker",
        lastName: "Rocking it!",
        address: "Your heart",
        cities: ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo"]
      };

    res.render('index', {lastName: 'Chambrier', test: 'Welcome to hbs world :)', data });
})

app.listen(port, ()=> console.log(`Express-hbs-demo app is running on port ${port}`))