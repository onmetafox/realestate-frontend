
import React from 'react'
import clsx from 'clsx'

import { Typography } from '@material-tailwind/react';
import Unicorn from '../../assets/svgs/unicorn.svg'
import ExternalArr from '../../assets/svgs/external-arr.svg';


const Steps = [
    {
        title: 'Enter Unswap',
        description: <div>Visit the <a href="https://uniswap.org/" className=" text-purple-400" target="_blank">www.uniswap.org</a> platform and hit launch app.</div>,
    },
    {
        title: 'Connect your Wallet',
        description: 'These wallets can be found in the appstore. We recommend coinbase wallet. Download and open the app on your phone and connect by scanning the QR code from within the app.',
    },
    {
        title: 'Polygon Network on Coinbase Wallet',
        description: 'Once connected, use your desktop and click on the dropdown next to your coinbase wallet, here you can choose the polygon network.',
    },
    {
        title: 'Buying Polygon for TLT Swaps',
        description: 'Here you can buy Polygon (Matic) and use it to swap it for TLT. ',
    },
]


const SectionUniswap: React.FC = () => {

    return <div id="section-unsiwap" className='mt-20 relative  bg-repeat' >

        <div className='bg-[url("/public/images/texture.svg")] absolute top-0 left-0 w-full h-full opacity-20'></div>

        <div className='flex flex-row justify-center items-center'>
            <img src={Unicorn} className='z-10 -md:w-[109px]' />
        </div>

        <div className='w-full flex flex-col items-center gap-5 mt-10 -md:w-[90%] mx-auto'>
            <Typography variant='h1' color='white' className='flex-[3] max-w-[741px] tracking-tighter text-center -2md:text-[32px]'>
                Buy our tokens on Uniswap now!
            </Typography>

            <Typography variant='paragraph' color='white' className='flex-1 text-[#ffffff7c] text-center w-1/2 -md:w-3/4'>
                Discover our tokens available for purchase on Uniswap, the leading decentralized exchange platform.
            </Typography>
        </div>

        <div className='relative max-w-[1200px] mx-auto z-10 -xl:max-w-[95%]'>
            <div className='pt-10 grid grid-cols-2 gap-6 -2md:grid-cols-1'>

                {
                    Steps.map((_, index) => {

                        return <div key={'su_'+index} className=' rounded-[24px] border-2 border-[#3A3C3F] p-6 bg-[#1E1F23]'>

                            <div className='p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-full z-10 w-fit mb-2'>
                                <div className=' bg-gradient-to-r from-[#252631] to-[#424258] py-2 px-3 rounded-full h-full w-fit'>
                                    <Typography variant='small' className=' text-[#ffffff7c] text-center'>0{index + 1}</Typography>
                                </div>
                            </div>

                            <Typography variant='h3' color='white' className='flex-[3] font-trapReg max-w-[741px] tracking-tighter my-6 -2md:text-[24px] -md:text-[18px]'>
                                {_.title}
                            </Typography>

                            <Typography variant='paragraph' color='white' className='flex-1 text-[#ffffff7c]'>
                                {_.description}
                            </Typography>


                        </div>
                    })
                }

            </div>
        </div>


        <div className='w-full flex flex-col items-center gap-5 mt-40'>
            <Typography variant='h1' color='white' className='flex-[3] max-w-[792px] tracking-tighter text-center -2md:text-[32px]'>
                Please contact our team if you are having issues with this process
            </Typography>

            <Typography variant='paragraph' color='white' className='flex-1 text-[#ffffff7c] text-center w-1/3 -md:w-3/4'>
                Please contact our team if you are having issues with this process and we will be happy to assist.
            </Typography>

            <button
                className={
                    clsx(
                        'transition-all ease-in-out duration-150 rounded-full text-white h-[48px] px-10 cursor-pointer',
                        'bg-[length:200%_100%] bg-right bg-gradient-to-r from-[#ddacfa] via-[#B538FF] to-[#B538FF]',
                        'hover:bg-left z-10',
                        ' font-trapBold flex flex-row items-center overflow-hidden'
                    )
                }
            >
                <Typography variant='h4' color='white' className='flex flex-row items-center gap-5'>
                    How to buy
                    <img src={ExternalArr}/>
                </Typography>
            </button>
        </div>


    </div>
}

export default SectionUniswap;