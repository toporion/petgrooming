import React from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../hook/UseAxiosSecure';


const AddProductForm = () => {
    const axiosSecure=UseAxiosSecure()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();



    const onSubmit = async (data) => {
        try {
            console.log(data);
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('sku', data.sku);
            formData.append('category', data.category);
            formData.append('description', data.description);
            formData.append('sellPrice', data.sellPrice);
            formData.append('purchasePrice', data.purchasePrice);
            formData.append('quantityInStock', data.quantityInStock);
            formData.append('unit', data.unit);
            formData.append('lowStockThreshold', data.lowStockThreshold);
            if(data.productImage[0]) {
                formData.append('productImage', data.productImage[0]);
            }
            const res=await axiosSecure.post('/add-product', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            if (res.data.message === 'Product Created Successfully') {
                alert('Product added successfully!');
                reset();
            } else {
                alert('Failed to add product. Please try again.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product.');
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Product Name and SKU */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Product name is required' })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter product name"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">SKU</label>
                        <input
                            type="text"
                            {...register('sku', { required: 'SKU is required' })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter SKU"
                        />
                        {errors.sku && <p className="text-red-500 text-sm">{errors.sku.message}</p>}
                    </div>
                </div>

                {/* Category and Description */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <select
                            {...register('category', { required: 'Category is required' })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">Select a category</option>
                            <option value="electronics">Cat</option>
                            <option value="fashion">Dog</option>
                            <option value="home">cat food</option>
                            <option value="beauty">Dog food</option>
                            <option value="beauty">Birds</option>
                        </select>
                        {errors.category && (
                            <p className="text-red-500 text-sm">{errors.category.message}</p>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            {...register('description', { required: 'Description is required' })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter product description"
                        />
                        {errors.description && (
                            <p className="text-red-500 text-sm">{errors.description.message}</p>
                        )}
                    </div>
                </div>

                {/* Sell Price and Purchase Price */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Sell Price</label>
                        <input
                            type="number"
                            {...register('sellPrice', { required: 'Sell price is required', min: 0 })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter sell price"
                        />
                        {errors.sellPrice && (
                            <p className="text-red-500 text-sm">{errors.sellPrice.message}</p>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Purchase Price</label>
                        <input
                            type="number"
                            {...register('purchasePrice', { required: 'Purchase price is required', min: 0 })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter purchase price"
                        />
                        {errors.purchasePrice && (
                            <p className="text-red-500 text-sm">{errors.purchasePrice.message}</p>
                        )}
                    </div>
                </div>

                {/* Quantity in Stock and Unit */}
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Quantity in Stock</label>
                        <input
                            type="number"
                            {...register('quantityInStock', { required: 'Quantity in stock is required', min: 0 })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter quantity in stock"
                        />
                        {errors.quantityInStock && (
                            <p className="text-red-500 text-sm">{errors.quantityInStock.message}</p>
                        )}
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">Unit</label>
                        <input
                            type="text"
                            {...register('unit', { required: 'Unit is required' })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter unit (e.g., pcs)"
                        />
                        {errors.unit && <p className="text-red-500 text-sm">{errors.unit.message}</p>}
                    </div>
                </div>

                {/* Low Stock Threshold */}
                <div>
                    <label className="block text-sm font-medium mb-1">Low Stock Threshold</label>
                    <input
                        type="number"
                        {...register('lowStockThreshold', { required: 'Low stock threshold is required', min: 0 })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="Enter low stock threshold"
                    />
                    {errors.lowStockThreshold && (
                        <p className="text-red-500 text-sm">{errors.lowStockThreshold.message}</p>
                    )}
                </div>

                {/* Profile Image */}
                <div>
                    <label className="block text-sm font-medium mb-1">Profile Image</label>
                    <input
                        type="file"
                        {...register('productImage', { required: 'Profile image is required' })}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    {errors.profileImage && (
                        <p className="text-red-500 text-sm">{errors.profileImage.message}</p>
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductForm;