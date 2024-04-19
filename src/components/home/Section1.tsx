
import React from 'react'
import clsx from 'clsx'

import CSBackSVG from '../../assets/svgs/cs-back.svg';
import CSShapeSVG from '../../assets/svgs/cs-shape.svg';
import { Typography } from '@material-tailwind/react';

import ExternalArr from '../../assets/svgs/external-arr.svg';

import PhoneBackSVG from '../../assets/svgs/phone-back.svg';
import PhoneBottomSVG from '../../assets/svgs/phone-bottom.svg';

import PhonePng from '../../assets/images/phone.png';
import useStayModalState from '../../states/stay-modal.states';



const Section1: React.FC = () => {

    const handleOpenStayModal = useStayModalState(state=>state.toggleOpen);


    return <div className={clsx('w-full flex flex-row justify-between items-end gap-5 pt-20 -2md:flex-col -2md:items-stretch')}>

        <div className='relative flex-[62.75%] h-fit rounded-[35px] -2md:bg-gradient-to-b -2md:from-[#0d174a84] -2md:to-[#2038b058]'>

            <div className='relative z-10 text-[24px] font-trapLight rounded-full bg-[#2847F533] rotate-[-3.61deg] px-7 py-3 text-white w-fit mx-7 my-[-20px] -xl:text-[16px]'>
                comming soon
            </div>
            <img src={CSBackSVG} className={clsx(' absolute left-0 bottom-0 right-0 object-fill h-full w-full z-0 -2md:hidden')} draggable={false} />
            <img src={CSShapeSVG} className={clsx(' absolute right-0 top-7 z-0 -2md:hidden')} draggable={false} />

            <Typography variant='h1' className='relative tracking-tight px-8 py-10  w-[76%] -2md:w-full -2md:text-center leading-[50px] -xl:text-[32px]' color='white'>
                Unlocking a New Era of Asset Ownership: <br className='-2md:hidden'/>Where Real Estate and Crypto
                Converge
            </Typography>

            <button
                className={
                    clsx(
                        'transition-all ease-in-out duration-150 rounded-full text-white h-[48px] px-16 -xl:px-8 -xl:h-[60px]',
                        'bg-[length:200%_100%] bg-right bg-gradient-to-r from-[#ddacfa] via-[#B538FF] to-[#B538FF]',
                        'hover:bg-left ',
                        'absolute bottom-0 right-0 h-[84px] flex flex-row items-center gap-6 -2md:relative',
                        'font-trapBold font-[700] text-[18px]',
                        'mb-3 -xl:mb-5 -2md:mx-auto'
                    )
                }
                onClick={handleOpenStayModal}
            >
                Stay tuned!
                <img src={ExternalArr} />
            </button>
        </div>

        <div className='z-10 mb-3 relative flex-[38%] -2md:mx-auto -2md:mt-20'>
            <img src={PhoneBackSVG} className={clsx('absolute left-0 bottom-0 z-0  right-0')} draggable={false} />
            <img src={PhoneBottomSVG} className={clsx('absolute bottom-0 left-0 z-20 ')} draggable={false} />
            <img src={PhonePng} className='relative z-10' draggable={false} />
        </div>
    </div>
}

export default Section1;