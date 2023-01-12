import React from 'react';
import Button from '../components/Button'


function Banner (props) {
    const backgroundImageStyle = {
        backgroundImage: `url("${props.image}")`,
        backgroundSize: 'cover',
        width: '100%',
        height: '80%',
    };
    return (
        <div className='Banner'>
            <div
                className='bg-slate-700 text-white'
                style = {backgroundImageStyle}>
                <div className='bg-gradient-to-r from-black px-8 py-24 xs:py-10 sm:py-13 md:py-16'>
                <div className='xs:max-w-lg sm:max-w-xl md:max-w-2xl lg:pb-10 xs:pb-5 sm:pb-7 md:pb-8 xl:pb-15'>
                    <h2 className='text-6xl xs:text-xl sm:text-4xl md:text-5xl uppercase font-bold'>{props.title}</h2>
                    <h2 className='text-6xl xs:text-xl sm:text-4xl md:text-5xl uppercase pb-16 xs:pb-5'>{props.titlerow2}</h2>
                    <p className='text-lg xs:text-xs sm:text-sm md:text-base'>{props.desc}</p>
                </div>
                <Button class={props.class} buttonName={props.buttonName} />
                
                </div>
       

            </div>
        </div>
        
    )
}

export default Banner;