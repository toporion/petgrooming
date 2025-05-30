const { addProduct, getAllProducts, getProductById, updateProduct } = require('../controllers/ProductController');
const imageUpload = require('../middlewares/fileUpload');
const verifyrole = require('../middlewares/verifyRole');
const authenticateToken = require('../middlewares/verifyToken');

    const router = require('express').Router();

    router.post('/add-product',authenticateToken,verifyrole('admin'),imageUpload.single('productImage'),addProduct);
    router.get('/get-all-products',getAllProducts);
    router.get('/get-product/:id',getProductById);
    router.put('/update-product/:id', authenticateToken, verifyrole('admin'), updateProduct);

    module.exports = router;