import React from 'react';
import clsx from 'clsx'
import { Header } from '../components/home/Header';
import Footer from '../components/home/Footer';
import { HomeBack } from '../components/home/HomeBack';
import { Typography } from '@material-tailwind/react';

import BackElipse1SVG from '../assets/svgs/ellipse-1.svg'
import BackElipse2SVG from '../assets/svgs/ellipse-2.svg'

const TermsPage = () => {


    return <div className={clsx('block  overflow-hidden')}>
        {/* <HomeBack /> */}
        <div className=' max-w-[1200px] mx-auto -xl:max-w-[95%]'>
            <Header />
        </div>


        <div className={clsx('absolute w-full h-fit top-0 left-0 ')}>
            <img src={BackElipse1SVG} className=' float-right w-full' />
            <img src={BackElipse2SVG} className='float-left mt-[-500px]' />
        </div>

        <div className='relative max-w-[882px] mx-auto -xl:max-w-[95%] h-fit'>
            <Typography variant='h1' className='relative tracking-tight pt-10 pb-5  leading-[50px] ' color='white'>
                Terms and Conditions
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] '>
                Last updated: March 14, 2024
            </Typography>
            <Typography variant='h1' className='relative tracking-tight pt-10 pb-5  leading-[50px] ' color='white'>
                Interpretation and Definitions
            </Typography>

            <Typography variant='h3' color='white'>
                Interpretation
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-4'>
                The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </Typography>
            <Typography variant='h3' color='white'>
                Definitions
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-4'>
                For the purposes of these Terms and Conditions:
                <ul className=' list-disc ml-3 my-3 list-outside'>
                    <li className='my-2 '>
                        Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li className='my-2'>
                        Country refers to: Arizona, United States
                    </li>
                    <li className='my-2'>
                        Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to RealEstate Crypto.
                    </li>
                    <li className='my-2'>
                        Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </li>
                    <li className='my-2'>
                        Service refers to the Website.
                    </li>
                    <li className='my-2'>
                        Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the <span className=' underline underline-offset-2'>Terms and Conditions Generator</span>.
                    </li>
                    <li className='my-2'>
                        Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                    </li>
                    <li className='my-2'>
                        Website refers to RealEstate Crypto, accessible from https://realestatecrypto.com
                    </li>
                    <li className='my-2'>
                        You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                    </li>
                </ul>
            </Typography>

            <Typography variant='h3' color='white' className='mb-3'>
                Acknowledgment
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
            </Typography>

            <Typography variant='h3' color='white' className='mb-3 mt-6'>
                Termination
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                Upon termination, Your right to use the Service will cease immediately.
            </Typography>

            <Typography variant='h3' color='white' className='mb-3 mt-6'>
                Limitation of Liability
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
            </Typography>



            <Typography variant='h3' color='white' className='mb-3 mt-6'>
                “AS IS" and "AS AVAILABLE" Disclaimer
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
            </Typography>
            <Typography variant='paragraph' className=' text-[#ffffff7c] py-3'>
                Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
            </Typography>


            <Typography variant='h3' color='white' className='mb-3 mt-6'>
                Governing Law
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
            </Typography>

            <Typography variant='h3' color='white' className='mb-3 mt-6'>
                Disputes Resolution
            </Typography>

            <Typography variant='paragraph' className=' text-[#ffffff7c] py-0'>
                If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
            </Typography>
        </div>
        <div className='my-20'></div>

        <div className='mt-60  mx-auto -xl:max-w-[95%] max-w-[1200px]'>
            <Footer />
        </div>

    </div>
}

export default TermsPage;