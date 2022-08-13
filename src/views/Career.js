import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import careerDesc from '../assets/career_desc.jpg';
import careerDesc2 from '../assets/career_desc2.jpg';
import careerHeader from '../assets/career_header.jpg'

export default function Career () {

    return (
        <>
        <Navbar></Navbar>
        <Banner image={careerHeader} title="CAREER" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>

        <div>
                <div className='px-2 py-8'>
                    <h2 className='text-4xl text-center font-bold uppercase'>Expand Your Career With Us</h2>
                </div>
            </div>
            <div className='gap-8 columns-2 pt-20 pb-20'>

                <div className='bg-grey-200'>
                    <img src={careerDesc} alt="imageAbout"/>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
                    of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                    which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
                    humour, or non-characteristic words etc.
                    </p>
                    <p className='font-bold pt-8'>Global Exposure</p>
                    <p className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p className='font-bold pt-8'>Work-Life Balance</p>
                    <p className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s</p>
                    <p className='font-bold pt-8'>Competitive</p>
                    <p className='pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
            </div>

            <div className='gap-8 columns-2 pt-5 pb-20'>
            <div>
                    <p className='font-bold text-3xl'>Lets Work Together</p>
                    <p className='pt-10 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <form>
                <div class="mb-6 w-full flex justify-center gap-2">
                    <input type="text" id="base-input" placeholder='first name' class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="text" id="base-input" placeholder='last name' class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-6 w-full flex justify-center gap-2">
                    <input type="email" id="base-input" placeholder='email' class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <input type="tel" id="base-input" placeholder='mobile number' class="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div class="mb-6 w-full flex justify-center gap-2">
                    <input type="file" id="base-input" placeholder='upload your resume' class="w-full h-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    SUBMIT        
                </button>
            </form>

            <img src={careerDesc2} className='h-1/2' />
            </div>
            </div>
        </div>
        <Footer>
        </Footer>
        </>

    )
}