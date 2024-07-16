const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser') 

const commentRouter = require('./routers/commentRouter');
const recipeRouter = require('./routers/recipeRouter');
const roleRouter = require('./routers/roleRouter');
const tagRouter = require('./routers/tagRouter');
const usersRouter = require('./routers/usersRouter')
const videoRouter = require('./routers/videoRouter');
const registerRouter = require('./routers/registerRouter')

require('dotenv').config()

app.use(cors())

app.use(bodyParser.json())

app.use(express.json())

app.use('/comment', commentRouter);
app.use('/recipe', recipeRouter);
app.use('/role', roleRouter);
app.use('/tag', tagRouter);
app.use('/users', usersRouter);
app.use('/video', videoRouter);
app.use('/auth', registerRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

module.exports = app