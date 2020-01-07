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

const update = async (attributes, id) => {
  const updates = Object.keys(attributes)
  const allowedUpdates = ['like', 'comments']
  const isValidOperation = updates.every(update => allowedUpdates.includes(update))

  if (!isValidOperation) throw new Error('Invalid update')

  try {
    const post = await Post.findById(id)

    updates.forEach(update => {
      return post[update] = attributes[update]
    })
    if (!post) throw new Error('Post not found')
    await post.save()
    return post
  } catch (err) {
    return err
  }
}

module.exports = {
  create,
  list,
  update,
}
