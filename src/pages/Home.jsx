// import React from 'react';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='lg:px-[8%]'>

            <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;