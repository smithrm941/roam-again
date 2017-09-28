const postFunctions = require('./db/posts')

module.exports = {
  findPostsByAuthor: postFunctions.findPostsByAuthor,
  findPostById: postFunctions.findPostById,
  findPostAuthor: postFunctions.findPostAuthor,
  findPostCity: postFunctions.findPostCity
}
