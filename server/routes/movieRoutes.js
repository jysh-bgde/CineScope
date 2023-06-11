import express from "express";
import {
    addMovieComment,
    movieComments,
    deleteMovieComment
} from '../controllers/movieController.js';

import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.route("/:movieId/addMovieComment").post( protect, addMovieComment);
router.route("/:movieId/deleteMovieComment").delete( protect, deleteMovieComment);
router.route("/:movieId/movieComments").get( protect, movieComments);

export default router;