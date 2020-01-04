const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/routes/post')

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
