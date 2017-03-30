const express = require('express')
const app = express()

app.get('/',(req,res) => {
  res.send('Hello WORLD')
})

app.listen(8000,(req,res) => {
  console.log('We\'re family friendly')
})
