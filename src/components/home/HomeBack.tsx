
import React from 'react'
import clsx from 'clsx'

import RTGra1SVG from '../../assets/svgs/rt-gra-1.svg';
import LBGra1SVG from '../../assets/svgs/lb-gra-1.svg';
import ShapesSVG from '../../assets/svgs/shapes.svg';
import Footer from './Footer';


export const HomeBack: React.FC = () => {

    return <div className={clsx('absolute  min-w-full w-full z-0')}>
        <img src={RTGra1SVG} className={clsx(' float-right w-full z-0')} draggable={false} />
        <img src={LBGra1SVG} className={clsx(' z-0 ')} draggable={false} />
        <img src={ShapesSVG} className={clsx('  z-0 absolute top-0 right-0 left-0 w-[100vw]')} draggable={false} />

        
    </div>
}

