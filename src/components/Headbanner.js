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
                <div className='bg-gradient-to-r from-black px-8 py-10 sm:py-20 sm:pb-10'>
                <div className='max-w-max sm:max-w-xl sm:max-h-screen pb-5 sm:pb-10'>
                    {/* <h2 className='text-xl sm:text-6xl uppercase '>{props.title}</h2> */}
                    <h2 className='text-xl sm:text-6xl uppercase font-bold sm:pb-10'>{props.titlerow2}</h2>
                    <p className='text-xs sm:text-lg'>{props.desc}</p>
                </div>
                <Button class={props.class} buttonName={props.buttonName} />
                
                </div>
       

            </div>
        </div>
        
    )
}

export default Banner;