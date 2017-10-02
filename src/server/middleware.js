const ensureLoggedIn = (request, response, next) => {
  if(!request.session.user){
    response.redirect('/login')
  } else {
    next()
  }
}

const currentCities = (request, response, next) => {
  
}

module.exports = {ensureLoggedIn}
