const cityPost = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

cityPost.get('/:id', (request, response, next) => {
  const id = request.params.id;
  posts.findPostById(id)
  .then((post) => {
    posts.findPostAuthor(post.id)
    .then((author) => {
      posts.findPostCity(post.id)
      .then((city) => {
        if(request.session.user.id === post.author){
          response.render('post', {post,
            authorId: post.author,
            author,
            city,
            user: request.session.user,
            edit: false,
            public: false,
          date_posted: post.date_posted})
        } else {
          response.render('post', {post,
            authorId: post.author,
            author,
            city,
            user: request.session.user,
            edit: false,
            public: true,
          date_posted: post.date_posted})
        }
      })
    })
  }).catch(()=> next())
})

cityPost.get('/edit/:id', (request, response, next) => {
  const id = request.params.id;
  posts.findPostById(id)
  .then((post) => {
    if(request.session.user.id != post.author){
      response.render('unauthorized')
    } else {
      posts.findPostAuthor(post.id)
      .then((author) => {
        posts.findPostCity(post.id)
        .then((city) => {
          response.render('post', {post,
            author,
            city,
            user: request.session.user,
            edit: true,
            public: false})
          })
        })
    }
  }).catch(()=> next())
})

cityPost.post('/edit/:id', (request, response, next) => {
  const id = request.params.id;
  const {title, content} = request.body
  posts.updatePost(id, title, content)
  .then((post) => {
    response.redirect(`/post/${id}`)
  }).catch(()=> next())
})

cityPost.post('/delete/:id', (request, response, next) => {
  const id = request.params.id;
  posts.findPostCity(id)
    .then((city) => {
      posts.deletePost(id)
        .then(() => {
          setTimeout(() => {response.redirect(`/city/${city.id}`)}, 3000)
        })
    }).catch(()=> next())
})

module.exports = cityPost
