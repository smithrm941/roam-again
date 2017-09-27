const ensureLoggedIn = (request, response, next) => {
  if(!request.session.user){
    response.redirect('/login')
  } else {
    next()
  }
}

const helloWorld = (request, response, next) => {
  console.log('Hello World')
  next()
}

const cruelWorld = (request, response, next) => {
  console.log('Goodbye cruel world')
  next()
}

module.exports = {ensureLoggedIn, helloWorld, cruelWorld}
