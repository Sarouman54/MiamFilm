const express = require('express')
const app = express()
const cors = require('cors')

const videoRouter = require('./routers/videoRouter');

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/video', videoRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

module.exports = app