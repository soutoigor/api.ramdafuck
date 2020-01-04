const Post = require('../models/post')

const create = async (attributes) => {
  const post = new Post(attributes)

  try {
    await post.save()
    return post
  } catch (err) {
    return err
  }
}

const list = async () => {
  try {
    const posts = await Post.find({})
    return posts
  } catch (err) {
    return err
  }
}

module.exports = {
  create,
  list,
}
