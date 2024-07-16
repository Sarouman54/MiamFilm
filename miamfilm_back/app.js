const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser') 
require('dotenv').config()

app.use(cors())

app.use(bodyParser.json())

app.use(express.json())

// const infosJeuRouter = require('./routers/infosJeu')
// app.use('/infos', infosJeuRouter)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

const registerRouter = require('./routers/registerRouter')
app.use('/register', registerRouter)

const usersRouter = require('./routers/usersRouter')
app.use('/users', usersRouter)

module.exports = app