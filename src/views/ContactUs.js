import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import contactHeader from '../assets/contact_head.jpg'
import Form from '../components/Form'
import iconLocation from '../assets/icon/location.svg'
import iconEmail from '../assets/icon/email.svg'
import iconPhone_Call from '../assets/icon/phone_call.svg'


export default function ContactUs () {

    return (
        <>
        <Navbar></Navbar>
        <Banner image={contactHeader} title="CONTACT US" titlerow2="" desc=""></Banner>

        <div className="relative grid grid-cols-2 gap-4 min-h-screen overflow-hidden ">
        <div className="w-full mt-10 mb-10 p-6 m-auto bg-white shadow-xl shadow-blue-600/40  lg:max-w-xl">
            <h1 className="text-3xl font-semibold uppercase ">
                Keep in touch with Us
            </h1>
            <form className="mt-6">
                <div className="mb-2">
                    <label>
                    <span className="text-gray-700">Your name</span>
                    <input
                        type="text"
                        name="name"
                        className="w-full block px-5 py-3 mt-2 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="John cooks"
                    />
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                    <span className="text-gray-700">Email address</span>
                    <input name="email" type="email"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="john.cooks@example.com"
                        required
                    />
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                    <span className="text-gray-700">Phone Number</span>
                    <input name="phoneNumber" type="text"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-slate-400 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="0123456789"
                        required
                    />
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                    <span className="text-gray-700">Message Subject</span>
                    <input name="subject" type="text"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Title: My Subject"
                        required
                    />
                    </label>
                </div>
                <div className="mb-2">
                    <label>
                    <span class="text-gray-700">Message</span>
                    <textarea name="message" className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="5">
                    </textarea>
                    </label>
                </div>

                <div class="mb-6">
                    <button type="submit" className="h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors
                        duration-150 focus:shadow-outline hover:bg-indigo-800">
                    Contact Us
                    </button>
                </div>
                <div></div>
            </form>
        </div>

        <div>
        <div className="w-full mt-10 p-6  bg-blue-400 shadow-xl shadow-blue-600/40  lg:max-w-xl relative flex flex-col justify-center ">
            <h1 className="text-3xl font-semibold uppercase ">
            Where to Find Us
            </h1>
            <hr className='mt-5'></hr>
            <div className='pt-10'><img src={iconLocation} style={{display:'inline-block'}} className="pr-5"
                alt="location"
                />30B, Jalan Wawasan 2/4, Bandar Baru Ampang, 68000 Ampang, Selangor
            </div>

            <div className='pt-10'><img src={iconEmail} style={{display:'inline-block'}} className="pr-5"
                    alt="email"/>
                info@salwafairuzco.com
            </div>

            <div className='pt-10'><img src={iconPhone_Call} style={{display:'inline-block'}} className="pr-5"
                    alt="phonecall"
                    />03-4296 9694
            </div>
        </div>
        </div>
    </div>

<Footer>
</Footer>
</>

)}