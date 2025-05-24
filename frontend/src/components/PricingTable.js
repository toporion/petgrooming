import React from 'react';

const PricingTable = () => {
    const pricingPlans = [
        {
            price: "$39",
            duration: "year",
            title: "Advanced Package",
            features: [
                "Massage & Spa",
                "Handstripping",
                "Bath & Brush",
                "Dog Walking",
                "Day Care",
            ],
        },
        {
            price: "$49",
            duration: "year",
            title: "Pro Package",
            features: [
                "Massage & Spa",
                "Handstripping",
                "Bath & Brush",
                "Dog Walking",
                "Day Care",
            ],
        },
    ];

    return (
        <div className="px-4 sm:px-8 lg:px-16">
            <div>
                <p className="text-4xl font-bold poetsen-one-regular text-center mt-10">
                    Pricing Table
                </p>
                <p className="poetsen-one-regular mt-4 text-center">
                    Choose the best plan for your pet's grooming needs.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 p-6">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className="relative z-0 w-full sm:w-80 max-w-sm"
                    >
                        {/* Background Layer */}
                        <div className="absolute top-4 left-4 w-full h-full bg-[#A48C6E] rounded-lg z-0"></div>

                        {/* White Card */}
                        <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 text-center">
                            <h3 className="text-3xl font-bold mb-2">
                                {plan.price}
                                <span className="text-base">/{plan.duration}</span>
                            </h3>
                            <h4 className="text-lg font-semibold mb-4">
                                {plan.title}
                            </h4>
                            <hr className="border-t-2 border-[#A48C6E] w-16 mx-auto mb-4" />
                            <ul className="text-gray-600 mb-6">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="mb-2">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#A48C6E] text-white py-2 px-4 rounded-lg hover:bg-[#927759] transition duration-200">
                                CHOOSE
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
