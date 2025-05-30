const ProductModel = require("../models/ProductModel");

const addProduct = async (req, res) => {
    try {
        const productData = req.body;
        const productImage = req.file ? req.file.path : null; // Assuming you're using multer for file uploads
        const newProduct = new ProductModel({
            ...productData,
            productImage: productImage,
            createdBy: req.user._id // Assuming req.user is set by authentication middleware
        });

        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product Created Successfully",
            data: newProduct
        })
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const getAllProducts = async (req, res) => {
    try {
        let { page, limit, search } = req.query;
        page = parseInt(page) || 1;
        limit = parseInt(limit) || 5;
        const skip = (page - 1) * limit;

        let searchCriteria = {};
        if (search) {
            searchCriteria = {
                $or: [
                    { name: { $regex: search, $options: 'i' } },
                    { category: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const totalProducts = await ProductModel.countDocuments(searchCriteria);

        const products = await ProductModel.find(searchCriteria)
            .populate('createdBy', 'name email')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 });

        const totalPages = Math.ceil(totalProducts / limit);

        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: {
                products,
                pagination: {
                    currentPage: page,
                    totalPages,
                    totalProducts,
                    PageLimit: limit
                }
            }
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findById(productId).populate('createdBy', 'name email');

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const productData = req.body;
        if (req.file) {
            productData.productImage = req.file.path; // Update product image if a new one is uploaded
        }
        const updateProduct = await ProductModel.findByIdAndUpdate(
            productId,
            { ...productData, updatedBy: req.user._id }, // Assuming req.user is set by authentication middleware
            { new: true } // Return the updated document
        ).populate('createdBy', 'name email'); // Populate createdBy with user details
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await ProductModel.findByIdAndDelete(productId);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deletedProduct
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
module.exports = {
    addProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct

}