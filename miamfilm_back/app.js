const express = require('express')
const app = express()
const cors = require('cors')

const commentRouter = require('./routers/commentRouter');
const recipeRouter = require('./routers/recipeRouter');
const roleRouter = require('./routers/roleRouter');
const tagRouter = require('./routers/tagRouter');
const userRouter = require('./routers/userRouter');
const videoRouter = require('./routers/videoRouter');

require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use('/comment', commentRouter);
app.use('/recipe', recipeRouter);
app.use('/role', roleRouter);
app.use('/tag', tagRouter);
app.use('/user', userRouter);
app.use('/video', videoRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status})
})

module.exports = app