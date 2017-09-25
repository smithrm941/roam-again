const router = require('express').Router()
const {signUpUser, logInUser} = require('../../model/users')

router.get('/', (request, response) => {
  response.render('splash')
})

router.get('/login', (request, response) => {
  response.render('login')
})

module.exports = router
