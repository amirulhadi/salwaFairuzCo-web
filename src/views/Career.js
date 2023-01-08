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
            <div className='grid grid-cols-2 gap-8 pt-5 pb-20'>

                <div className='bg-grey-200'>
                    <img src={careerDesc} alt="imageAbout" className="shadow-md rounded-md "/>
                </div>
                    <div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
                    embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary
                    of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
                    which looks reasonable.
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

            <div className='grid grid-cols-2 gap-8 pt-5 pb-20 inverse bg-full'>
            <div>
                <p className='font-bold text-3xl'>Lets Work Together</p>
                <p className='pt-2 pb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                <p className='mb-5'>Oppotunities within SalwaFairuz.Co</p>
                <ul className='list-disc'>
                    <li>Accountant</li>
                    <li>Contract Management</li>
                    <li>Credit Risk</li>
                    <li>Finance and Controlling</li>
                    <li>Information Technology</li>
                    <li>Sales and Marketing</li>
                    <li>Operations</li>
                </ul>

                <p className='mt-5'>Kindly contact our general phone number +603-4296 9694 (Ms. Siti) or email us at <a href="mailto:name@email.com">hr@salwafairuz.com</a> </p>
            </div>
            <div>
            <img src={careerDesc2} className="shadow-md rounded-md "  />
            </div>
            </div>
        </div>
        <Footer>
        </Footer>
        </>

    )
}