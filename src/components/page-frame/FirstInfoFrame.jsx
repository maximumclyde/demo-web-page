import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';

import coffeeIcon from '../../assets/coffeeIcon.png';
import classes from './FrameStyles.module.css';

const infoFrase = "This is some info about coffee. Nothing special here."

const FirstFrame = ()=>{
    
    const media = useMediaQuery('(min-width: 961px)');

    useEffect(()=>{
        Aos.init({
            duration: 400,
            easing: 'ease-in-out'
        });
    })

    return (
        <div 
            data-aos={`${media && 'flip-left'}`} 
            data-aos-delay={`${media && '0'}`} 
            className={`${classes.frame} ${classes.fr1}`} 
        >
            <div data-aos={'zoom-in'} className={classes.title} >
                <span>Coffee Information</span>
            </div>
            <img src={coffeeIcon} alt='' className={classes.pageIcon} />
            <div className={classes.panelContainer} >
                <div 
                    data-aos={`${!media && 'fade-down'}`} 
                    data-aos-delay={`${!media && '200'}`}
                    className={`${classes.infoPanel} ${classes.info1}`} 
                >
                    <span>{infoFrase}</span>
                    <div 
                        data-aos={'fade-left'} 
                        data-aos-delay={`${media ? '600' : '400'}`} 
                        className={`${classes.image} ${classes.img1}`} 
                    />
                </div>
            </div>
        </div>
    );

};

export default FirstFrame;