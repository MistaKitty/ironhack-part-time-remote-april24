const bcrypt = require('bcrypt');
const saltRounds = 10;
 
const plainPassword1 = 'HelloWorld';
const plainPassword2 = 'helloworld';

const salt = bcrypt.genSaltSync(saltRounds);
console.log('salt', salt)

const hash1 = bcrypt.hashSync(plainPassword1, salt);
const hash2 = bcrypt.hashSync(plainPassword2, salt);
console.log('hash1', hash1)
console.log('hash2', hash2)

const verifyPass1 = bcrypt.compareSync(plainPassword2, hash1);

console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);