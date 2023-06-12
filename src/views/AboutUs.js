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
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';
import team7 from '../assets/team7.jpg';
import team8 from '../assets/team8.jpg';
import team9 from '../assets/team9.jpg';
import team10 from '../assets/team10.jpg';
import team11 from '../assets/team11.jpg';
import SalwaAbout from '../assets/Salwa_about.jpg'
import quotesImage from '../assets/quotes_images.jpg'
import logo1 from '../assets/ClientLogo/logo1.png';
import logo2 from '../assets/ClientLogo/logo2.png'
import Button from '../components/Button'

import logo3 from '../assets/ClientLogo/logo3.jpg'
import logo4 from '../assets/ClientLogo/logo4.png'
import logo5 from '../assets/ClientLogo/logo5.png'
import logo6 from '../assets/ClientLogo/logo6.jpg'
import logo7 from '../assets/ClientLogo/logo7.jpg'
import logo8 from '../assets/ClientLogo/logo8.png'
import logo9 from '../assets/ClientLogo/logo9.png'

export default function AboutUs () {
    const clientLogo = {
        backgroundImage: `url("${logo1}")`,
        backgroundSize: 'contain',
        width: '160%',
        height: '160%',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center center'
    }
    const clientLogo2 = {
        backgroundImage: `url("${logo2}")`,
        backgroundSize: 'contain',
        width: '100%',
        height: '100%',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center center'
    }
    const clientLogo3 = {
        backgroundImage: `url("${logo3}")`,
        backgroundSize: 'contain',
        width: '160px',
        height: '160px',
        //backgroundRepeat: 'no-repeat'
    }
    const clientLogo4 = {
        backgroundImage: `url("${logo4}")`,
        backgroundSize: 'contain',
        width: '180%',
        height: '180%',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo5 = {
        backgroundImage: `url("${logo5}")`,
        backgroundSize: 'contain',
        width: '130%',
        height: '130%',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo6 = {
        backgroundImage: `url("${logo6}")`,
        backgroundSize: 'contain',
        width: '120%',
        height: '120%',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo7 = {
        backgroundImage: `url("${logo7}")`,
        backgroundSize: 'contain',
        width: '130%',
        height: '130%',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo8 = {
        backgroundImage: `url("${logo8}")`,
        backgroundSize: 'contain',
        width: '150%',
        height: '150%',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo9 = {
        backgroundImage: `url("${logo9}")`,
        backgroundSize: 'contain',
        width: '150%',
        height: '150%',
        backgroundRepeat: 'no-repeat'
    }    

    return (
        <>
        <Navbar></Navbar>
        <Banner image={aboutUsHead} title="ABOUT US" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
            <div className='hidden md:flex grid grid-cols-2 gap-4 pt-20 pb-20'>
                <div className='grid grid-cols-2 gap-4 bg-grey-200'>
                    <div>
                        <img src={aboutdesc} className="max-w-screen max-h-screen" alt="imageAbout"/>
                    </div>
                    <div className='bg-grey-200  relative'>
                        <img src={SalwaAbout} className="absolute md:sticky md:pt-20 bottom-0 right-0" alt="imageAbout"/>
                    </div>
                    
                </div>
                
                <div>
                    <h1 className='font-bold text-4xl'>SalwaFairuz.co</h1>
                    <p className='pt-8'>It all began with a vision: to provide exceptional accounting services that empower 
                        businesses and individuals to achieve their financial goals. Our founders, Dr. Fairuz, brought 
                        their expertise and passion for numbers together, laying the foundation for what would soon become a 
                        trusted name in the industry. In our early years, we focused on serving local businesses in Ampanng. Our 
                        dedication to delivering personalized attention and customized solutions quickly earned us a reputation 
                        for excellence. As our clientele grew, so did our team of talented professionals, each bringing unique 
                        skills and perspectives to the table.
                    </p>
                    <p className='pt-8'>
                        Driven by a desire to expand our reach and cater to a broader range of clients, we strategically expanded 
                        our services and geographic footprint. With each milestone, we gained valuable experience and honed our 
                        expertise across various industries and sectors. Over the years, we have weathered economic storms, 
                        embraced technological advancements, and adapted to the ever-evolving accounting landscape. Our ability 
                        to navigate challenges and stay ahead of industry trends has been instrumental in our sustained success.
                    </p>
                    <p className='pt-8'>
                        As we look toward the future, we remain dedicated to staying at the forefront of the industry, 
                        continually enhancing our capabilities, and embracing emerging technologies. Our goal is to continue 
                        empowering our clients to navigate the complex financial landscape with confidence and achieve their 
                        long-term goals.
                    </p>
                </div>
            </div>
            {/* for mobile */}
            <div className='md:collapse lg:collapse grid-cols-1 gap-1 pt-20 pb-20'>
                <div className='grid grid-cols-1 gap-1 bg-grey-200'>
                    <div>
                        <h1 className='font-bold text-4xl'>SalwaFairuz.co</h1>
                        <p className='pt-8'>It all began with a vision: to provide exceptional accounting services that empower 
                        businesses and individuals to achieve their financial goals. Our founders, Dr. Fairuz, brought 
                        their expertise and passion for numbers together, laying the foundation for what would soon become a 
                        trusted name in the industry. In our early years, we focused on serving local businesses in Ampanng. Our 
                        dedication to delivering personalized attention and customized solutions quickly earned us a reputation 
                        for excellence. As our clientele grew, so did our team of talented professionals, each bringing unique 
                        skills and perspectives to the table.
                    </p>
                    <p className='pt-8'>
                        Driven by a desire to expand our reach and cater to a broader range of clients, we strategically expanded 
                        our services and geographic footprint. With each milestone, we gained valuable experience and honed our 
                        expertise across various industries and sectors. Over the years, we have weathered economic storms, 
                        embraced technological advancements, and adapted to the ever-evolving accounting landscape. Our ability 
                        to navigate challenges and stay ahead of industry trends has been instrumental in our sustained success.
                    </p>
                    <p className='pt-8'>
                        As we look toward the future, we remain dedicated to staying at the forefront of the industry, 
                        continually enhancing our capabilities, and embracing emerging technologies. Our goal is to continue 
                        empowering our clients to navigate the complex financial landscape with confidence and achieve their 
                        long-term goals.
                    </p>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <img src={aboutdesc} className="max-w-screen max-h-screen" alt="imageAbout"/>
                        </div>
                        <div className='bg-grey-200  relative'>
                            <img src={SalwaAbout} className="absolute sticky pt-5 bottom-0 right-0" alt="imageAbout"/>
                        </div>
                    </div>
                    
                    
                </div>
                
                
            </div>

            <div className='inverse bg-full p-10 mb-20'>
                <div className='px-2 py-8'>
                    <div className='grid xxs:grid-cols-1 xs:grid cols-1 sm:grid-cols-2 gap-4 md:grid-cols-4 xs:gap-2'>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 md:place-items-center backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>20+</h2></div>
                            <div><p className='text-center text-xl md:text-lg '>Years Experience</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>35+</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Awards Win</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>1750+</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Happy Customers</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>120+</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Our Experts Staff</p></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='grid md:grid-cols-2 gap-4 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 place-items-center mb-10 pb-10'>
                <div>
                    <h1 className='text-4xl font-bold italic'>"Our work does make sense only if it is a faithful witness of his time"</h1>
                    <p className='font-light text-end mr-10 opacity-50'>Dr.Fairuz</p>
                </div>
                <div>
                    <img src={quotesImage} className="" alt="quotesImage"/>
                </div>
            </div>

            <div className='inverse bg-full '>
            <div className='hidden md:flex lg:flex grid grid-cols-2 gap-12 pt-10'>
                <div className='gap-0 columns-3 pt-5 pb-10'>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team1} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 1</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team2} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 2</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team3} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 3</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team4} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team5} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team6} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team7} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team8} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team9} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team10} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team11} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
            </div>
            <div className='flex flex-col'>
                    <h1 className='text-3xl uppercase font-bold pb-5'>Meet The Team</h1>
                    <p className='mb-10'>At Salwa, Fairuz & Co., we take pride in delivering top-notch financial services to our valued 
                            clients. Behind our success lies a team of dedicated accounting professionals who excel in their 
                            respective fields.Together, they form a cohesive unit that is committed to excellence, integrity, and client 
                            satisfaction. At Salwa, Fairuz & Co., we believe that our people are our greatest 
                            asset, and we are confident that their expertise and dedication will surpass your expectations.
                            Whether you require tax planning, bookkeeping services, financial analysis, or any other 
                            accounting-related assistance, our team is here to support you every step of the way. \
                            Trust us to handle your financial matters with precision, confidentiality, and the utmost 
                            professionalism.</p>
                        
                        <div>
                            <p>
                            Contact us today to discover how our exceptional accounting team can help your business thrive.
                            </p>
                        </div>
                </div>
            </div>
            {/* for mobile */}
            <div className='md:collapse lg:collapse grid grid-cols-1 gap-1 pt-10'>
                <div>
                    <h1 className='text-3xl uppercase font-bold pb-5'>Meet The Team</h1>
                    <p className='mb-10'>At Salwa, Fairuz & Co., we take pride in delivering top-notch financial services to our valued 
                            clients. Behind our success lies a team of dedicated accounting professionals who excel in their 
                            respective fields.Together, they form a cohesive unit that is committed to excellence, integrity, and client 
                            satisfaction. At Salwa, Fairuz & Co., we believe that our people are our greatest 
                            asset, and we are confident that their expertise and dedication will surpass your expectations.
                            Whether you require tax planning, bookkeeping services, financial analysis, or any other 
                            accounting-related assistance, our team is here to support you every step of the way. \
                            Trust us to handle your financial matters with precision, confidentiality, and the utmost 
                            professionalism.</p>
                        
                        <div>
                            <p>
                            Contact us today to discover how our exceptional accounting team can help your business thrive.
                            </p>
                        </div>
                </div>
                <div className='gap-0 columns-4 pt-5 pb-10 '>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team1} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 1</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team2} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 2</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team3} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 3</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team4} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team5} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team6} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team7} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team8} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team9} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team10} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
                    <div className='relative bg-gradient-to-r from-black'>
                        <img src={team11} className='brightness-100 opacity-60' />
                        {/* <h1 className="absolute text-base text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            Name 4</h1> */}
                    </div>
            </div>

            </div>
            </div>
          

            <div>
                    <div className='text-3xl uppercase font-bold text-center pt-10 pb-5'>Our Clients</div>
                    <div className='px-16 py-10 xxs:px-1 xs:px-2 xxs:py-5 xs:py-8'>
                        <div className='grid grid-cols-4 gap-12 xxs:gap-8'>
                            <div style={clientLogo} className='pb-20 ' ></div>
                            <div style={clientLogo2} className='pb-20 md:mt-5 md:ml-8'></div>
                            {/* <div style={clientLogo3}></div> */}
                            <div style={clientLogo9} className='pb-20 md:mt-3'></div>
                            <div  style={clientLogo4} className=''></div>
                            <div  style={clientLogo5}></div>
                            <div style={clientLogo6} className='pb-20'></div>
                            <div  style={clientLogo7} className='pb-20'></div>
                            <div style={clientLogo8} className='pb-20'></div>
                           
                        </div>
                    </div>    
                </div>
            

            
        </div>
        <Footer></Footer>
           
        </>
        
    )
}