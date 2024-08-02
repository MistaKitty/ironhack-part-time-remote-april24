const mongoose = require('mongoose');

const User = require('./models/User.model');
const Cat = require('./models/Cat.model');

// const promise1 = User.insertMany([{username: 'Bella', gender: 'female'}, {username: 'Joanna', gender: 'female'}]);
// const promise2 = Cat.insertMany([{name: 'Giovanni', race:'grey'}, {name: 'Kat', race:'black'}, {name: 'Mitsi', race:'black'}])

mongoose
  .connect('mongodb://localhost:27017/mongoose-demo-3')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  // .then(()=> {
  //   return Cat.create({
  //     name: 'John',
  //     gender: 'male',
  //     color: 'black',
  //     location: {
  //       address: '11 rue montaigne',
  //       city: 'Paris'
  //     }
  //   })
  // })
  .then(()=>{
    return Cat.updateOne({name: 'John'}, {color:'gray'})
  })
  .then(updatedCat => {
    console.log('updatedCat', updatedCat)
  })
  // .then(()=> {
  //   return Promise.all([promise1, promise2])
  // })
  // .then(values => {
  //   console.log('values', values)
  // })
  // .then(()=> {
  //   return Cat.find();
  // })
  // .then(cats => {
  //   console.log('cats', cats)
  // })
  .then(()=> {
    return mongoose.connection.close();
})
 .then(()=> console.log('Connection to MongoDB has closed'))
  .catch(err => console.error('Error connecting to mongo', err));

  