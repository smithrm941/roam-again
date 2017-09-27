const ensureLoggedIn = (request, response, next) => {
  if(!request.session.user){
    response.redirect('/login')
  } else {
    next()
  }
}

module.exports = {ensureLoggedIn}
