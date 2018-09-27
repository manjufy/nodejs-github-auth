const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const queryStr = require('querystring')
const util = require('util')
const octokit = require('@octokit/rest')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// endpoints
app.get('/', (req, res) => {
  res.json([{}])
})

app.get('/auth', async (req, res) => {
  const code = req.query.code

      // Make a post request to Github
    const response = await axios.post('https://github.com/login/oauth/access_token', {
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


    // Response is in the form of access_token=50d935da34d5bf48d0560e30d1f052ee56d030bc&scope=user%3Aemail&token_type=bearer
    const token = response.data

    res.json(
      queryStr.parse(token)
    )
})

app.listen(3333)
console.log('Listening on localhost:3333')