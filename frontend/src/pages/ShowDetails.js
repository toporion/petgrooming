import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import UseAxios from '../hook/UseAxios';
import { FaFacebook, FaLinkedin, FaMailBulk, FaPinterest, FaTelegram, FaTwitter, FaVoicemail, FaWhatsapp } from 'react-icons/fa';

const ShowDetails = () => {
    const { id } = useParams();
    const axiosPublic = UseAxios();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description'); // State for active tab

    const { data: product, isLoading, error } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-product/${id}`);
            console.log(res.data.data);
            return res.data.data;
        }
    });

    if (isLoading) return <p className="text-center py-8">Loading...</p>;
    if (error) return <p className="text-center py-8 text-red-600">Failed to load product.</p>;
    if (!product) return <p className="text-center py-8">Product not found.</p>;

    return (
        <div>
            <div className="bg-slate-200 p-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Shop</div>
                    {/* Breadcrumb Navigation */}
                    <div className="text-sm text-gray-600">
                        <span>Home</span> / <Link to="/shop"><span >Shop</span></Link> / <span className="font-semibold">{product.name}</span>
                    </div>
                </div>
            </div>
            <div className="max-w-4xl mx-auto p-6">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <img src={product.productImage} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <p className="text-2xl font-semibold text-green-600 mb-4">${product.sellPrice}</p>
                        <p className="text-lg text-gray-700 mb-4">{product.description}</p>

                        {/* Quantity Selector and Add to Cart */}
                        <div className="flex items-center gap-4">
                            <input
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                className="w-16 text-center text-xl font-semibold h-12 border"
                            />
                            <button className="btn bg-yellow-300 rounded-none px-6">Add to Cart</button>
                        </div>
                        <div className="flex gap-4 mt-4 text-2xl">
                            <FaFacebook className="text-blue-500" />
                            <FaTwitter className="text-blue-700" />
                            <FaWhatsapp className="text-green-600" />
                            <FaLinkedin className="text-blue-500" />
                            <FaPinterest className="text-red-600" />
                            <FaTelegram className="text-blue-400" />
                            <FaMailBulk className="text-pink-600" />
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-8">
                    <div className="flex gap-4 border-b">
                        <button
                            className={`px-4 py-2 ${activeTab === 'description' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                        <button
                            className={`px-4 py-2 ${activeTab === 'review' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
                            onClick={() => setActiveTab('review')}
                        >
                            Review
                        </button>
                    </div>
                    <div className="mt-4">
                        {activeTab === 'description' && (
                            <p className="text-lg text-gray-700">{product.description}</p>
                        )}
                        {activeTab === 'review' && (
                            <p className="text-lg text-gray-700">No reviews available yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetails;