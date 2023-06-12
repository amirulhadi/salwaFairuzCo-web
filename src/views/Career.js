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
            <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 pt-5 pb-20'>

                <div className='bg-grey-200'>
                    <img src={careerDesc} alt="imageAbout" className="shadow-md rounded-md "/>
                </div>
                    <div>
                    <p>Welcome to Salwa, Fairuz & Co. Where Innovation Meets Opportunity!
                        Are you ready to be part of something extraordinary? Look no further! 
                        At Salwa, Fairuz & Co., we're revolutionizing the firm landscape and are on the lookout for 
                        exceptional talent like you. Join us in our mission to [briefly mention the mission or vision].
                    </p>
                    <p className='font-bold pt-8'>Collaborative Environment</p>
                    <p className='pt-3'>We believe in the power of collaboration and teamwork. 
                        At Salwa, Fairuz & Co. , you'll be part of a dynamic and diverse group of individuals who share a 
                        common passion for excellence. Our open and inclusive culture ensures that everyone's voice is 
                        heard and valued.</p>
                    <p className='font-bold pt-8'>Work-Life Balance</p>
                    <p className='pt-3'>We understand the importance of maintaining a healthy work-life balance. 
                        At Salwa, Fairuz & Co, we strive to create an environment that promotes well-being and supports your 
                        personal and professional commitments. Flexible work hours, remote work options, and a range of 
                        employee benefits ensure that you can thrive both inside and outside of work.</p>
                    <p className='font-bold pt-8'>Career Growth</p>
                    <p className='pt-3'>We are committed to your professional growth and development. We offer comprehensive 
                        training programs, mentorship opportunities, and clear career paths that will enable you to chart
                         your course towards success. Your ambitions and aspirations are important to us, and we'll provide 
                         the support you need to achieve them.</p>
                </div>
            </div>

            <div className='grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 pt-5 pb-20 inverse bg-full'>
            <div>
                <p className='font-bold text-3xl'>Lets Work Together</p>
                <p className='pt-2 pb-10'>Join us in making a difference. At Salwa, Fairuz & Co., your work will have a tangible 
                    impact on our industry and the lives of our customers. Be part of something meaningful and leave your 
                    mark on the world.</p>

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
                <p className='pt-2 pb-10'>Ready to embark on an exciting journey with Salwa, Fairuz & Co.? 
                We're looking for talented individuals who are passionate, driven, and eager to make a difference.
                Join us and be part of a team that is shaping the future of the firm. 
                Check out our current openings and submit your application today!</p>
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