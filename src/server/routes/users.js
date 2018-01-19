const userProfile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

userProfile.get('/:id', (request, response, next) => {
  const id = request.params.id;
  users.findUserById(id)
  .then((user) => {
     posts.findPostsByAuthor(user.id)
    .then((posts) => {
        if(request.session.user.id === user.id){
          response.render('user', {user,
            posts,
            loggedInProfile: request.session.user.name,
            edit:false,
            public: false}
          )

        } else if (request.session.user.id !== user.id){
          response.render('user', {user,
            posts,
            loggedInProfile: request.session.user.name,
            edit:false,
            public: true}
          )
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
      loggedInProfile: request.session.user.name,
      edit:true,
      public: false})
    }).catch(()=> next())
  }
})

userProfile.post('/edit/:id', (request, response, next) => {
  const id = request.params.id;
  return users.findUserById(id)
  .then((user) => {
      const {name, current_city, current_photo, new_photo} = request.body
    if(!new_photo) {
      users.updateProfile(id, name, current_city, current_photo)
      .then((user) => {
        request.session.user = user
        response.redirect(`/user/${user.id}`)
      })
    } else if (new_photo) {
      const {name, current_city, new_photo} = request.body
      users.updateProfile(id, name, current_city, new_photo)
      .then((user) => {
        request.session.user = user
        response.redirect(`/user/${user.id}`)
      })
    }
  }).catch(()=> next())
})

module.exports = userProfile
