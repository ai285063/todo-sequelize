const express = require('express')
const router = express.Router()

// const passport = require('passport')
// const bcrypt = require('bcryptjs')

router.get('/users/login', (req, res) => {
  res.render('login')
})

router.post('/users/login', (req, res) => {
  res.send('login')
})

router.get('/users/register', (req, res) => {
  res.render('register')
})

router.post('/users/register', (req, res) => {
  res.send('register')
})

router.get('/users/logout', (req, res) => {
  res.send('logout')
})

module.exports = router
