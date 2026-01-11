/**
 * @module routes/api/comments
 * @description This module handles the API routes for comments.
 * 
 * @requires express
 * @requires mongoose
 * @requires Comment model
 * 
 * @route GET /api/comments
 * @returns {Array} 200 - An array of comments
 * @returns {Object} 500 - An error object if fetching comments fails
 * 
 * @route POST /api/comments
 * @param {Object} req.body - The comment object to be created
 * @returns {Object} 201 - The created comment object
 * @returns {Object} 400 - An error object if creating a comment fails
 * 
 * @route DELETE /api/comments/:id
 * @param {string} req.params.id - The ID of the comment to be deleted
 * @returns {Object} 200 - A success message if the comment is deleted
 * @returns {Object} 404 - An error object if the comment is not found
 * @returns {Object} 500 - An error object if deleting the comment fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");
//Hey GitHub Copilot
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (err) {
    res.status(400).json({ error: "Failed to create comment" });
  }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});

module.exports = router;
