const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

app.use(cors())
app.use(express.json())

// const infosJeuRouter = require('./routers/infosJeu')
// app.use('/infos', infosJeuRouter)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

const usersRouter = require('./routers/usersRouter')
app.use('/users', usersRouter)

module.exports = app