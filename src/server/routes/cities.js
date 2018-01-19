const cityProfile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

cityProfile.get('/:id', (request, response, next) => {
  const id = request.params.id;
  cities.findCityById(id)
    .then((city) => {
      posts.findPostsByCity(city.id)
      .then((posts) => {
        response.render('city', {city,
          user: request.session.user,
          posts,
          loggedInProfile: request.session.user.id})
      })
    }).catch(()=> next())
})

cityProfile.get('/:id/newpost', (request, response, next) => {
  const id = request.params.id
  cities.findCityById(id)
    .then((city) => {
      response.render('addpost', {city, loggedInProfile: request.session.user.id, message: ''})
    }).catch(()=> next())
})

cityProfile.post('/:id/newpost', (request, response, next) => {
  const id = request.params.id
  const author = request.session.user.id
  const {title, content} = request.body
  const location = id
  cities.findCityById(id)
    .then((city) => {
      if((title.length > 200 || title.length < 1) || (title.length > 200 || title.length < 1) && content.length < 10){
        response.render('addpost', {city, loggedInProfile: request.session.user.id, message: 'Title must be between 1 and 200 characters'})
      } else if (content.length < 10 || (title.length > 200 || title.length < 1) && content.length < 10){
        response.render('addpost', {city, loggedInProfile: request.session.user.id, message: 'Post must be at least 10 characters long.'})
      } else {
        posts.createPost(title, author, content, location)
        .then((post) => {
          setTimeout(() => {response.redirect(`/post/${post.id}`)}, 3000)
        })
      }
  }).catch(()=> next())
})

module.exports = cityProfile
