import React from 'react';


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
                <div className='bg-gradient-to-r from-black px-8 py-24'>
                <div className='max-w-xl '>
                    <h2 className='text-6xl uppercase font-bold'>{props.title}</h2>
                    <h2 className='text-6xl uppercase pb-16'>{props.titlerow2}</h2>
                    <p className='text-lg'>{props.desc}</p>
                </div>
                </div>
       

            </div>
        </div>
        
    )
}

export default Banner;