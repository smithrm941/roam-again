const userProfile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

userProfile.get('/:id', (request, response, next) => {
  const name = request.params.id;
  users.findUserByName(name)
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
  }).catch(()=> next())
})

userProfile.get('/edit/:id', (request, response, next) => {
  const id = request.params.id;
  if(request.session.user.id != id){
    response.render('unauthorized')
  } else {
  return users.findUserById(id)
  .then((user) => {
    response.render('user', {user: user,
      loggedInProfile: request.session.user.id,
      edit:true,
      public: false})
    }).catch(()=> next())
  }
})

userProfile.post('/edit/:id', (request, response, next) => {
  const id = request.params.id;
  return users.findUserById(id)
  .then((user) => {
    const {name, current_city, content} = request.body
    console.log('What is req.body.content????', request.body.content)
    users.updateProfile(id, name, current_city, content)
    .then((user) => {
      request.session.user = user
      //session gets updated with new user name
      response.redirect(`/user/${user.name}`)
    })
  }).catch(()=> next())
})

module.exports = userProfile
