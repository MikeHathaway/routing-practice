const express = require('express')
const app = express()
const houses = require('./house_data.js')
const members = require('./member_data.js')

app.get('/',(req,res) => {
  res.send('please select /houses or /members')
})

app.get('/members',(req,res) => {
  res.send(members)
})

app.listen(8000,(req,res) => {
  console.log('We\'re family friendly')
})
