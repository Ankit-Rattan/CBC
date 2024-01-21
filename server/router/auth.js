const express = require("express");
const Post = require("../models/Schema");

require("../db/connection");
require("../models/Schema");

const add = express.Router();

add.post("/posts", async (req, res) => {
  try {
    const { content, name, link } = req.body;

    const newPost = new Post({ content, name, link });
    await newPost.save();

    res.status(201).json({
      title: newPost.content,
      name: newPost.name,
      date: newPost.date.toISOString().split("T")[0],
      primarytext: newPost.content,
      link: newPost.link,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
});

add.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = add;
