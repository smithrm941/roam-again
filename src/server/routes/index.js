const router = require('express').Router()
const {signUpUser, logInUser, findUserByEmail, findUserById} = require('../../model/users')

router.get('/', (request, response) => {
  if(!request.session.user){
    response.render('splash', {user: null})
  } else if (request.session.user) {
    response.render('splash', {user: request.session.user})
  }
})

router.get('/login', (request, response) => {
  response.render('login', {user: null, message: ''})
})

router.post('/login', (request, response) => {
  const {email, password} = request.body;
  return logInUser(email, password)
    .then((user) => {
      if(user){
        request.session.user = user;
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
    return findUserByEmail(email)
    .then((user) => {
      if(user){
        response.render('signup', {message: 'User already exists.'})
      } else if(!user && password != confirmPassword){
        response.render('signup', {message: 'Passwords do not match.'})
      } else {
        return signUpUser(email, password)
        .then((user) => {
          request.session.user = user;
          response.redirect(`/user/${user.id}`)
        })
      }
    })
})

router.get('/user/:id', (request, response) => {
  const id = request.params;
  if(!request.session.user){
    response.redirect('/login')
  } else if (request.session.user) {
    response.render('user', {user: request.session.user})
  }
})

router.get('/logout', (request, response) => {
  request.session.user = null;
  response.redirect('/')
})

module.exports = router
