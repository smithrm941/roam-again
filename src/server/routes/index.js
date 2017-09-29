const router = require('express').Router()
const auth = require('./auth')
const userProfile = require('./users')
const cityProfile = require('./cities')
const cityPost = require('./posts')

const middleware = require('../middleware')

router.use('/', auth)
router.use(middleware.ensureLoggedIn)
router.use('/user', userProfile)
router.use('/city', cityProfile)
router.use('/post', cityPost)

module.exports = router
