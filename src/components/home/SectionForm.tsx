
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Typography } from '@material-tailwind/react';

// import FormLogoSvg from '../../assets/svgs/form-logo.svg';
import FormLogoSvg from '../../assets/images/form-logo.png';

import ExternalArr from '../../assets/svgs/external-arr.svg';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Textarea
} from "@material-tailwind/react";
import useStayModalState from '../../states/stay-modal.states';
import StayModal from '../stay-modal/stay.modal';
import SuccessModal from '../stay-modal/success.modal';

const SectionForm: React.FC = () => {

    const { email, message, subject, setEmail, setSubject, setMessage } = useStayModalState(state => state);

    const onChangeEmail = (_: any) => {
        setEmail(_.target.value);
    }
    const onChangeSubject = (_: any) => {
        setSubject(_.target.value);
    }
    const onChangeMessage = (_: any) => {
        setMessage(_.target.value);
    }

    const handleOpen = useStayModalState(state => state.toggleOpen);

    return <div className='pt-20 max-w-[1200px] relative mt-[70px]'>

        <img src={FormLogoSvg} className='absolute bottom-0 right-0 -2md:bottom-auto -2md:top-10' draggable={false} />
        <div className='w-full bg-gradient-to-b from-[#0d174a71] to-[#2038b068] rounded-[42px] h-fit p-10 -md:p-7'>
            <div className='w-1/2 max-w-[478px] -2md:max-w-[500px] -2md:w-[100%] -2md:mx-auto -2md:mt-24 z-10 relative'>

                <Typography variant='h1' color='white' className='-2md:text-[32px]'>
                    Stay Tuned!
                </Typography>
                <Typography variant='paragraph' className='text-[#ffffff7c] mt-5 -2md:text-[14px]'>
                    Stay tuned for the official launch of our platform, where you can explore, invest, and engage in a new era of real estate and cryptocurrency convergence.
                </Typography>
                <div className=' p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[12px] z-10 mt-4 h-[48px] relative'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] px-6 py-2 rounded-[12px] h-full '>
                        <input type='text' onChange={onChangeSubject} value={subject} className=' bg-transparent  w-full text-white h-full outline-none ' placeholder='Name' />
                    </div>
                </div>
                <div className=' p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[12px] z-10 mt-4 h-[48px] relative'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] px-6 py-2 rounded-[12px] h-full '>
                        <input onChange={onChangeEmail} value={email} type='email' className=' bg-transparent  w-full text-white h-full outline-none ' placeholder='Email' />
                    </div>
                </div>

                <div className=' p-[1px] bg-gradient-to-b from-[#7a7a7b] to-[#646b9e] rounded-[12px] z-10 mt-4 h-fit relative'>
                    <div className=' bg-gradient-to-r from-[#252631] to-[#424258] px-5 py-2 rounded-[12px] h-full '>
                        <textarea onChange={onChangeMessage} value={message} className=' bg-transparent  w-full text-white h-full min-h-[100px] max-h-[100px] outline-none ' placeholder='Message' />
                    </div>
                </div>

                <button
                    className={
                        clsx(
                            'transition-all ease-in-out duration-150 rounded-full text-white h-[48px] px-8',
                            'bg-[length:200%_100%] bg-right bg-gradient-to-r from-[#ddacfa] via-[#B538FF] to-[#B538FF]',
                            'hover:bg-left relative',
                            'h-[48px] flex flex-row items-center gap-4 mt-5 z-10'
                        )
                    }
                    onClick={handleOpen}
                >
                    <Typography variant='h4' color='white' className=' text-[18px] font-trapBold pt-1'> Submit!</Typography>
                    <img src={ExternalArr} />
                </button>
            </div>
        </div>
        <StayModal />
        <SuccessModal />
    </div>
}

export default SectionForm;