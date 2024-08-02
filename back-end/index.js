const express = require('express')
const app = express()
const env = require('.env')

env.config()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`The Port Is Listening on port ${PORT}`)
})