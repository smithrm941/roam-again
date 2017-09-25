const router = require('express').Router()
const {signUpUser, logInUser} = require('../../model/users')

router.get('/', (request, response) => {
  response.render('splash')
})

router.get('/login', (request, response) => {
  response.render('login')
})

router.post('/login', (request, response) => {
  const {email, password} = request.body;
  console.log(email, password)
})

router.get('/signup', (request, response) => {
  response.render('signup')
})

router.post('/signup', (request, response) => {
  const {email, password} = request.body;
  console.log(email, password)
})

module.exports = router
