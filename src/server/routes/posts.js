const cityPost = require('express').Router()
const users = require('../../model/users')
const posts = require('../../model/posts')
const cities = require('../../model/cities')

cityPost.get('/:id', (request, response) => {
  const id = request.params.id;
  posts.findPostById(id)
  .then((post) => {
    posts.findPostAuthor(post.id)
    .then((author) => {
      posts.findPostCity(post.id)
      .then((city) => {
        if(request.session.user.id === post.author){
          response.render('post', {post,
            author,
            city,
            user: request.session.user,
            edit: false,
            deletePost: false,
            public: false})
        } else {
          response.render('post', {post,
            author,
            city,
            user: request.session.user,
            edit: false,
            deletePost: false,
            public: true})
        }
      })
    })
  }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

cityPost.get('/edit/:id', (request, response) => {
  const id = request.params.id;
  posts.findPostById(id)
  .then((post) => {
    posts.findPostAuthor(post.id)
    .then((author) => {
      posts.findPostCity(post.id)
      .then((city) => {
        response.render('post', {post,
          author,
          city,
          user: request.session.user,
          edit: true,
          deletePost: false})
      })
    })
  }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

cityPost.post('/edit/:id', (request, response) => {
  const id = request.params.id;
  const {title, content} = request.body
  posts.updatePost(id, title, content)
  .then((post) => {
    response.redirect(`/post/${id}`)
  })
})

cityPost.post('/delete/:id', (request, response) => {
  const id = request.params.id;
  posts.findPostCity(id)
    .then((city) => {
      posts.deletePost(id)
      .then(() => {
        setTimeout(() => {response.redirect(`/city/${city.id}`)}, 3000)
      })
    }).catch((error) => {
    response.status(404)
    response.render('notfound')
  })
})

module.exports = cityPost
