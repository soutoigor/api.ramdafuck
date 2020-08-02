const express = require('express')
const cors = require('cors');
require('./src/db/mongoose')
require('dotenv').config()
const userRouter = require('./src/routes/post')

const app = express()
const PORT = 8000
app.use(express.json())
app.use(cors())
app.use(userRouter)

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}!`)
})
