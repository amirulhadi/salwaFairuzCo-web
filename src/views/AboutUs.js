import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import aboutUsHead from '../assets/AboutUs_header.jpg'
import aboutdesc from '../assets/about_desc.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';

export default function AboutUs () {

    return (
        <>
        <Navbar></Navbar>
        <Banner image={aboutUsHead} title="ABOUT US" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
            <div className='gap-8 columns-2 pt-20 pb-20'>
                <div className='bg-grey-200'>
                    <img src={aboutdesc} alt="imageAbout"/>
                    <h1 className='font-bold text-4xl'>SalwaFairuz.co</h1>
                    <p className='pt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <p className='pt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                    <p className='pt-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
                        including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            
            <div>
                <h1 className='text-3xl uppercase font-bold text-center pb-10'>Our Services</h1>
            </div>
            <div className='px-16 pb-10 bg-gray-200 mb-5'>
                <h1 className='font-bold text-xl pt-8 pb-10'>Accounting Services</h1>
                <p className='text-l pb-5'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
                is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                here', making it look like readable English. Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still 
                in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).
                </p>
                <p className='font-bold' >READ MORE</p>
            </div>

            <div className='px-16 pb-10 bg-gray-200 mb-5'>
                <h1 className='font-bold text-xl pt-8 pb-10'>LLP / PLT Services & Fees</h1>
                <p className='text-l pb-5'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
                is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                here', making it look like readable English. Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still 
                in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).
                </p>
                <p className='font-bold' >READ MORE</p>
            </div>

            <div className='px-16 pb-10 bg-gray-200 mb-5'>
                <h1 className='font-bold text-xl pt-8 pb-10'>Tax Services</h1>
                <p className='text-l pb-5'>It is a long established fact that a reader will be 
                distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum 
                is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content 
                here', making it look like readable English. Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still 
                in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose 
                (injected humour and the like).
                </p>
                <p className='font-bold' >READ MORE</p>
            </div>

            <div>
                <h1 className='text-3xl uppercase font-bold text-center pb-10'>Meet The Team</h1>
            </div>

            <div className='gap-0 columns-4 pt-5 pb-10'>
                <img src={team1}/>
                <img src={team2}/>
                <img src={team3}/>
                <img src={team4}/>
            </div>
        </div>
        <Footer></Footer>
           
        </>
        
    )
}