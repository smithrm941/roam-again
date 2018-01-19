const ensureLoggedIn = (request, response, next) => {
  if(!request.session.user){
    response.render('login', {message: 'You must log in to see this page', user: null})
  } else {
    next()
  }
}

module.exports = {ensureLoggedIn}
