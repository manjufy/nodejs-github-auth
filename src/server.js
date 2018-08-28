'use strict'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
import cors from 'cors'
import bodyParser from 'body-parser'
import express from 'express'
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(3333)
console.log('Listening on localhost:3333')