// import React from 'react';
import { useState } from 'react';
import Banner from '../components/Banner';
import Highlight from '../components/Highlight';
import Navbar from '../components/Navbar';
import PremiumDigitalTools from '../components/PremiumDigitalTools';
import GetStartedIn3Steps from '../components/GetStartedIn3Steps';
import PricingSection from '../components/PricingSection';
import ReadyToTransform from '../components/ReadyToTransform';
import Footer from '../components/Footer';

const Home = () => {

    const [carts,setCarts] = useState([]);

    return (
        <div>

            <Navbar carts = {carts}></Navbar>

            <div className='pt-16'>

                <div className='lg:px-[8%]'>

                    <Banner></Banner>

                </div>

                <Highlight></Highlight>

                <PremiumDigitalTools carts = {carts} setCarts = {setCarts}></PremiumDigitalTools>

                <GetStartedIn3Steps></GetStartedIn3Steps>

                <PricingSection></PricingSection>

                <ReadyToTransform></ReadyToTransform>

                <Footer></Footer>

            </div>
        </div>
    );
};

export default Home;