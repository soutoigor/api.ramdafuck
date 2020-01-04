const mongoose = require('mongoose')

mongoose.connect('mongodb://db:27017/ramdafuck', {
  useNewUrlParser: true,
  useCreateIndex: true,
})
