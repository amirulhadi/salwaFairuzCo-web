import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import contactHeader from '../assets/contact_head.jpg'
import bulletinData from '../artefacts/bulletinList.json'
import News from '../components/News';

export default function Bulletin () {   
    
    return (
        <>
        <Navbar></Navbar>
        <Banner image={''} title="BULLETIN" titlerow2="" desc=""></Banner>

        <div className='container px-16 mx-auto'>

        <div>
            <div className='px-2 py-8'>
                <h2 className='text-4xl text-center font-bold uppercase'>Follow Our News and Updates</h2>
            </div>

            <News></News>

        </div>

    </div>

<Footer>
</Footer>
</>

)}