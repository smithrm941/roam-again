const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')
const config = require('./config/config.js').getConfig();

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((request, response, next) => {
  response.locals.error = ''
  response.locals.user = {}
  next()
})

app.use(expressSession({
<<<<<<< HEAD
  secret: process.env.SECRET,
=======
  secret: (config.get("server").get("secret")) || process.ENV.SECRET,
>>>>>>> 5a9bc936083d6728dfad5869c1b03719d9923fcf
  resave: false,
  saveUninitialized: true,
  cookie: {
    secureProxy: true,
    expires: 600000
    }
}))

app.use('/', routes)

app.use((request, response, next) => {
  const err = new Error("Not Found!!")
  err.status = 404
  response.render('notfound')
  next(err)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Listening on===port:', port)
})
