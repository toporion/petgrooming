const { createUser } = require('../controllers/UserController');
const imageUpload = require('../middlewares/fileUpload');

const router = require('express').Router();

router.post('/register',imageUpload.single('profilePicture'),createUser);

module.exports = router;