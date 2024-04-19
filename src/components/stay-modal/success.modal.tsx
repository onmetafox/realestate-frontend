import React, { useState, useEffect } from 'react'

import { Typography } from '@material-tailwind/react';

import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
} from "@material-tailwind/react";
import useSuccessModalState from '../../states/success-modal.states';

import SuccessPNG from '../../assets/images/success.png';


const SuccessModal: React.FC = () => {

    const open = useSuccessModalState(state => state.open)
    const handleOpen = useSuccessModalState(state => state.toggleOpen);

    return <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none -sm:max-w-[90%] -sm:fixed -sm:bottom-0"
    >
        <Card className="mx-auto w-full max-w-[500px] bg-transparent relative rounded-[20px] pt-5 "  >
            <div className='absolute  w-full h-full top-0 left-0 z-0 bg-gradient-to-b from-[#0d174a6a] to-[#2038b058] rounded-[20px] backdrop-blur-lg'></div>
            <CardBody className="flex flex-col gap-4 z-10">
                <div>
                    <img src={SuccessPNG}  className='mx-auto'/>
                </div>

                <Typography variant="h1" color="white" className='mx-auto mb-5 mt-4 lg:mt-[-90px]'>
                    Success!
                </Typography>
                <Typography
                    className="mb-10 font-normal text-[#ffffff85] text-center"
                    variant="h4"
                    color="gray"
                >
                    Our support team will contact you during 24 hours!
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex flex-row gap-5 z-10">
                <Button variant='outlined' onClick={handleOpen} fullWidth color='white' className='rounded-full text-[18px] !font-trapBold flex-1 max-w-[230px] mx-auto mb-5 outline-none'>
                    Close
                </Button>
            </CardFooter>
        </Card>
    </Dialog>
}


export default SuccessModal;