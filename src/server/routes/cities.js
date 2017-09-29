const cityProfile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

cityProfile.get('/:id', (request, response) => {
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
      }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

cityProfile.get('/:id/newpost', (request, response) => {
  const id = request.params.id
  response.render('addpost', {loggedInProfile: request.session.user.id})
})

module.exports = cityProfile
