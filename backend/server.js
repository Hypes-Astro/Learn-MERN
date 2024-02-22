require ('dotenv').config()

const express = require("express") // 1

const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

// express app
const app = express()

// middlewares
app.use(express.json())


app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () =>{
            console.log('Connected to MONGGO DB + Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
