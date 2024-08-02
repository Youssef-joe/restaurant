const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes.js')
const PORT = 4000
const mongoURI = "mongodb://localhost:27017/bliss_rest"


app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

mongoose.connect(mongoURI).then(()=> console.log("mongoDB is connected")).catch((er)=> console.log("Error : ", er.message ? er.message : er))

app.use('/api', userRoutes)