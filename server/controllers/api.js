const Post = require('../models/posts');

module.exports = class API {
  // Fetch all the posts
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // Fetch post by ID
  static async fetchPostByID(req, res) {
    const id = req.params.id;
    try {
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }
  // Create a new post
  static async createPost(req, res) {
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;
    try {
      await Post.create(post);
      res.status(201).json({ message: 'Post created successfully!' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  // Update a post
  static async updatePost(req, res) {
    res.send('Update post');
  }
  // Delete a post
  static async deletePost(req, res) {
    res.send('Delete post');
  }
};
