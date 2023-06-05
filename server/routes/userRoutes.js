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
router.put('/movies/unlike', unlikeMovie)
router.put('/movies/like', likeMovie)

export default router;