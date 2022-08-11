import React from 'react';
import {CheckIcon, InformationCircleIcon} from '@heroicons/react/solid'

export default function Package () {
    return (
        <>
        <div className='grid grid-cols-3 gap-4 w-auto h-auto'>
            <div className='w-30 h-auto rounded-md bg-slate-100'>
                <p className='p-5 text-center bg-blue-500 w-auto h-auto rounded-md rounded-b-none text-white uppercase'>Monthly Accounting Fees</p>
                    <p className='p-5 pb-0 font-bold'> For a sales turnover of RM 400,000.00 and above</p>
                    <div className='flex flex-row items-center justify-between'>
                    <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Range from RM 500.00 – RM 1,000.00 monthly</p>
                    </div>

                    {/* Remarks */}
                    <p className='p-5 pb-0 italic'>Remarks:</p>
                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Pricing of monthly accounts will be different with referring to the amount of our work.</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Accounting Checklist for Sdn. Bhd./ Berhad.pdf</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Accounting Checklist for Sole Prop. / Partnership/ LLP/ PLT.pdf</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>We will quote individually for sales turnover more than RM 1 million.</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Fast Track accounting services will be adding on additional RM 318.00 (inclusive SST).</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Claiming from Un-claim money from Jabatan Akauntan Negara at RM 300.00 which no inclusive of out of pocket reimbursements and SST</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1 pb-5'>Preparation of Capital Statements from RM 300.00 in consideration the level of complexity</p>
                    </div>

            </div>
            <div className='w-30 h-80 rounded-md bg-slate-100'>
            <p className='p-5 text-center bg-blue-500 w-auto h-auto rounded-md rounded-b-none text-white uppercase'>Yearly Accounting Fees</p>
                <p className='p-5 pb-0 font-bold'>For a sales turnover per annum from RM 50,000.00 to RM 399,999.99.</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>Range from RM 800.00 (dormant) – RM 2,800.00 per annum </p>
                </div>
            </div>
            <div className='w-30 h-auto rounded-md bg-slate-100 pb-10'>
            <p className='p-5 text-center bg-blue-500 w-auto h-auto rounded-md rounded-b-none text-white uppercase'>A La Carte Accounting Fees</p>
                <p className='p-5 pb-0 font-bold'>Cash Flows Projections</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-20'>Range from RM 300.00 per page</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Financial Presentations</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>With related stakeholders or shareholders @ RM 250.00 per hour</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Representing client dealing with IRB</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 per hour</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Finalization & Presentation (Forensic) of Accounts</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>Professional fees from RM 1,000.00 (depends on the complexity of accounts)</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Documents Housekeeping</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 100.00- RM 300.00 as it depends to quantity of house-keep</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Site visit with consultation</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 per hour</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Reverse pick-up</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>Docs to be collected by our appointed courier team starts from RM 15.00 (depends on weight)</p>
                </div>

                <p className='p-5 pb-0 font-bold'>HC Tax Submission Task List</p>
                <div className='flex flex-row items-center justify-between '>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>HC Tax Submission Task List.form</p>
                </div>
            </div>
        </div>
        </>
    )
}