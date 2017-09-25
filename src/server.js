const express = require('express')
const middleware = require('./server/middleware')
const routes = require('./server/routes/index.js')

const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/', middleware)
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
