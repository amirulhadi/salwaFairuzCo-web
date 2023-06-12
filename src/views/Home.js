import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import homeCover from '../assets/home-cover.jpg'
import fairuz from '../assets/Fairuz_head.jpg';
import salwa from '../assets/Salwa_head.jpg';
import sapa from '../assets/sapa_head.jpg'
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
import Footer from '../components/Footer';
import review1 from '../assets/Review1.png'
import review2 from '../assets/Review2.png';
import review3 from '../assets/Review3.png'
import homeBanner from "../assets/home_banner.jpg"
import homeLanding from '../assets/home_landing.jpg'
import goalsCover from '../assets/goals.jpg'


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
    const review1_img = {
        backgroundImage:`url("${review1}")`
    }
    return (
        <>
            <Navbar></Navbar>
            <Banner image={homeLanding} title="Welcome" titlerow2="Salwa,Fairuz & Co." desc="Chartered Accountant & SQL 
            Accounting / Payroll authorised dealer & Corporate secretarial & Training">
            </Banner>
            <div className='container px-1 sm:px-8 mx-auto'>
            <div >
                <div className=' pb-10'>
                <h2 className='text-xl sm:text-4xl uppercase font-bold text-center pt-10'>Together Far More Better</h2>
                <p className='text-sm sm:text-sm text-center'>At Salwa, Fairuz & Co., we understand that every 
                financial decision matters, no matter how big or small. That is why we are here, ready to provide you with 
                the expertise, guidance, and support you need to make informed choices and build a strong financial legacy.
                Join us on this remarkable journey, and let us help you write your financial success story, one number at a 
                time.</p>
                {/* <div className='grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden px-4 py-8'> */}

                </div>

                <div className=" mt-5 mb-5 sm:mb-5 sm:mt-10 pl-5 pr-5">
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-bold pb-3 sm:pt-5 sm:mt-5 '>Accounting Outsourcing</h2>
                            <hr class="w-60 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                            <p className='text-xs sm:text-sm'>Monthly, Quarterly, Half Yearly, and Yearly Accounting Outsourcing Services</p>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="#040720" className="w-50 h-50 svg-size">
                            <path fill-rule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z" clip-rule="evenodd" />
                            <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z" />
                        </svg>

                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="currentColor" className="w-50 h-50 svg-size">
                            <path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" clip-rule="evenodd" />
                            <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                        </svg>
                        </div>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-bold pb-3 sm:pt-5 sm:mt-5 '>Tax Consultancy</h2>
                            <hr class="w-60 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                            <p className='text-xs sm:text-sm'>Corporate Tax, Personal Tax Compliance, and Planning Outsourcing Services</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                            <h2 className='text-xl sm:text-4xl font-bold pb-3 sm:pt-5 sm:mt-5'>Financial Consultancy</h2>
                            <hr class="w-60 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                            <p className='text-xs sm:text-sm'>Financial Advices on Tax, Planning, Investment and Insurance decisions</p>
                        </div>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="currentColor" className="w-50 h-50 svg-size">
                            <path fill-rule="evenodd" d="M6.32 1.827a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 01-3 3H6.75a3 3 0 01-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93zM7.5 11.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H8.25zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75H8.25zm1.748-6a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.007zm-.75 3a.75.75 0 01.75-.75h.007a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.007a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.007zm1.754-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-.75 3a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V18a.75.75 0 00-.75-.75h-.008zm1.748-6a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 1.5a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75h-.008zm-8.25-6A.75.75 0 018.25 6h7.5a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75v-.75zm9 9a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-2.25z" clip-rule="evenodd" />
                        </svg>

                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-4'>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="currentColor" className="w-50 h-50 svg-size">
                            <path fill-rule="evenodd" d="M12 1.5c-1.921 0-3.816.111-5.68.327-1.497.174-2.57 1.46-2.57 2.93V21.75a.75.75 0 001.029.696l3.471-1.388 3.472 1.388a.75.75 0 00.556 0l3.472-1.388 3.471 1.388a.75.75 0 001.029-.696V4.757c0-1.47-1.073-2.756-2.57-2.93A49.255 49.255 0 0012 1.5zm3.53 7.28a.75.75 0 00-1.06-1.06l-6 6a.75.75 0 101.06 1.06l6-6zM8.625 9a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm5.625 3.375a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" clip-rule="evenodd" />
                        </svg>
                        </div>   
                        <div>
                            <h2 className='text-xl sm:text-4xl font-bold pb-3 sm:pt-5 sm:mt-5'>SST Consultancy</h2>
                            <hr class="w-60 h-1 mx-auto my-4 bg-gray-400 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                            <p className='text-xs sm:text-sm'>Sales and Service Tax Registration, Filing, Implementation and Advice Services</p>
                        </div>
                    </div>
                    
                  
                   
                </div>
            </div>

            <div className='flex flex-wrap -mb-4' style={{backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("${goalsCover}")`, backgroundSize: 'cover', width: 'auto', backgroundRepeat: 'no-repeat'}}>
            {/* <div class="w-1/3 mb-4 bg-gray-400 h-12"></div> */}
                <div class="block w-1/3 mb-4  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Goals</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
                <div class="w-1/3 h-12"></div>
                <div class="w-1/3 h-12"></div>
                <div class="w-1/3 h-12"></div> 
                <div class="block w-1/3 mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Vision</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">To be the leading provider of innovative 
                    and trusted accounting solutions, empowering businesses to thrive in the dynamic and ever-evolving 
                    financial landscape.</p>
                </div>
                <div class="w-1/3  h-5"></div>
                <div class="w-1/3  h-5"></div>
                <div class="w-1/3  h-5"></div>
                <div class="block w-1/3  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Mission</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">To provide exceptional accounting and financial services that empower our clients to make informed decisions, achieve their business goals, and thrive in a rapidly changing financial landscape.</p>
                </div>
               
                 
            </div>

            <div className='p-10 mb-20'>
                <div className='px-2 py-8'>
                <h2 className='text-3xl uppercase font-bold text-center pt-10 pb-10'>Solution Provided</h2>
                    <div className='grid xxs:grid-cols-1 xs:grid cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xs:gap-2'>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 md:place-items-center backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>Accounting</h2></div>
                            <div><p className='text-center text-xl md:text-lg '>Accounting</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>Advisory</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Entrepreneurship & Management</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>Company Secretaries</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Company Secretaries Service</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>Research</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Business Research</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>SST</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Sales & Service Tax</p></div>
                        </div>
                        <div className='border border-white-200 rounded-md p-10 md:pl-5 backdrop-blur-sm bg-white/20'>
                            <div><h2 className='text-center font-bold text-3xl'>Tax Agent</h2></div>
                            <div><p className='text-center text-xl md:text-lg'>Tax Management</p></div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div>
                <h2 className='text-3xl xs:text-xl sm:text-4xl md:text-5xl  uppercase font-bold text-center pt-10 pb-2'>Meet The Leaders</h2>
                <p className='text-sm xs:text-xs sm:text-sm md:text-base xs:text-left sm:text-left text-center pt-2 px-8 pb-6'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                </p>
                <div className='px-16 pb-20'>
                    <div className='hidden md:flex lg:grid grid grid-cols-2 gap-4 rounded mt-5'>
                        <div className='flex flex-col xs:h-30 xs:w-50 md:h-40 md:w-30'>
                            <div className='rounded-full xs:h-30 xs:w-50 md:h-40 md:w-30' style={bgP1}></div>
                        </div>
                        <div className='h-40 w-40 xs:pb-5'>
                            <div className='rounded-full  xs:h-30 xs:w-50 md:h-40 md:w-30' style={bgP2}></div>
                        </div>
                    </div>
                    <div className='hidden md:flex lg:grid grid grid-cols-2 gap-4 rounded mt-5'>
                        <div className='flex flex-col pr-10'>
                            <p className='pb-2 pl-5 text-center'>Dr. Fairuz</p>
                            <hr/>
                            <p className='pt-2 pl-5 pb-2 text-center'>Managing Director</p>
                            
                        </div>
                        <div className='flex flex-col pr-10 mr-8'>
                            <p className='pb-2 pl-5 text-center'>Dr. Salwa</p>
                            <hr/>
                            <p className='pt-2 pl-5 pb-2 text-center'>Director</p>
                            
                        </div>
                    </div>
                    <div className='md:collapse lg:collapse grid grid-cols-1 sm:grid-cols-2 gap-0'>
                        <div className='flex flex-col xs:h-30 xs:w-50 md:h-40 md:w-30'>
                            <div className='rounded-full xs:h-30 xs:w-50 md:h-40 md:w-30' style={bgP1}></div>
                        </div>
                        <div className=' flex flex-col'>
                            <p className='pb-2 px-8 py-10'>Dr. Fairuz</p>
                            <hr/>
                            <p className='pt-2 pb-2 px-8 py-5'>Managing Director</p>
                        </div>
                        <div className='h-40 w-40 pt-5 pb-5'>
                            <div className='rounded-full  xs:h-30 xs:w-50 md:h-40 md:w-30' style={bgP2}></div>
                        </div>
                        <div className='flex flex-col pt-5'>
                            <p className='pb-2 px-8 py-10'>Dr. Salwa</p>
                            <hr/>
                            <p className='pt-2 pb-2 px-8 py-5'>Director</p>
                        </div>
                        <div className='h-40 w-40 pt-10 pb-5'>
                            <div className='rounded-full xs:h-30 xs:w-50 md:h-40 md:w-30' style={bgP3}></div>
                        </div>
                    </div>
                
                  
                </div>
                </div> */}

            <div className='inverse bg-full'>
                <div className='px-16 pb-10'>
                <h2 className='text-3xl uppercase font-bold text-center pt-10'>What Our Clients Say</h2>
                <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                    <img
                        src={review1}
                        className="block w-full slider-resize"
                        alt="..."
                    />
                    {/* <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div> */}
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={review2}
                        className="block w-full slider-resize"
                        alt="..."
                    />
                    {/* <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div> */}
                    </div>
                    <div className="carousel-item relative float-left w-full">
                    <img
                        src={review3}
                        className="block w-full slider-resize"
                        alt="..."
                    />
                    {/* <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div> */}
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                </div>
                
            </div>
        </div>
        <Footer></Footer>
           
        </>
        
    )
}