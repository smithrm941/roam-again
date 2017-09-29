const userprofile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

userprofile.get('/:id', (request, response) => {
  const id = request.params.id;
  users.findUserById(id)
  .then((user) => {
     posts.findPostsByAuthor(user.id)
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

userprofile.get('/edit/:id', (request, response) => {
  const id = request.params.id;
  if(request.session.user.id != id){
    response.render('unauthorized')
  } else {
    response.render('user', {user: request.session.user,
      loggedInProfile: request.session.user.id,
      edit:true,
      public: false})
  }
})

userprofile.post('/edit/:id', (request, response) => {
  const id = request.params.id;
  const {name, current_city} = request.body
  users.updateProfile(id, name, current_city)
  .then((user) => {
    response.redirect(`/user/${id}`)
  })
})

module.exports = userprofile
