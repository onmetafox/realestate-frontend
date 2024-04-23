import React from 'react'
import clsx from 'clsx'
import LogoSVG from '../../assets/svgs/logo.svg';

import ExternalArr from '../../assets/svgs/external-arr.svg';

import XSvg from '../../assets/svgs/X.svg';
import { Typography } from '@material-tailwind/react';


const Footer: React.FC = () => {


    return <div className={clsx('max-w-[1200px] mx-auto z-10 mb-10')}>
        <div className={clsx('py-8 flex flex-row justify-between items-center ')}>
            <div className={clsx('z-10')}>
                <img src={LogoSVG} alt={'logo'} draggable={false} className='-xl:w-[250px]' />
            </div>
            <div className={clsx('z-10 -sm:hidden')}>
                <a href="/" className=''>
                    <img src={XSvg} className='hover:outline hover:outline-pink-100 rounded-[14px] transition-all ease-in duration-200' />
                </a>
            </div>
        </div>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-between w-full items-center -sm:flex-col -sm:items-start -sm:gap-2'>

                <Typography variant='small' className='text-[#ffffff7c]' >
                    ©2024, All right reserved.
                </Typography>
                <div className='flex flex-row gap-5'>
                    <a href="/terms-condition" className='hover:underline'>
                        <Typography variant='small' className='text-[#ffffff7c] hover:underline hover:text-[#dfbaf5] transition-all ease-in duration-200' >
                            Privacy Policy
                        </Typography>
                    </a>
                    <a href="/terms-condition">
                        <Typography variant='small' className='text-[#ffffff7c] hover:underline hover:text-[#dfbaf5] transition-all ease-in duration-200' >
                            Terms of Service
                        </Typography>
                    </a>
                </div>

            </div>
            <div className={clsx('z-10 sm:hidden')}>
                <a href="/" className=''>
                    <img src={XSvg} className='hover:outline hover:outline-pink-100 rounded-[14px] transition-all ease-in duration-200' />
                </a>
            </div>
        </div>
    </div>
}


export default Footer;