import React from 'react';

const Services = () => {
    return (
        <div className='w-full mx-auto my-10'>
            <div>
                <p className='text-4xl font-bold poetsen-one-regular text-center mt-10'>Services</p>
                <p className='poetsen-one-regular mt-4 text-center'>We offer a range of grooming services to keep your pets looking and feeling their best.</p>
            </div>

            {/* Services with Center Image */}
            <div className='flex flex-wrap justify-center items-center mt-16 gap-10'>
                {/* Left Side Services */}
                <div className='flex flex-col gap-14'>
                    {/* Service 1 */}
                    <div className='flex items-center max-w-xs'>
                        <p className='text-6xl font-bold text-[#FFD600] mr-4'>1</p>
                        <div>
                            <p className='text-lg font-semibold'>Bathing & Brushing</p>
                            <p className='text-sm text-gray-600'>Keep your pet clean and fresh with our bathing and brushing services.</p>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className='flex items-center max-w-xs'>
                        <p className='text-6xl font-bold text-[#FFD600] mr-4'>2</p>
                        <div>
                            <p className='text-lg font-semibold'>Nail Trimming</p>
                            <p className='text-sm text-gray-600'>Ensure your pet's nails are trimmed safely and comfortably.</p>
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className='flex justify-center'>
                    <img
                        src='https://plus.unsplash.com/premium_photo-1723709016897-3cc15635e618?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='Dog Grooming'
                        className='w-80 h-80 object-cover rounded-lg shadow-lg'
                    />
                </div>

                {/* Right Side Services */}
                <div className='flex flex-col gap-14'>
                    {/* Service 3 */}
                    <div className='flex items-center max-w-xs'>
                        <p className='text-6xl font-bold text-[#FFD600] mr-4'>3</p>
                        <div>
                            <p className='text-lg font-semibold'>Ear Cleaning</p>
                            <p className='text-sm text-gray-600'>Gentle ear cleaning to keep your pet's ears healthy and free of infections.</p>
                        </div>
                    </div>

                    {/* Service 4 */}
                    <div className='flex items-center max-w-xs'>
                        <p className='text-6xl font-bold text-[#FFD600] mr-4'>4</p>
                        <div>
                            <p className='text-lg font-semibold'>Haircuts & Styling</p>
                            <p className='text-sm text-gray-600'>Professional haircuts and styling to suit your pet's breed and personality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
