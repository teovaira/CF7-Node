const express = require("express");
const app = express()

app.use(express.json());

const user = require('./routes/user.routes');
const userProduct = require('./routes/user.products.routes')
const auth = require('./routes/auth.routes');

app.use('/api/auth', auth);
app.use('/api/users', user);
app.use('/api/user-product', userProduct);

module.exports = app