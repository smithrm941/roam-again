const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes/index.js')
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
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
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
