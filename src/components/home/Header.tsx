import React from 'react'
import clsx from 'clsx'
import LogoSVG from '../../assets/svgs/logo.svg';

import ExternalArr from '../../assets/svgs/external-arr.svg';
import { Typography } from '@material-tailwind/react';

import {
    Drawer,
    Button,
    IconButton,
} from "@material-tailwind/react";
import MenuLogo from '../../assets/svgs/menu-logo.svg';
import CloseButton from '../../assets/svgs/close.svg';
import useStayModalState from '../../states/stay-modal.states';


const NavItems = [
    {
        title: 'Wallet Protocol',
        url: '/#section-intro',
        items: []
    },
    {
        title: 'Buy Now',
        url: '/#section-unsiwap',
        items: []
    },
    {
        title: 'Roadmap',
        url: '/#section-roadmap',
        items: []
    },
    {
        title: 'FAQ',
        url: '/#section-faq',
        items: []
    },
    {
        title: 'Contact',
        url: '/#section-contact',
        items: []
    }
]



export const Header: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    

    const handleOpenStayModal = useStayModalState(state=>state.toggleOpen);



    return <div className={clsx('max-w-[1200px] mx-auto z-10')}>
        <div className={clsx('py-8 flex flex-row justify-between items-center')}>
            <div className={clsx('z-10')}>
                <a href="/">
                    <img src={LogoSVG} alt={'logo'} draggable={false} className='-xl:w-[250px]' />
                </a>
            </div>
            <div className={clsx('z-10 flex flex-row items-center -2md:hidden pt-5')}>
                <div className={clsx('flex flex-row gap-4 mr-5')}>
                    {
                        NavItems.map((_, index) => (
                            <a href={_.url}  className={clsx('text-white font-trapReg  hover:font-[700] cursor-pointer transition-all duration-150 ease-in text-base')}>
                                {_.title}
                            </a>))
                    }
                </div>
                <button
                    className={
                        clsx(
                            'transition-all ease-in-out duration-150 rounded-full text-white h-[48px] px-10',
                            'bg-[length:200%_100%] bg-right bg-gradient-to-r from-[#ddacfa] via-[#B538FF] to-[#B538FF]',
                            'hover:bg-left ',
                            ' font-trapBold flex flex-row items-center overflow-hidden'
                        )
                    }
                    onClick={handleOpenStayModal}
                >
                    <div className='flex flex-row items-center gap-5'>
                        <div className='text-white text-base my-auto'>
                            Stay tuned!
                        </div>
                        <img src={ExternalArr} />
                    </div>
                </button>
            </div>
            <div className='2md:hidden z-10'>
                <Button onClick={openDrawer} className='bg-transparent  p-0' >
                    <img src={MenuLogo} />
                </Button>
            </div>
        </div>
        <Drawer open={open} onClose={closeDrawer} className={clsx("p-4 transition-all ease-in-out duration-300 !max-w-[100vw]  backdrop-blur-lg",
            open ? '!translate-x-0' : '!translate-x-[-100vw]',
        )}>
            <div className='absolute  w-full h-full top-0 left-0 z-0 bg-gradient-to-b from-[#0D174A] to-[#2037B0] opacity-30 '></div>
            <div className='z-10 relative'>
                <div className="mb-6 flex flex-row items-center justify-end">
                    <Button onClick={closeDrawer} className='bg-transparent  p-0' >
                        <img src={CloseButton} />
                    </Button>
                </div>
                <div className='flex flex-col gap-5 justify-between items-center max-w-[375px] mx-auto mt-20'>
                    <a href="/#section-intro">
                        <Typography color="white" variant='h2' className="mb-8 pr-4 font-normal">
                            Wallet Protocol
                        </Typography>
                    </a>
                    <a href="/#section-unsiwap">
                        <Typography color="white" variant='h2' className="mb-8 pr-4 font-normal">
                            Buy Now
                        </Typography>
                    </a>
                    <a href="/#section-roadmap">
                        <Typography color="white" variant='h2' className="mb-8 pr-4 font-normal">
                            Roadmap
                        </Typography>
                    </a>
                    <a href="/#section-faq">
                        <Typography color="white" variant='h2' className="mb-8 pr-4 font-normal">
                            FAQ
                        </Typography>
                    </a>
                    <a href="/#section-contact">
                        <Typography color="white" variant='h2' className="mb-8 pr-4 font-normal">
                            Contact
                        </Typography>
                    </a>

                    
                </div>

            </div>

        </Drawer>
    </div>
}