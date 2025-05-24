import React from 'react';
import Banner from '../components/Banner';
import DogGrooming from '../components/DogGrooming';
import Services from '../components/Services';
import Counter from '../components/Counter';
import Appointment from '../components/Appointment';
import PricingTable from '../components/PricingTable';
import OurTeam from '../components/OurTeam';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <div>
          
            <Banner />
            <DogGrooming />
            <Services />
            <Counter />
            <Appointment />
            <PricingTable />
            <OurTeam />
            <NewsLetter />
        </div>
    );
};

export default Home;