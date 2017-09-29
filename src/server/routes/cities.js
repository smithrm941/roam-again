const cityprofile = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

cityprofile.get('/city/:id', (request, response) => {
  const id = request.params.id;
  cities.findCityById(id) //gives id and name of city
      .then((city) => {
        posts.findPostsByCity(city.id)
        .then((posts) => { //posts is an array
          response.render('city', {/*post, author,*/ city, user: request.session.user, posts})
        })
      }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

module.exports = cityprofile
