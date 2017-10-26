const ensureLoggedIn = (request, response, next) => {
  if(!request.session.user){
    //*****If user is not logged in at pages after splash, at that inaccessible
    //URI, load login page instead:
    response.render('login', {message: 'You must log in to see this page', user: null})
  } else {
    next()
  }
}

module.exports = {ensureLoggedIn}
