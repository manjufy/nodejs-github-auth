const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// endpoints
app.get('/', (req, res) => {
  res.json([{}])
})

app.listen(3333)
console.log('Listening on localhost:3333')