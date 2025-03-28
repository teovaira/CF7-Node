const express = require("express")
const app = express()
const port = 3000

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.use('/', express.static('files'))

app.get('/', (req, res) => {
  res.send("This is the home page!")
})

app.post('/user', (req, res) => {
  let data = req.body
  let username = req.body.username;
  let email = req.body.email
  console.log(data)
  res.send(`User data: ${username}, ${email}`)
})

app.post('/userForm', (req, res) => {
  let data = req.body
  console.log('Data', data)
  res.send('UserForm page')
})

app.use('/user1', (req, res) => {
  console.log("user1")
  res.send('user 1 page')
});

app.use('/user2', (req, res) => {
  console.log("user2")
  res.send('user 2 page')
});

app.use('/user2/hello', (req, res) => {
  console.log("user 2 hello")
  res.send('user 2 page hello')
});

app.listen(port, () => {
  console.log("Server is up and running.")
})