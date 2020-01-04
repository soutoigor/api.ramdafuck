const express = require('express')
const {
  create,
  list,
} = require('../controllers/post')

const router = express.Router()

router
  .post('/post', create)
  .get('/post', list)

module.exports = router
