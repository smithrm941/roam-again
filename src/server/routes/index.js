const router = require('express').Router()
const {signUpUser, logInUser, findUserByEmail, findUserById, updateProfile} = require('../../model/users')

router.get('/', (request, response) => {
  if(!request.session.user){
    response.render('splash', {user: null})
  } else if (request.session.user) {
    response.render('splash', {user: request.session.user})
  }
})

router.get('/login', (request, response) => {
  if(!request.session.user){
    response.render('login', {user: null, message: ''})
  } else if (request.session.user) {
    response.redirect('/')
  }
})

router.post('/login', (request, response) => {
  const {email, password} = request.body;
  return logInUser(email, password)
    .then((user) => {
      if(user){
        request.session.user = user;
        response.redirect(`/user/${user.id}`)
      } else if(user === undefined) {
        response.render('login', {user: null, message: 'Incorrect email or password.'})
      }
    })
})

router.get('/signup', (request, response) => {
  response.render('signup', {user: null, message: ''})
})

router.post('/signup', (request, response) => {
  const {email, password, confirmPassword} = request.body;
    return findUserByEmail(email)
    .then((user) => {
      if(user){
        response.render('signup', {user: null, message: 'User already exists.'})
      } else if(!user && password != confirmPassword){
        response.render('signup', {user: null, message: 'Passwords do not match.'})
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
  const id = request.params.id;
  if(request.session.user === undefined){
    response.redirect('/login')
  } else if (request.session.user) {
    return findUserById(id)
    .then((user) => {
      if(request.session.user.id === user.id){
        response.render('user', {user,
          loggedInProfile: request.session.user.id,
          edit:false,
          public: false})
      } else {
        response.render('user', {user,
          loggedInProfile: request.session.user.id,
          edit:false,
          public: true})
      }
    })
  }
})

router.get('/user/edit/:id', (request, response) => {
  const id = request.params;
  if(!request.session.user){
    response.redirect('/login')
  } else if (request.session.user) {
    response.render('user', {user: request.session.user,
      loggedInProfile: request.session.user.id,
      edit:true, public: false})
  }
})

router.post('/user/edit/:id', (request, response) => {
  const id = request.params.id;
  const {name, current_city} = request.body
  return updateProfile(id, name, current_city)
  .then((user) => {
    request.session.user = user;
    response.redirect(`/user/${id}`)
  })
})

router.get('/logout', (request, response) => {
  request.session.user = null;
  response.redirect('/')
})

module.exports = router
