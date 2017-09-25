const router = require('express').Router()
const {signUpUser, logInUser} = require('../../model/users')

router.get('/', (request, response) => {
  response.render('splash')
})

module.exports = router
