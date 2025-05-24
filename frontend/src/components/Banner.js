import React from 'react';
import slide from '../assets/groomax-dog-slider1.png';
import img1 from '../assets/groomax-layer2-slider1.png';
import img2 from '../assets/groomax-layer3-slider1.png';
import img3 from '../assets/groomax-layer4-slider1.png';

const Banner = () => {
    return (
        <div className='bg-[#FFD600] h-[500px] md:h-[400px] sm:h-[300px] flex flex-col md:flex-row items-center justify-between px-4 md:px-10 relative overflow-hidden'>
            {/* Left Content with Images Around */}
            <div className='relative w-full md:w-1/2 text-center md:text-left'>
                <p className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 rubik-dirt-regular z-10 relative'>COME TO</p>
                <p className='text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 nosifer-regular z-10 relative'>Groomex</p>
                <button className='btn bg-black text-white z-10 relative px-4 py-2 md:px-6 md:py-3'>Explore Now</button>

                {/* Decorative Images Around Text */}
                <img src={img1} alt="Decor1" className="absolute top-[-20px] md:top-[-30px] left-[-20px] md:left-[-40px] w-16 h-16 md:w-24 md:h-24 animate-bounce" />
                <img src={img2} alt="Decor2" className="absolute top-[80px] md:top-[100px] right-[-20px] md:right-[-30px] w-14 h-14 md:w-20 md:h-20 animate-pulse" />
                <img 
                    src={img3} 
                    alt="Decor3" 
                    className="absolute w-20 h-20 md:w-28 md:h-28 animate-spin-slow"
                    style={{ bottom: '-40px', left: '150px' }} 
                />
            </div>

            {/* Right Main Image */}
            <img src={slide} alt="Banner" className='w-full md:w-auto h-auto md:h-full object-contain' />
        </div>
    );
};

export default Banner;
