import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import contactHeader from '../assets/contact_head.jpg'
import Form from '../components/Form'
import iconLocation from '../assets/icon/location.svg'
import iconEmail from '../assets/icon/email.svg'
import iconPhone_Call from '../assets/icon/phone_call.svg'
import { db } from '../service/firebase';
import { collection, addDoc } from '@firebase/firestore'


export default function ContactUs () {
    const [newName, setNewName] = useState("")
    const [newEmail, setNewEmail] =  useState("")
    const [newPhoneNo, setNewPhoneNo] = useState("")
    const [newMessageSubject, setNewMessageSubject] = useState("")
    const [newMessageText, setNewMessageText] = useState("")
    const [newMessage, setNewMessage] = useState([]);
    const messageCollectionRef = collection(db, "contact_message")

    const createMessage = async () => {
        await addDoc(messageCollectionRef, 
            {name:newName, email:newEmail, phone_No:newPhoneNo, subject:newMessageSubject, message:newMessageText } 
        )
    }

    return (
        <>
        <Navbar></Navbar>
        <Banner image={contactHeader} title="CONTACT US" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
        <div className="relative grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 min-h-screen overflow-hidden ">
        <div className="w-full mt-10 xs:mb-5 sm:mb-5 mb-10 p-6 m-auto col-span-3 lg:max-w-xl">
            <h1 className="text-3xl font-semibold uppercase ">
                Keep in touch with Us
            </h1>
            <p className='pt-5'>
                We're thrilled that you're interested in reaching out to us. Whether you have a question, a partnership 
                opportunity, or simply want to say hello, we're here to listen and collaborate. Let's join forces and create 
                something amazing together!
            </p>
            <form className="mt-6">
                <div className="mb-2">
                    <input
                        type="text"
                        name="name"
                        className="w-full block px-5 py-3 mt-2 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Name"
                        onChange={(event) => {
                            setNewName(event.target.value)
                        }}
                    />
                </div>
                <div className="mb-2">
                    <input name="email" type="email"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Email Address (john.cooks@example.com)"
                        onChange={(event) => {
                            setNewEmail(event.target.value)
                        }}
                        required

                    />
                </div>
                <div className="mb-2">
                    <input name="phoneNumber" type="text"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-slate-400 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Phone Number (0123456789)"
                        onChange={(event) => {
                            setNewPhoneNo(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="mb-2">
                    <input name="subject" type="text"
                        className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
                            focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Message Subject"
                        onChange={(event) => {
                            setNewMessageSubject(event.target.value)
                        }}
                        required
                    />
                </div>
                <div className="mb-2">
                    <textarea name="message" placeholder='Message' className="block w-full mt-2 px-5 py-3 bg-gray-200 border-gray-300 rounded-md shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="5"
                    onChange={(event) => {
                        setNewMessageText(event.target.value)
                    }}>
                    </textarea>
                </div>

                <div class="">
                    <button className="h-10 px-5 text-indigo-100 bg-blue-600 rounded-lg transition-colors
                        duration-150 focus:shadow-outline hover:bg-blue-800" onClick={createMessage}>
                        Submit
                    </button>
                </div>
                <div></div>
            </form>
        </div>

        <div>
        <div className="w-full xxs:mb-5 xs:mt-5 sm:mt-5 xs:mb-10 sm:mb-10 md:mt-5 lg:mt-20 p-6 bg-slate-700 shadow-xl rounded-md shadow-blue-600/40  lg:max-w-xl relative flex flex-col justify-center ">
            <h1 className="text-3xl font-semibold uppercase text-cyan-50 ">
            Where to Find Us
            </h1>
            <hr className='mt-5'></hr>
            <div className='pt-10 text-cyan-50'><img src={iconLocation} style={{display:'inline-block'}} className="pr-5 "
                alt="location"
                />30B, Jalan Wawasan 2/4, Bandar Baru Ampang, 68000 Ampang, Selangor
            </div>

            <div className='pt-10 text-cyan-50'><img src={iconEmail} style={{display:'inline-block'}} className="pr-5"
                    alt="email"/>
                info@salwafairuzco.com
            </div>

            <div className='pt-10 text-cyan-50'><img src={iconPhone_Call} style={{display:'inline-block'}} className="pr-5"
                    alt="phonecall"
                    />03-4296 9694
            </div>
        </div>
        </div>
    </div>
        </div>
        

<Footer>
</Footer>
</>

)}