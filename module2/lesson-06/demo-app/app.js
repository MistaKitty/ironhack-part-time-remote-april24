const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const User = require('./models/User.model');
const Product = require('./models/Product.model')

const users = [
    {username: 'Mario', email: 'mario@gmail.com', password: 'Hello123'},
    {username: 'Charlie', email: 'charlie@gmail.com', password: 'Hello123'},
    {username: 'James', email: 'james@gmail.com', password: 'Hello123'}
]

const products = [
    {name: 'T-shirt', description: 'A great t-shirt', quantity: 10},
    {name: 'Shirt', description: 'A great shirt', quantity: 10},
    {name: 'Hat', description: 'A great hat', quantity: 10}
]

app.set('view engine', 'hbs')
app.set('views', __dirname +'/views')
app.use(express.static(__dirname +'/public'))
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://localhost:27017/demo-app')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
//   .then(()=>{
//     const addUsers = User.create(users)
//     const addProducts = Product.create(products)
//     return Promise.all([addUsers, addProducts])
//   })
  .catch(err => console.error('Error connecting to mongo', err));

app.get('/', (req, res) => {
    Product.find() // ... asking for data from the Product MODEL and ...
    .then(productsFromDB => {
        res.render('index', {products: productsFromDB})
    })
    .catch(err => console.log(err))
})

app.get('/products/:productId', (req, res)=>{
    Product.findById(req.params.productId)
        .then(foundProduct => {
            res.render('product', {product: foundProduct})
        })
        .catch(err => console.log(err))
    
})

app.get('/products', (req, res)=>{ // display a form to add products
    res.render('create-products')
})

app.post('/products', (req, res)=>{ // create Products
    Product.create(req.body)
            .then(()=> res.redirect('/'))
            .catch(err => console.log(err))
})

app.get('/filter-products', (req, res)=>{
    console.log(req.query)
    if(req.query.quantity){
        Product.findOne({quantity: req.query.quantity})
                .then(foundProduct => {
                    res.render('filter-products', {product: foundProduct})
                })
    }
    else{
        res.render('filter-products')
    }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})