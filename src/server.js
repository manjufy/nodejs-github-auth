const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// endpoints
app.get('/', (req, res) => {
  res.json([{}])
})

app.get('/auth', (req, res) => {
  const code = req.query.code
  console.log('CODE', code)
      // Make a post request to Github
    return axios.post('https://github.com/login/oauth/access_token', {
      client_id: '13713e448956673736bb',
      client_secret: 'c1b575cce6f3fc4e77ec829c6bcd7657ebd6a9ce',
      code,
      accept: 'json',
      crossDomain: true
    }, {
      headers: {
        'crossDomain': true
      }
    })
})

app.listen(3333)
console.log('Listening on localhost:3333')