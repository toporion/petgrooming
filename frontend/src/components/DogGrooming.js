import React from 'react';

const DogGrooming = () => {
    return (
        <div className='w-full mx-auto my-10 text-center'>
            <p className='text-4xl font-bold poetsen-one-regular'>Dog Grooming</p>
            <p className='poetsen-one-regular mt-4'>Dog grooming keeps your pet clean, healthy, and looking great. Clean issues or parasites.</p>
            <div className='w-full flex flex-wrap justify-center gap-6 mt-10'>
                {/* Dog Grooming Card */}
                <div className='w-80 bg-white rounded-lg shadow-lg overflow-hidden'>
                    <img
                        src='https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60'
                        alt='Dog Grooming'
                        className='w-full h-48 object-contain bg-gray-100'
                    />
                    <div className='p-4'>
                        <p className='text-lg font-semibold'>Dog Grooming</p>
                        <p className='text-sm text-gray-600 mt-2'>Keep your dog clean, healthy, and happy with professional grooming services.</p>
                        <button className='mt-4 px-4 py-2 bg-[#FFD600] text-black font-semibold rounded hover:bg-yellow-500'>
                            More Details
                        </button>
                    </div>
                </div>

                {/* Cat Grooming Card */}
                <div className='w-80 bg-white rounded-lg shadow-lg overflow-hidden'>
                    <img
                        src='https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='Cat Grooming'
                        className='w-full h-48 object-contain bg-gray-100'
                    />
                    <div className='p-4'>
                        <p className='text-lg font-semibold'>Cat Grooming</p>
                        <p className='text-sm text-gray-600 mt-2'>Pamper your cat with grooming services tailored to their needs.</p>
                        <button className='mt-4 px-4 py-2 bg-[#FFD600] text-black font-semibold rounded hover:bg-yellow-500'>
                            More Details
                        </button>
                    </div>
                </div>

                {/* Pets Grooming Card */}
                <div className='w-80 bg-white rounded-lg shadow-lg overflow-hidden'>
                    <img
                        src='https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBldHN8ZW58MHx8MHx8fDA%3D'
                        alt='Pets Grooming'
                        className='w-full h-48 object-contain bg-gray-100'
                    />
                    <div className='p-4'>
                        <p className='text-lg font-semibold'>Pets Grooming</p>
                        <p className='text-sm text-gray-600 mt-2'>Comprehensive grooming services for all your beloved pets.</p>
                        <button className='mt-4 px-4 py-2 bg-[#FFD600] text-black font-semibold rounded hover:bg-yellow-500'>
                            More Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DogGrooming;