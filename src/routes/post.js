const express = require('express')
const {
  create,
  list,
  update,
} = require('../controllers/post')

const router = express.Router()

router
  .post('/post', create)
  .get('/post', list)
  .patch('/post/:id', update)

module.exports = router
