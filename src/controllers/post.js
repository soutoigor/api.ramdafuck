const {
  create: createPost,
  list: listPosts,
} = require('../services/post')

const create = (req, res) => {
  createPost(req.body)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
}

const list = (req, res) => {
  listPosts()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}

module.exports = {
  create,
  list,
}
