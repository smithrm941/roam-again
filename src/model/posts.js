const postFunctions = require('./db/posts')

const findPostById = (id) => {
return postFunctions.findPostById(id)
  .then((post) => {
    post.date_posted = post.date_posted.toDateString();
    return post;
  })
}

const findPostsByCity = (city) => {
return postFunctions.findPostsByCity(city)
  .then((posts) => {
    posts.forEach((post) => {
      post.date_posted = post.date_posted.toDateString();
    })
    return posts;
  })
}

const findPostsByAuthor = (author) => {
return postFunctions.findPostsByAuthor(author)
  .then((posts) => {
    posts.forEach((post) => {
      post.date_posted = post.date_posted.toDateString();
    })
    return posts;
  })
}

module.exports = {
  findPostsByAuthor: findPostsByAuthor,
  findPostById: findPostById,
  findPostAuthor: postFunctions.findPostAuthor,
  findPostCity: postFunctions.findPostCity,
  findPostsByCity: findPostsByCity,
  updatePost: postFunctions.updatePost,
  createPost: postFunctions.createPost,
  deletePost: postFunctions.deletePost
}
