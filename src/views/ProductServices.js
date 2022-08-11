import React, {useEffect, useRef, useState} from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Headbanner';
import Footer from '../components/Footer'
import productHead from '../assets/Product_header.jpg'
import Package from '../components/PackageAcc';
import PackageLLP from '../components/PackageLLP';

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
              'FuDSDSnt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
          },
          {
            label: 'Tax',
            content:
              'FuDSDSnt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.',
          },
      ]
    return (
        <>
        <Navbar></Navbar>
        <Banner image={productHead} title="PRODUCT | SERVICES" titlerow2="" desc=""></Banner>
        <div className='container px-16 mx-auto'>
            
        <div>
                <div className='px-2 py-8'>
                    <h2 className='text-xl text-center font-bold uppercase'>Our Solution</h2>
                    <p className='text-sm text-center pt-4 px-8'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</p>
                    <p className='text-sm text-center pt-4 px-8'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>

          

            <div className='pt-5 pb-20'>
                <div className="flex flex-center justify-center mb-4 border-b border-gray-200 dark:border-gray-700 relative">
                    <div className="flex space-x-3 border-b">
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
