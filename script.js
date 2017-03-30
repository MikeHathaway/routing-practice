const express = require('express')
const app = express()
const houses = require('./house_data.js')
const members = require('./member_data.js')

const allMembers = (req,res) => res.send(members)
const allHouses = (req,res) => res.send(houses)

const specificMembers = (req,res,next) => {
  const index = req.params.index
  const error = {status: 404, message: 'ya done fucked up'}
  members[index] ? res.send(members[index]) : next(error)
}

const specificHouses = (req,res,next) => {
  const index = req.params.index
  const error = {status: 404, message: 'ya done fucked up'}
  houses[index] ? res.send(houses[index]) : next(error)
  }


const errorHandler = (err,req,res,next) => {
  console.log('we in the errors yo',err)
  res.status(err.status).json(err)
}

app.get('/',(req,res) => {
  res.send('please select /houses or /members')
})


app.get('/members',allMembers)
app.get('/houses',allHouses)
app.get('/members/:index',specificMembers)
app.get('/houses/:index',specificHouses)
app.use(errorHandler)



app.listen(8000,(req,res) => {
  console.log('We\'re family friendly')
})
