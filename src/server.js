const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./server/routes/index.js')
const expressSession = require('express-session')
const cookieParser = require('cookie-parser')

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
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 600000
    }
}))

app.use('/', routes)

// Catch incorrect url addresses and return 404 error
app.use((req, res, next) => {
  const err = new Error("Not Found!!")
  err.status = 404
  next(err)
})

//Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: err.message
  })
})

const port = process.env.PORT || 3003
app.listen(port, () => {
  console.log('Listening on===port:', port)
})
