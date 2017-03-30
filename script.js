const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const data = require('./data')

//Generalized response logic
const getResource = (resource) => {
  return (req,res) => {
    res.send(data[resource])
  }
}

const getSpecificResource = (resource) => {
  const error = {status: 404, message: 'ERROR'}

  return (req,res,next) => {
    const index = req.params.index
    const dataSet = data[resource][index]
    dataSet ? res.send(dataSet) : next(error)
  }
}

const errorHandler = (err,req,res,next) => {
  res.status(err.status).json(err)
}


app.get('/',(req,res) => {
  res.send('please select /houses or /members')
})

app.post('/members/:index',(req,res) => {})

app.get('/members',getResource('members'))
app.get('/houses',getResource('houses'))

app.get('/members/:index',getSpecificResource('members'))
app.get('/houses/:index',getSpecificResource('houses'))

app.use(errorHandler)


app.listen(port,(req,res) => {
  console.log('We\'re family friendly')
})
