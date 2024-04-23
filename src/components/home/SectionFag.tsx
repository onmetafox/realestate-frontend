
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Typography } from '@material-tailwind/react';

// import DeactiveArr from '../../assets/svgs/deactive-arr.svg';
// import ActiveArr from '../../assets/svgs/active-arr.svg';


const FaqList = [
    {
        title: "What is 'E'state Coin?",
        description: "'E'state Coin is a groundbreaking stable coin uniquely tethered to tangible real estate assets. Each coin represents a direct link to a property, ensuring stability and intrinsic value. This innovative approach redefines traditional notions of real estate ownership by bridging the gap between the physical and digital worlds."
    },
    {
        title: "How does Property Linkage Work?",
        description: "Property owners can seamlessly link their real estate assets to the 'E'state Coin network, unlocking liquidity by receiving 'E'state Coins in exchange."
    },
    {
        title: "Can Investors Buy 'E'state Coins?",
        description: "Absolutely. Investors can confidently acquire 'E'state Coins, each backed by a specific property, ensuring immediate and tangible value."
    },
    {
        title: "What is the Purpose of Estate Coin?",
        description: "Estate Coin introduces the concept of fractional ownership of estate-backed securities, offering opportunities for passive income and diversification within the real estate market."
    },
    {
        title: "How Transparent are Transactions?",
        description: "'E'state Coin transactions are characterized by transparency, traceability, and verifiability, elevating the integrity of real estate transactions."
    },
    {
        title: "How Secure is the RealEstate Wallet",
        description: "RealEstate Wallet employs cutting-edge security measures, ensuring the protection of assets and secure property transactions."
    },
    {
        title: "Can I Participate in Property Transactions?",
        description: "Absolutely. Our platform is designed to empower users, allowing them to actively engage in property transactions and providing a transformative experience in asset ownership."
    },

]


type ArrProps = {
    opacity: number;
}

export const Arr: React.FC<ArrProps> = ({
    opacity = 0.4
}) => {
    return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.3685 15.2014L17.3685 2.17178C17.3632 1.92925 17.3101 1.69014 17.2122 1.46819C17.0253 1.02065 16.6695 0.664839 16.2219 0.477939C16 0.380013 15.7609 0.326878 15.5183 0.321584L2.48874 0.321584C2.24577 0.321584 2.00518 0.369441 1.7807 0.462422C1.55622 0.555403 1.35226 0.691688 1.18045 0.863495C0.83347 1.21048 0.638539 1.68108 0.638539 2.17178C0.638539 2.66249 0.833471 3.13309 1.18045 3.48007C1.52743 3.82705 1.99804 4.02198 2.48874 4.02198L11.0752 4.00895L1.18578 13.8984C0.840216 14.244 0.646079 14.7127 0.646079 15.2014C0.646079 15.6901 0.840217 16.1588 1.18578 16.5043C1.53135 16.8499 2.00004 17.044 2.48874 17.044C2.97744 17.044 3.44613 16.8499 3.7917 16.5043L13.6811 6.61487L13.6681 15.2014C13.6671 15.4446 13.7143 15.6857 13.8069 15.9106C13.8995 16.1355 14.0358 16.3399 14.2078 16.5119C14.3798 16.6839 14.5842 16.8201 14.8091 16.9128C15.034 17.0054 15.2751 17.0526 15.5183 17.0516C15.7616 17.0526 16.0026 17.0054 16.2275 16.9128C16.4525 16.8201 16.6568 16.6839 16.8288 16.5119C17.0008 16.3399 17.1371 16.1355 17.2297 15.9106C17.3223 15.6857 17.3695 15.4446 17.3685 15.2014Z" fill="white" fillOpacity={opacity} />
    </svg>
}



const SectionFag: React.FC = () => {

    const [selIndex, setSelIndex] = useState(-1);

    const onTapItem = (index: number) => {
        setSelIndex( selIndex == index ? -1 : index)
    }

    return <div id="section-faq" className='pt-20 max-w-[1200px]'>
        <div className='z-20 relative  py-3 mx-auto flex flex-row items-end justify-between px-5'>
            <Typography variant='h1' color='white' className='flex-[3] tracking-tighter text-center -md:text-start -md:text-[32px]'>
                Frequently Asked Questions
            </Typography>

        </div>

        <div className='max-w-[894px] mx-auto mt-10 relative z-10'>
            {
                FaqList.map((_, index) => {
                    return <div key={'faq_' + index} className='mt-3'>
                        <div className=' p-5 cursor-pointer' onClick={() => onTapItem(index)}>
                            <div className='flex flex-row justify-between items-center' >
                                <Typography variant='h3' color='white' className=' -md:text-[18px]'>
                                    {_.title}
                                </Typography>
                                <div className={clsx(' transition-all ease-in  ', selIndex == index ? 'rotate-90' : '', )}>
                                    <Arr opacity={selIndex == index ? 1 : 0.4} />
                                </div>
                            </div>

                            <Typography variant='paragraph' className={clsx('text-[#ffffff7c] mt-3 transition-all ease-in', selIndex == index ? '' : 'h-0 opacity-0', '-md:text-[16px]')}>
                                {_.description}
                            </Typography>

                        </div>
                        {
                            FaqList.length - 1 !== index && <div className=' h-[2px] w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 '></div>
                        }
                    </div>
                })
            }
        </div>




    </div>
}

export default SectionFag;