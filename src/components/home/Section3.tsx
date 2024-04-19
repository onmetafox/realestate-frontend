
import React from 'react'
import clsx from 'clsx'

import { Typography } from '@material-tailwind/react';
import Mockup from '../../assets/svgs/mockup.svg'


const Section3: React.FC = () => {

    return <div className='pt-20 '>
        <div className='z-20 relative bg-[#2d3269] rounded-full w-fit py-3 px-8 mx-auto'>
            <Typography variant='h3' color='white' className='text-center font-trapLight -2md:text-[16px]'>
                The RealEstate Wallet Protocol
            </Typography>
        </div>

        <div className={clsx(' bg-gradient-to-br from-[#2e2a6a] via-[#1b1b1b] to-[#1b1b1b] w-full p-7 z-10 relative rounded-[32px] mt-[-20px]')}>
            <Typography variant='h1' color='white' className='text-center pt-8 pb-5  -2md:text-[32px]'>Redefining Property Transactions</Typography>
            <Typography variant='small' className=' text-[#ffffff7c] max-w-[676px] mx-auto text-center'>Unlock the future of property transactions with our sophisticated protocol, seamlessly blending simplicity, security, and efficiency.</Typography>

            <div className='grid grid-cols-6 gap-5 pt-8 -md:grid-cols-1'>

                <div className=' col-span-2 -md:col-span-1  p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[24px] z-10'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] p-4 rounded-[24px] h-full'>
                        <Typography className=' text-white max-w-[676px] mx-auto text-center'>Simplified Interface</Typography>
                        <Typography variant='small' className=' text-[#ffffff7c] pt-3 max-w-[676px] mx-auto text-center'>Navigate effortlessly through RealEstate Wallet's user-friendly interface, designed for intuitive property transactions.</Typography>
                    </div>
                </div>
                <div className=' col-span-2 -md:col-span-1  p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[24px] z-10'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] p-4 rounded-[24px]  h-full'>
                        <Typography className=' text-white max-w-[676px] mx-auto text-center'>Robust Security Measures</Typography>
                        <Typography variant='small' className=' text-[#ffffff7c] pt-3 max-w-[676px] mx-auto text-center'>Rest easy knowing that your assets are protected by cutting-edge security algorithms, ensuring a secure property transaction experience.</Typography>
                    </div>
                </div>
                <div className=' col-span-2 -md:col-span-1  p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[24px] z-10'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] p-4 rounded-[24px] h-full'>
                        <Typography className=' text-white max-w-[676px] mx-auto text-center'>Efficiency Unleashed</Typography>
                        <Typography variant='small' className=' text-[#ffffff7c] pt-3 max-w-[676px] mx-auto text-center'>Experience swift and reliable property transactions, saving valuable time and making asset ownership seamless.</Typography>
                    </div>
                </div>
                <div className=' col-span-3 -md:col-span-1 p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[24px] z-10'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] p-4 rounded-[24px] h-full'>
                        <Typography className=' text-white max-w-[676px] mx-auto text-center'>Transparency at its Core</Typography>
                        <Typography variant='small' className=' text-[#ffffff7c] pt-3 max-w-[676px] mx-auto text-center'>Enhance transparency with traceable and verifiable property transactions, revolutionizing the traditional landscape of ownership.</Typography>
                    </div>
                </div>
                <div className=' col-span-3 -md:col-span-1  p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[24px] z-10'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] p-4 rounded-[24px] h-full'>
                        <Typography className=' text-white max-w-[676px] mx-auto text-center'>Empowering Asset Ownership</Typography>
                        <Typography variant='small' className=' text-[#ffffff7c] pt-3 max-w-[676px] mx-auto text-center'>RealEstate Wallet empowers users to actively participate in the future of asset ownership, delivering a transformative experience</Typography>
                    </div>
                </div>
            </div>
            
            <div className='pt-10 mx-[-25px]'>
                <img src={Mockup} className='w-full object-cover' />    
            </div>

        </div>
    </div>
}

export default Section3;