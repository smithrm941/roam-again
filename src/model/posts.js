const postFunctions = require('./db/posts')

module.exports = {
  findPostsByAuthor: postFunctions.findPostsByAuthor
}
