import React from 'react';
import {CheckIcon, InformationCircleIcon} from '@heroicons/react/solid'

export default function PackageTax () {
    return (
        <>
            <div className='w-30 h-auto pb-20 rounded-md bg-slate-100'>
            <p className='p-5 text-center bg-blue-500 w-auto h-auto rounded-md rounded-b-none text-white uppercase'>Tax Services</p>
                <p className='p-5 pb-0 font-bold'>Limited Company (i.e Sdn. Bhd / Berhad) (Form C) @ Tax Submission </p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 (Dormant Account)</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 400.00 to RM 1,500.00 (Depends on complexity of transaction)</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Must file the tax returns (Form C) within 7 months from the date of closing of its basis
                        period (i.e. accounting period) with the charges accordingly.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Limited Liability Partnership (LLP) (Form PT) @ Tax Submission</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 (Dormant Account)</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 400.00 to RM 1,500.00 (Depends on complexity of transaction)</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Must file the tax returns (Form PT) within 7 months from the date of closing of its basis
                        period (i.e. accounting period) with the charges accordingly.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Business income from Sole Proprietor or Enterprise (Form B)</p>
                <p className='pl-5 pr-5 pb-0 italic'>LHDN LLP Tax Requirements</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 200.00</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Tax submission dateline is 30th June yearly (it’s applicable to individual who are running
                            a business &amp; also employment income).
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Individual (Form BE)</p>
                <p className='pl-5 pr-5 pb-0 italic'>Sample Form B</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 200.00</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Tax submission dateline is 30th Apr yearly; (It’s applicable to individual who is having
                            on employment income or director working under self own Sdn. Bhd.).
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Registration of PCB account for Employer</p>
                <p className='pl-5 pr-5 pb-0 italic'>Sample of Form BE</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>For salaried employees who earn more than RM 3,000.00 per month.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Preparation of tax estimation for Company</p>
                <p className='pl-5 pr-5 pb-0 italic'>Sample of Form BE</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>In submitting of Form CP 204, CP 204A &amp; BIK EA Statment
                        BIK 4 EA Form Purpose (Vehicle and Petrol) to LHDN.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Preparation of capital statement / net worth statement to LHDNRM
                    300.00 - RM 1,000.00*</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>Price varies depends on complexity. (ABC Capital Statement Sample.pdf)</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Tax consultation</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 250.00 per hour</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Partnership (Form P)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00 per submission</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>It is applicable for enterprise with more than 1 partner. Download sample of Form P - 2018 here.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Opening Tax File for Partnership (Form P), PLT (Form PT)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Opening Tax File for Company (Form C &amp; E )</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Opening Tax File for Employment Income (Form BE)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Opening Tax File for Sole Proprietor (Form B )</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Site visit and consultation</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 250.00 per hour</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Cost excluding with out-of-pocket expenses.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Answering tax audit</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 500.00</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>As initial processing fees and upon successful tax savings then will be 10 % from tax amount being saved.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Application of Tax Clearance Certificate</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00 per certificate</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Employer will to submit accordingly: Public servant @ CP22B, Private sector @ CP22A and for individuals
                        who are leaving Malaysia @ CP21.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Reverse pick-up</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 15.00</p>
                </div>

                <p className='p-5 pb-0 font-bold'>Submission of Withholding Tax (CP 37)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 300.00*/ per CP 37</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>LHDN Guidelines E-Commerce (charges inclusive of SST).
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Closing of Tax File (B, BE, P, PT, C or E)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>RM 150.00/ per tax file</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Applicable for pensioners without income, living Malaysia for good and age of 55 without any source of
                        income.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Corporate Tax Planning (CTP) with findings and
                    recommendations</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 1,000.00/ per company</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Corporate Tax Planning comes with a detailed analysis with facts finding, research, recommendations and 1
                        hour presentation.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Preparation of LHDN&#39;s Transfer Pricing Documentation (TPD)</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From RM 800.00 / per TPD</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>The Transfer of Goods, Services and intangible between related parties.
                    </p>
                </div>

                <p className='p-5 pb-0 font-bold'>Drafting and sending tax appeal letter</p>
                <div className='flex flex-row items-center justify-between'>
                <CheckIcon className="ml-5 h-5 w-5 text-blue-500"/>
                <p className='pr-5 pl-5 flex flex-1'>From 159.00/ per letter of appeal</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Tax Appeal letter under Income Tax Acts section 99 and it is excluding further follow through case of the
                        appeal.
                    </p>
                </div>

                {/* Remarks */}
                <p className='p-5 pb-0 italic'>Remarks:</p>
                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>All pricing subjected to 6% SST.</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>LHDN’s TPD Flowchart Guideline LHDN TPD Flowchart Guideline 2012.pdf</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>Check Malaysia’s Immigration for tax clearance before moving
                        out: https://sspi.imi.gov.my/SSPI/</p>
                    </div>

                    <div className='flex flex-row items-center justify-between'>
                    <InformationCircleIcon className="ml-5 h-5 w-5 text-blue-500"/>
                    <p className='pr-5 pl-5 flex flex-1'>A sample of Form CP 37 Royalty payment of Withholding Tax :LHDN
                        CP37_Pin3_2014 Royalty.pdf</p>
                    </div>
        </div>
        </>
    )
}