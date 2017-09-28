const router = require('express').Router()
const {signUpUser, logInUser, findUserByEmail, findUserById, updateProfile} = require('../../model/users')
const {findPostsByAuthor, findPostById, findPostAuthor, findPostCity} = require('../../model/posts')
const {findCityById} = require('../../model/cities')

const {ensureLoggedIn} = require('../middleware')

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
   logInUser(email, password)
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
    findUserByEmail(email)
    .then((user) => {
      if(user){
        response.render('signup', {user: null, message: 'User already exists.'})
      } else if(!user && password != confirmPassword){
        response.render('signup', {user: null, message: 'Passwords do not match.'})
      } else {
        signUpUser(email, password)
        .then((user) => {
          request.session.user = user;
          response.redirect(`/user/${user.id}`)
        })
      }
    })
})

router.use(ensureLoggedIn)

router.get('/user/:id', (request, response) => {
  const id = request.params.id;
  findUserById(id)
  .then((user) => {
     findPostsByAuthor(user.id)
    .then((posts) => {
        if(request.session.user.id === user.id){

          response.render('user', {user,
            posts,
            loggedInProfile: request.session.user.id,
            edit:false,
            public: false})

        } else if (request.session.user.id !== user.id){

          response.render('user', {user,
            posts,
            loggedInProfile: request.session.user.id,
            edit:false,
            public: true})
        }
    })
  }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

router.get('/user/edit/:id', (request, response) => {
  const id = request.params.id;
  if(request.session.user.id != id){
    response.render('unauthorized')
  } else {
    response.render('user', {user: request.session.user,
      loggedInProfile: request.session.user.id,
      edit:true, public: false})
  }
})

router.post('/user/edit/:id', (request, response) => {
  const id = request.params.id;
  const {name, current_city} = request.body
  updateProfile(id, name, current_city)
  .then((user) => {
    response.redirect(`/user/${id}`)
  })
})

router.get('/post/:id', (request, response) => {
  const id = request.params.id;
  findPostById(id)
  .then((post) => {
    findPostAuthor(post.id)
    .then((author) => {
      findPostCity(post.id)
      .then((city) => {
        response.render('post', {post, author, city, user: request.session.user})
      })
    })
  }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

router.get('/city/:id', (request, response) => {
  const id = request.params.id;
  findCityById(id)
  // .then((city) => {
  //   findPostAuthor(post.id)
  //   .then((author) => {
  //     findPostCity(post.id)
      .then((city) => {
        response.render('city', {/*post, author,*/ city, user: request.session.user})
      })
    // })
  /*})*/.catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

router.get('/logout', (request, response) => {
  request.session.user = null;
  response.redirect('/')
})

module.exports = router
