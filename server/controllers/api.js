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
    res.send('Fetch Post By ID');
  }
  // Create a new post
  static async createPost(req, res) {
    res.send('Create new post');
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
