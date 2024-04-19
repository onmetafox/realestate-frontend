import React from 'react'
import clsx from 'clsx'

import { Header } from '../components/home/Header';
import { HomeBack } from '../components/home/HomeBack';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import SectionFag from '../components/home/SectionFag';
import SectionForm from '../components/home/SectionForm';
import Footer from '../components/home/Footer';
import SectionUniswap from '../components/home/SectionUniswap';



export const HomePage: React.FC = () => {


    return <div className={clsx('relative ')}>
        <HomeBack />

        <div className=' max-w-[1200px] mx-auto -xl:max-w-[95%]'>
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
        <SectionUniswap />
        <div className=' max-w-[1200px] mx-auto -xl:max-w-[95%]'>
            <Section4 />
            <SectionFag />
            <SectionForm />
        </div>

        <div className='mt-60  mx-auto -xl:max-w-[95%] max-w-[1200px]'>
            <Footer />
        </div>


    </div>
}