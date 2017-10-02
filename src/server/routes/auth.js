const auth = require('express').Router()
const users = require('../../model/users')

auth.get('/', (request, response) => {
  if(!request.session.user){
    response.render('splash', {user: null})
  } else if (request.session.user) {
    users.findUserById(request.session.user.id)
    .then((user) => {
      response.render('splash', {user: user})
    })
  }
})

auth.get('/login', (request, response) => {
  if(!request.session.user){
    response.render('login', {user: null, message: ''})
  } else if (request.session.user) {
    response.redirect('/')
  }
})

auth.post('/login', (request, response) => {
  const {email, password} = request.body;
   users.logInUser(email, password)
    .then((user) => {
      if(user){
        request.session.user = user;
        response.redirect(`/user/${user.id}`)
      } else if(user === undefined) {
        response.render('login', {user: null, message: 'Incorrect email or password.'})
      }
    })
})

auth.get('/signup', (request, response) => {
  response.render('signup', {user: null, message: ''})
})

auth.post('/signup', (request, response) => {
  const {email, password, confirmPassword} = request.body;
    users.findUserByEmail(email)
    .then((user) => {
      if(user){
        response.render('signup', {user: null, message: 'User already exists.'})
      } else if(!user && password != confirmPassword){
        response.render('signup', {user: null, message: 'Passwords do not match.'})
      } else {
        users.signUpUser(email, password)
        .then((user) => {
          request.session.user = user;
          response.redirect(`/user/${user.id}`)
        })
      }
    })
})

auth.get('/logout', (request, response) => {
  request.session.user = null;
  response.redirect('/')
})

module.exports = auth
