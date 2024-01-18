const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    content: String,
    name: String,
    date: { type: Date, default: Date.now },
    picture: String,
    link: String,
  });
  
  const Post = mongoose.model('Post', postSchema);


  module.exports = Post;