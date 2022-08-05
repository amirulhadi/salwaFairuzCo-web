import React from 'react';
import homeBanner from "../assets/home_banner.jpg"

function Banner () {
    const backgroundImageStyle = {
        backgroundImage: `url("${homeBanner}")`,
        backgroundSize: 'cover'
    };
    return (
        <div className='Banner'>
            <div
                className='bg-slate-700 text-white'
                style = {backgroundImageStyle}>
                <div className='bg-gradient-to-r from-black px-8 py-24'>
                <div className='max-w-xl '>
                    <h2 className='text-6xl uppercase font-bold'>Finance</h2>
                    <h2 className='text-6xl uppercase pb-16'>Audit Firm</h2>
                    <p className='text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                </div>
       

            </div>
        </div>
        
    )
}

export default Banner;