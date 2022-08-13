import React from 'react';
import {CheckIcon, InformationCircleIcon} from '@heroicons/react/solid'

export default function PackageTax () {
    return (
        <>
            <div className='w-30 h-auto pb-20 rounded-md bg-slate-100'>
            <p className='p-5 text-center bg-blue-500 w-auto h-auto rounded-md rounded-b-none text-white uppercase'>SST Services</p>
                <p className='p-5 pb-0 font-bold'>SST Monthly Submission</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 700.00 per month</p>
                </div>

                <p className='p-5 pb-0 font-bold'>SST Registration</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00 per account</p>
                </div>

                <p className='p-5 pb-0 font-bold'>SST De-registration</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00 per account</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Drafting of transfer of business</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00 per agreement</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Representing clients for Royal Malaysian Custom’s queries</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 per hour</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Public, in-house seminar, training on SST</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 2,000.00 per one work day</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Products Classification</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00 per submission/ 5 products</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Reverse Pick-Up</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 15.00</p>
                </div>
        </div>
        </>
    )
}