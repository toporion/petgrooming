const { createUser, getAllUsers, getUserByEmail, loginUser, makeRole, deleteUser } = require('../controllers/UserController');
const imageUpload = require('../middlewares/fileUpload');
const verifyrole = require('../middlewares/verifyRole');
const authenticateToken = require('../middlewares/verifyToken');

const router = require('express').Router();

router.post('/register',imageUpload.single('profilePicture'),createUser);
router.get('/users',authenticateToken,getAllUsers)
router.post('/login',loginUser)
router.get('/user-by-email',getUserByEmail)
router.patch('/make-role/:id',authenticateToken,verifyrole('admin'),makeRole)
router.delete('/delete-user/:id',authenticateToken,verifyrole('admin'),deleteUser);

module.exports = router;