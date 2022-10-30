import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mui/material';
import { Link as LinkTo } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Link }  from 'react-scroll';

import { MdOutlineMenuBook } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import classes from './SignFrame.module.css';

const SignFrame = ()=>{

    const mediaCollage = useState([
        <div key='1' data-aos={'zoom-out'} data-aos-delay={'200'} className={classes.foto1} />,
        <div key='2' data-aos={'zoom-out'} data-aos-delay={'500'} className={classes.foto2} />,
        <div key='3' data-aos={'zoom-out'} data-aos-delay={'800'} className={classes.foto3} />,
        <div key='4' data-aos={'zoom-out'} data-aos-delay={'1100'} className={classes.foto4} />,
        <div key='5' data-aos={'zoom-out'} data-aos-delay={'1400'} className={classes.foto5} />,
        <div key='6' data-aos={'zoom-out'} data-aos-delay={'1700'} className={classes.foto6} />,
    ])[0];
    const media = useMediaQuery('(min-width: 961px)');

    useEffect(()=>{
        Aos.init({
            duration: 400,
            easing: 'ease-in-out'
        });
    })

    return (
        <div className={classes.frame} >
            <div className={classes.buttonContainer} >
                <div className={classes.filter} />
                {media && 
                <div className={classes.collage} >
                    <div className={classes.col1} >
                        {mediaCollage[0]}
                    </div>
                    <div className={classes.col2} >
                        {mediaCollage[1]}
                        {mediaCollage[2]}
                        {mediaCollage[3]}
                    </div>
                    <div className={classes.col3} >
                        {mediaCollage[4]}
                        {mediaCollage[5]}
                    </div>
                </div>}
                <Link activeClass='dummy' to='location' smooth={true} >
                    <div data-aos={'fade-right'} className={classes.button} >
                        <HiOutlineLocationMarker />
                        <span>Where to find us</span>
                    </div>
                </Link>
                <LinkTo to='/menu' >
                    <div data-aos={'fade-left'} data-aos-delay={'200'} className={classes.button} >
                        <MdOutlineMenuBook />
                        <span>Read our menu</span>
                    </div>
                </LinkTo>
            </div>
        </div>
    );

};

export default SignFrame;