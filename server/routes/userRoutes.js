import express from 'express';
import { 
    authUser,
    registerUser,
    updateUserProfile,
    logoutUser,
    getUserProfile,
    unlikeMovie,
    likeMovie
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/movies/like').put(protect, likeMovie);
router.route('/movies/unlike').put(protect, unlikeMovie);


export default router;