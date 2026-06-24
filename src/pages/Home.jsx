// import React from 'react';
import Banner from '../components/Banner';
import Highlight from '../components/Highlight';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>

            <div className='lg:px-[8%]'>

            <Banner></Banner>

            </div>

            <Highlight></Highlight>

        </div>
    );
};

export default Home;