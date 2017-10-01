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
  cities.findCityById(id)
    .then((city) => {
      response.render('addpost', {city, loggedInProfile: request.session.user.id})
    })
})

cityProfile.post('/:id/newpost', (request, response) => {
  const id = request.params.id
  const author = request.session.user.id
  const {title, content} = request.body
  const city = id
  posts.createPost(title, author, content, city)
  .then((post) => {
    //some sort of successful post mesage before redirect here....
    response.redirect(`/city/${id}`)
  })
})

module.exports = cityProfile
