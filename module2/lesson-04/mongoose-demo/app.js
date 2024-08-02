const mongoose = require('mongoose');

const Cat = mongoose.model('Cat', { name: String, race: String });
const User = mongoose.model('User', { username: String, gender: String });

mongoose
  .connect('mongodb://127.0.0.1:27017/mongoose-demo-3')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
//   .then(()=> User.create({username: 'John', gender: 'male'}))
//   .then(()=> User.create({username: 'Rosie', gender: 'female'}))
  .then(()=> {
    return Cat.find();
  })
  .then(cats => {
    console.log('cats', cats)
  })
  .then(()=> {
    return mongoose.connection.close();
})
 .then(()=> console.log('Connection to MongoDB has closed'))
  .catch(err => console.error('Error connecting to mongo', err));

  