const {
  create: createPost,
  list: listPosts,
  update: updatePost,
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

const update = (req, res) => {
  updatePost(req.body, req.params.id)
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
  update,
}
