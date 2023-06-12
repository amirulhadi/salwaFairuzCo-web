import React, {useEffect, useRef, useState} from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import productHead from '../assets/Product_header.jpg'
import Package from '../components/PackageAcc';
import PackageLLP from '../components/PackageLLP';
import PackageSST from '../components/PackageSST';
import PackageTax from '../components/PackageTax';
import client from '../assets/client_shake.jpg'
import acc_serv from '../assets/accounting_srv.jpg'
import llp_plt from '../assets/llp_plt.jpg'
import sst from '../assets/sst.jpg'
import tax from '../assets/tax.jpg'

export default function ProductServices () {
 const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
    }, [activeTabIndex]);

    const tabsData = [
        {
          label: 'Accounting Services',
          content:
            <Package/>,
        },
        {
          label: 'LLP/PLT',
          content:
            <PackageLLP />
        },
        {
            label: 'SST',
            content:
              <PackageSST/>
          },
          {
            label: 'Tax',
            content:
              <PackageTax />,
          },
      ]
    return (
        <>
        <Navbar></Navbar>
        <Banner image={productHead} title="PRODUCT | SERVICES" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
            
        <div>
            <div className='grid grid-cols-1 gap-4 pt-10 sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <h2 className='text-3xl uppercase font-bold pb-5'>We offer a wide range of services and provide complete client satisfaction</h2>
                    <p>At Salwa, Fairuz & Co., we understand that your satisfaction is the cornerstone of our success. 
                        That's why we are dedicated to providing you with tailor-made solutions that address your unique 
                        needs. Our team of experts is committed to going above and beyond to ensure your utmost satisfaction 
                        at every step of the way.</p>
                </div>
                <div>
                    <img
                    className='border-faded'
                    src= {client}
                    alt="Workflow"
                    />
                </div>

                

            </div>

            {/* <div className='px-2 py-8'> */}
            <div className='grid grid-cols-1 gap-2 pt-10 sm:grid-cols-1 md:grid-cols-2'>
                <div class="grid md:grid-cols-1 lg:grid-cols-1 md:gap-2 sm:grid-cols-1">
                    <div class="card mb-5 sm:mb-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("${acc_serv}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        {/* <img src={acc_serv} alt="acc_services" /> */}
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{position: 'absolute', bottom: 100, color: 'white' }}>Accounting Service</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{position: 'absolute', bottom: 0, color: 'white' }}>Our team of experienced accountants brings extensive knowledge and expertise to the table. We provide comprehensive financial guidance tailored to your industry and business needs.</p>
                    </div>

                    <div class="card mb-5 sm:mb-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("${llp_plt}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{position: 'absolute', bottom: 100, color: 'white' }}>LLP/PLT</h5>
                        </a>
                        <p class="xs:mb-5 sm:mb-5 mb-3 font-normal text-gray-500 dark:text-gray-400" style={{position: 'absolute', bottom: 0, color: 'white' }}>These robust legal entities provide the perfect blend of liability protection, flexibility, and operational efficiency. Partner with us to unlock the full potential of your business.</p>
                    </div>

                    <div class="card mb-5 sm:mb-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("${sst}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{position: 'absolute', bottom: 100, color: 'white' }}>SST</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{position: 'absolute', bottom: 0, color: 'white' }}>We specialize in providing comprehensive service tax solutions designed to simplify your tax compliance process.</p>
                    </div>

                    <div class="card max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" style={{backgroundImage: `linear-gradient(0deg, #00000088 30%, #ffffff44 100%), url("${tax}")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white" style={{position: 'absolute', bottom: 100, color: 'white' }}>Tax</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-500 dark:text-gray-400" style={{position: 'absolute', bottom: 0, color: 'white' }}>From expert guidance and compliance support to tax planning and audit assistance, we are here to simplify your tax journey and help your business thrive.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl uppercase font-bold pb-5 text-right px-8'>Our Solution</h2>
                    <p className='text-sm pt-4 px-8 text-right'><p className='font-bold'>Identifying Your Needs:</p> We begin by taking the time to 
                    thoroughly understand your challenges, goals, and requirements. Our dedicated team will work closely 
                    with you to gain a deep understanding of your specific situation, allowing us to tailor our solutions \
                    precisely to your needs.</p>

                    <p className='text-sm pt-4 px-8 text-right'>
                    <p className='font-bold'>Customized Approach:</p> We believe in a one-size-does-not-fit-all approach. Our experienced professionals 
                    will develop customized strategies and solutions that align with your objectives. By leveraging our 
                    expertise and industry insights, we ensure that our recommendations are relevant, effective, and tailored 
                    specifically for you.
                    </p>

                    <p className='text-sm pt-4 px-8 text-right'>
                    <p className='font-bold'>Transparent Communication:</p>We value open and transparent communication. 
                    Throughout the process, we keep you informed about our progress, milestones, and any adjustments made 
                    along the way. We encourage your feedback and actively seek your input to ensure that the solutions we 
                    provide exceed your expectations.
                    </p>

                    <p className='text-sm pt-4 px-8 text-right'>
                    <p className='font-bold'>Continuous Support:</p>Our commitment to your satisfaction doesn't end with the 
                    implementation of our solutions. We offer ongoing support and follow-up to address any questions or 
                    concerns that may arise. Our team remains accessible and responsive, providing you with the peace of 
                    mind that your needs are always a priority.
                    </p>

                    <p className='text-sm pt-4 px-8 text-right'>
                    <p className='font-bold'>Measure of Success:</p>Your satisfaction is the ultimate measure of our success. 
                    We continuously evaluate the effectiveness of our solutions, seeking feedback and monitoring key 
                    performance indicators to ensure that we deliver on our promises. Your success is our success, and we 
                    are dedicated to achieving it together.
                    </p>
                </div>
                
            </div>
        </div>

        <div>
            <div className='px-2 py-8'>
                <h2 className='text-xl text-center font-bold'>Choose A Pricing Table That's Right For You</h2>
                <p className='text-sm pt-4 px-8'>At Salwa, Fairuz & Co., we believe that providing solutions goes beyond 
                meeting basic requirements. It's about exceeding expectations and ensuring your satisfaction every step of 
                the way. Partner with us, and experience the difference our tailored solutions can make in solving your 
                challenges. Let us empower you with the solutions you need for long-lasting success.</p>
            </div>
        </div>

        <div className='pt-5 pb-20'>
            <div className="flex flex-center justify-center mb-4 border-b border-gray-200 dark:border-gray-700 relative">
                <div className="flex space-x-8 border-b">
                {tabsData.map((tab, idx) => {
                    return (
                    <button
                        key={idx}
                        ref={(el) => (tabsRef.current[idx] = el)}
                        className="pt-2 pb-3"
                        onClick={() => setActiveTabIndex(idx)}
                    >
                        {tab.label}
                    </button>
                    );
                })}
                </div>
                <span
                className="absolute bottom-0 block h-1 bg-blue-900 transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
            </div>
            <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
            </div>
        </div>
        </div>
        <Footer></Footer>
           
        </>
        
    )
}
