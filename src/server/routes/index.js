const router = require('express').Router()
const {signUpUser, logInUser, findUser} = require('../../model/users')

router.get('/', (request, response) => {
  response.render('splash')
})

router.get('/login', (request, response) => {
  response.render('login', {message: ''})
})

router.post('/login', (request, response) => {
  const {email, password} = request.body;
  return logInUser(email, password)
    .then((user) => {
      if(user){
        response.redirect(`/user/${user.id}`)
      } else {
        response.render('login', {message: 'Incorrect email or password.'})
      }
    })
})

router.get('/signup', (request, response) => {
  response.render('signup', {message: ''})
})

router.post('/signup', (request, response) => {
  const {email, password, confirmPassword} = request.body;
    return findUser(email)
    .then((user) => {
      if(user){
        response.render('signup', {message: 'User already exists.'})
      } else if(!user && password != confirmPassword){
        response.render('signup', {message: 'Passwords do not match.'})
      } else {
        return signUpUser(email, password)
        .then((user) => {
          response.redirect(`/user/${user.id}`)
        })
      }
    })
})

router.get('/user/:id', (request, response) => {
  const id = request.params;
  response.render('user')
})

module.exports = router
