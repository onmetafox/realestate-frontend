import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import { Spinner, Typography } from '@material-tailwind/react';

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
import useSuccessModalState from '../../states/success-modal.states';
import Api from '../../services/api';

const StayModal: React.FC = () => {

    const open = useStayModalState(state => state.open)
    const { email, message, subject, setEmail, setMessage, setSubject } = useStayModalState(state => state);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleOpen = useStayModalState(state => state.toggleOpen);

    const handleSuccessOpen = useSuccessModalState(state => state.toggleOpen);


    const onChangeEmail = (_: any) => {
        if (isLoading) return;
        setEmail(_.target.value);
    }
    const onChangeSubject = (_: any) => {
        if (isLoading) return;
        setSubject(_.target.value);
    }
    const onChangeMessage = (_: any) => {
        if (isLoading) return;
        setMessage(_.target.value);
    }

    const clearAll = () => {
        setMessage('');
        setEmail('');
        setSubject('');
    }



    const onSubmit = async () => {
        if (isLoading) return;
        if (!email || !subject || !message) return;

        try {
            setIsLoading(true);
            const data = { receiver: email, html: message, text: message, subject: 'Username: ' + subject };
            console.log('>>api sendEmail:', { data });
            await Api.sendEmail(data);
            handleSuccessOpen();
        } catch (ex) {
            console.error(ex);
        }

        setIsLoading(false);
        handleOpen();
        clearAll();
    }

    return <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none -sm:max-w-[90%] -sm:fixed -sm:bottom-0"
    >
        <Card className="mx-auto w-full max-w-[500px] bg-transparent relative rounded-[20px] "  >
            <div className='absolute  w-full h-full top-0 left-0 z-0 bg-gradient-to-b from-[#0d174a6a] to-[#2038b058] rounded-[20px] backdrop-blur-lg'></div>
            <CardBody className="flex flex-col gap-4 z-10">
                <Typography variant="h1" color="white">
                    Stay Tuned!
                </Typography>
                <Typography
                    className="mb-3 font-normal text-[#ffffff85]"
                    variant="paragraph"
                    color="gray"
                >
                    Stay tuned for the official launch of our platform, where you can explore, invest, and engage in a new era of real estate and cryptocurrency convergence.
                </Typography>

                <div>
                    <Input onChange={onChangeSubject} value={subject} label="Name" size="lg" crossOrigin={undefined} className='text-white bg-gradient-to-r from-[#252631] to-[#424258]' />
                    {!subject && <div className={clsx(' text-red-400 text-[13px] mt-1')}>*This field is required.</div>}
                </div>
                <div>
                    <Input onChange={onChangeEmail} value={email} label="Email" size="lg" crossOrigin={undefined} className='text-white bg-gradient-to-r from-[#252631] to-[#424258]' />
                    {!email && <div className={clsx(' text-red-400 text-[13px] mt-1')}>*This field is required.</div>}
                </div>
                <div>
                    <Textarea onChange={onChangeMessage} value={message} className=' bg-transparent  w-full text-white h-full min-h-[100px] max-h-[100px]  bg-gradient-to-r from-[#252631] to-[#424258]' placeholder='Message' />
                    {!message && <div className={clsx(' text-red-400 text-[13px] mt-1')}>*This field is required.</div>}
                </div>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row gap-5 z-10 ">
                <Button variant='outlined' onClick={handleOpen} fullWidth color='white' className='rounded-full text-[18px] !font-trapBold flex-1'>
                    Cancel
                </Button>
                <button
                    className={
                        clsx(
                            'transition-all ease-in-out duration-150 rounded-full text-white h-[60px] px-8 flex-1',
                            'bg-[length:200%_100%] bg-right bg-gradient-to-r from-[#ddacfa] via-[#B538FF] to-[#B538FF]',
                            'hover:bg-left relative',
                            'h-[48px] flex flex-row items-center justify-center gap-4 z-10'
                        )
                    }
                    onClick={onSubmit}
                >
                    {
                        isLoading ? <Spinner color='pink' className='h-6 w-6' /> : <>
                            <Typography variant='h4' color='white' className=' text-[18px] font-trapBold pt-1'> Submit!</Typography>
                            <img src={ExternalArr} />
                        </>
                    }

                </button>

            </CardFooter>
        </Card>
    </Dialog>
}


export default StayModal;