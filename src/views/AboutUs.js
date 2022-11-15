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
        width: '200px',
        height: '200px',
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: 'center center'
    }
    const clientLogo2 = {
        backgroundImage: `url("${logo2}")`,
        backgroundSize: 'contain',
        width: '160px',
        height: '160px',
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
        width: '200px',
        height: '200px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo5 = {
        backgroundImage: `url("${logo5}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo6 = {
        backgroundImage: `url("${logo6}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo7 = {
        backgroundImage: `url("${logo7}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo8 = {
        backgroundImage: `url("${logo8}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo9 = {
        backgroundImage: `url("${logo9}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }    

    return (
        <>
        <Navbar></Navbar>
        <Banner image={aboutUsHead} title="ABOUT US" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
            <div className='grid grid-cols-2 gap-4  pt-20 pb-20'>
                <div className='grid grid-cols-2 gap-4 bg-grey-200'>
                    <div>
                        <img src={aboutdesc} className="" alt="imageAbout"/>
                    </div>
                    <div className='bg-grey-200 relative'>
                        <img src={SalwaAbout} className="absolute bottom-0 right-0" alt="imageAbout"/>
                    </div>
                    
                </div>
                
                <div>
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
                </div>
            </div>

            <div className='inverse bg-full p-10 mb-20'>
                <div className='px-2 py-8'>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='border border-white-200 rounded-md p-10 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>20+</h2></div>
                            <div><p className='text-center text-xl'>Years Experience</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>35+</h2></div>
                            <div><p className='text-center text-xl'>Awards Win</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>1750+</h2></div>
                            <div><p className='text-center text-xl'>Happy Customers</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>120+</h2></div>
                            <div><p className='text-center text-xl'>Our Experts Staff</p></div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-4 place-items-center mb-10 pb-10'>
                <div>
                    <h1 className='text-4xl font-bold italic'>"Our work does make sense only if it is a faithful witness of his time"</h1>
                    <p className='font-light text-end mr-10 opacity-50'>Dr.Fairuz</p>
                </div>
                <div>
                    <img src={quotesImage} className="" alt="quotesImage"/>
                </div>
            </div>
            
            {/* <div>
                <h1 className='text-3xl uppercase font-bold text-center pb-10'>Our Services</h1>
            </div>
            <div className='px-16 pb-10 bg-gray-200/[.60] mb-5'>
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

            <div className='px-16 pb-10 bg-gray-200/[.60] mb-5'>
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

            <div className='px-16 pb-10 bg-gray-200/[.60] mb-5'>
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
            </div> */}
            <div className='inverse bg-full '>
            <div className='grid grid-cols-2 gap-4 pt-10'>
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
            </div>
            <div>
                    <h1 className='text-3xl uppercase font-bold pb-5'>Meet The Team</h1>
                    <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                        Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            </div>
          

            <div>
                    <div className='text-3xl uppercase font-bold text-center pt-10 pb-10'>Our Clients</div>
                    <div className='px-16 py-10'>
                        <div className='grid grid-cols-4 gap-3'>
                            <div style={clientLogo}></div>
                            <div style={clientLogo2}></div>
                            {/* <div style={clientLogo3}></div> */}
                            <div style={clientLogo9}></div>
                            <div  style={clientLogo4}></div>
                            <div  style={clientLogo5}></div>
                            <div style={clientLogo6}></div>
                            <div  style={clientLogo7}></div>
                            <div style={clientLogo8}></div>
                           
                        </div>
                    </div>    
                </div>
            

            
        </div>
        <Footer></Footer>
           
        </>
        
    )
}