/**
 * @module comments
 * @description API endpoints for managing comments related to posts.
 * 
 * @route GET /api/comments/:postId
 * @param {string} postId - The ID of the post to retrieve comments for.
 * @returns {Array<Comment>} 200 - An array of comments for the specified post.
 * @returns {Error} 500 - Failed to retrieve comments.
 * 
 * @route POST /api/comments/:postId
 * @param {string} postId - The ID of the post to create a comment for.
 * @param {Object} req.body - The comment data.
 * @param {string} req.body.content - The content of the comment.
 * @returns {Comment} 201 - The newly created comment.
 * @returns {Error} 500 - Failed to create comment.
 * 
 * @route DELETE /api/comments/:commentId
 * @param {string} commentId - The ID of the comment to delete.
 * @returns {Object} 200 - A message indicating successful deletion.
 * @returns {Error} 500 - Failed to delete comment.
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Hey GitHub Copilot
// Please implement the following API endpoints for comments:
// 1. GET /api/comments/:postId - Retrieve all comments for a specific post.
// 2. POST /api/comments/:postId - Create a new comment for a specific post.
// 3. DELETE /api/comments/:commentId - Delete a specific comment by its ID.   
router.get("/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve comments." });
  }
});
//Add another endpoint for deleting a comment.
router.post("/:postId", async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.params.postId,
      content: req.body.content,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to create comment." });
  }
});

router.delete("/:commentId", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.commentId);
        res.status(200).json({ message: "Comment deleted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete comment." });
    }
});

module.exports = router;