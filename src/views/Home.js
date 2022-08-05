import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import homeCover from '../assets/home-cover.jpg'
import fairuz from '../assets/Fairuz_head.jpg';
import salwa from '../assets/Salwa_head.jpg';
import sapa from '../assets/sapa_head.jpg'
import logo1 from '../assets/ClientLogo/logo1.png';
import logo2 from '../assets/ClientLogo/logo2.png'

import logo3 from '../assets/ClientLogo/logo3.jpg'
import logo4 from '../assets/ClientLogo/logo4.png'
import logo5 from '../assets/ClientLogo/logo5.png'
import logo6 from '../assets/ClientLogo/logo6.jpg'
import logo7 from '../assets/ClientLogo/logo7.jpg'
import logo8 from '../assets/ClientLogo/logo8.png'
import logo9 from '../assets/ClientLogo/logo9.png'
import Footer from '../components/Footer'

export default function Home () {
    const bgImageCover = {
        backgroundImage: `url("${homeCover}")`,
        backgroundSize: 'cover'
    }
    const bgP1 = {
        backgroundImage: `url("${fairuz}")`,
        backgroundSize: 'contain',
        width: '160px',
        height: '160px',
        backgroundRepeat: 'no-repeat'
    }
    const bgP2 = {
        backgroundImage: `url("${salwa}")`,
        backgroundSize: 'contain',
        width: '160px',
        height: '160px',
        backgroundRepeat: 'no-repeat'
    }
    const bgP3 = {
        backgroundImage: `url("${sapa}")`,
        backgroundSize: 'contain',
        width: '160px',
        height: '160px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo = {
        backgroundImage: `url("${logo1}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo2 = {
        backgroundImage: `url("${logo2}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo3 = {
        backgroundImage: `url("${logo3}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
        backgroundRepeat: 'no-repeat'
    }
    const clientLogo4 = {
        backgroundImage: `url("${logo4}")`,
        backgroundSize: 'contain',
        width: '250px',
        height: '250px',
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
            <Banner></Banner>
            <div className='container px-16 mx-auto'>
            <div>
                <h2 className='text-3xl uppercase font-bold text-center pt-10'>Everything is possible with us</h2>
                {/* <div className='grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden px-4 py-8'> */}
                <div className = 'columns-4 px-2 py-8'>
                <div class="flex items-center justify-center bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='pb-3'>
                        <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd" />
                    </svg>
                    <div class="pb-5">
                        <h2 className='text-l text-center font-bold'>Accounting Outsourcing</h2>
                        <p className='text-sm text-center'>Monthly, Quarterly, Half Yearly, and Yearly Accounting Outsourcing Services</p>
                    </div>
                </div>
                <div class=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd" />
                        </svg> */}
                    <div class="pb-5">
                        <h2 className='text-l text-center font-bold'>Tax Consultancy</h2>
                        <p className='text-sm text-center'>Corporate Tax, Personal Tax Compliance, and Planning Outsourcing Services</p>
                    </div>
                </div>
                <div class=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd" />
                        </svg> */}
                    <div class="pb-5">
                        <h2 className='text-l text-center font-bold'>Financial Consultancy</h2>
                        <p className='text-sm text-center'>Financial Advices on Tax, Planning, Investment and Insurance decisions</p>
                    </div>
                </div>
                <div class=" bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clip-rule="evenodd" />
                        </svg> */}
                    <div class="pb-5">
                        <h2 className='text-l text-center font-bold'>SST Consultancy</h2>
                        <p className='text-sm text-center'>Sales and Service Tax Registration, Filing, Implementation and Advice Services</p>
                    </div>
                </div>
                </div>
            </div>

            <div>
                <div className='px-2 py-8'>
                    <h2 className='text-xl text-center font-bold uppercase'>Our Vision</h2>
                    <p className='text-sm text-center pt-4 px-8'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</p>
                    <p className='text-sm text-center pt-4 px-8'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
            <div
                className='bg-slate-700 text-white bg-center px-2 py-48'
                style = {bgImageCover}>
            </div>

            <div>
                <h2 className='text-3xl uppercase font-bold text-center pt-10 pb-6'>Pricing</h2>
                <div className='column-3 px-16'>
                    <div className='flex justify-center items-center'>
                        <div className='h-96 w-60 rounded bg-gray-200 ml-2'>
                            
                        </div>
                        <div className='h-96 w-60 rounded bg-blue-200 ml-2'>
                            
                        </div>
                        <div className='h-96 w-60 rounded bg-red-200 ml-2'>
                            
                        </div>
                    </div>
                    
                </div>   
            </div>

            <div>
                <h2 className='text-3xl uppercase font-bold text-center pt-10 pb-2'>Meet The Leaders</h2>
                <p className='text-sm text-center pt-2 px-8 pb-6'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='px-16 pb-20'>
                    <div className='flex items-start h-40 w-30 rounded mb-2'>
                        <div className='h-40 w-40'>
                            <div className='rounded-full h-40 w-30' style={bgP1}></div>
                        </div>
                        <div className='h-40 w-50'>
                        <div className='flex flex-col pt-8 px-10 '>
                            <p className='pb-2'>Your name is awesome bin your father is awesome</p>
                            <p className='pb-2'>Managing Director</p>
                            <p className='pb-2'>https://my.linkedin.com/in/mustafa-kamal-31095129</p>
                        </div>
                        </div>
                    </div>

                    <div className='flex flex-row-reverse h-40 w-30 rounded mb-2'>
                        <div className='h-40 w-40'>
                            <div className='rounded-full h-15 w-15' style={bgP2}></div>
                        </div>
                        <div className='h-40 w-50'>
                        <div className='flex flex-col pt-8 px-10 '>
                            <p className='pb-2'>Your name is awesome bin your father is awesome</p>
                            <p className='pb-2'>Managing Director</p>
                            <p className='pb-2'>https://my.linkedin.com/in/mustafa-kamal-31095129</p>
                        </div>
                        </div>
                    </div>

                    <div className='flex items-start h-40 w-30 rounded  mb-2'>
                        <div className='h-40 w-40'>
                            <div className='rounded-full h-40 w-40' style={bgP3}></div>
                        </div>
                        <div className='h-40 w-50'>
                        <div className='flex flex-col pt-8 px-10 '>
                            <p className='pb-2'>Your name is awesome bin your father is awesome</p>
                            <p className='pb-2'>Managing Director</p>
                            <p className='pb-2'>https://my.linkedin.com/in/mustafa-kamal-31095129</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl uppercase font-bold text-center pt-10 pb-10'>Our Clients</h2>
                    <div className='px-16 pb-10'>
                        <div className='flex items-start justify-center h-50 w-50'>
                        <div className='gap-8 columns-5'>
                            <div className='' style={clientLogo}></div>
                            <div className='' style={clientLogo2}></div>
                            <div className='' style={clientLogo3}></div>
                            <div className='' style={clientLogo4}></div>
                            <div className='' style={clientLogo5}></div>
                        </div>
                        </div>
                        <div className='flex items-start justify-center h-96 w-50 pb-10'>
                        <div className='gap-8 columns-4'>
                            <div className='' style={clientLogo6}></div>
                            <div className='' style={clientLogo7}></div>
                            <div className='' style={clientLogo8}></div>
                            <div className='' style={clientLogo9}></div>
                        </div>

                        </div>
                    </div>    
                </div>
                
            </div>
        </div>
        <Footer></Footer>
           
        </>
        
    )
}