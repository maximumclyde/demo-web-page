import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';

import breakfastIcon from '../../assets/breakfast-icon.png';
import classes from './FrameStyles.module.css';

const infoFrase = "This is information regarding events. Nothing special here."

const ThirdFrame = ()=>{
    
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
            data-aos-delay={`${media && '1800'}`} 
            className={`${classes.frame} ${classes.fr3}`} 
        >
            <div data-aos={'zoom-in'} className={classes.title} >
                <span>Breakfast Information</span>
            </div>
            <img src={breakfastIcon} alt='' className={classes.pageIcon} />
            <div className={classes.panelContainer} >
                <div 
                    data-aos={`${!media && 'fade-down'}`} 
                    data-aos-delay={`${!media && '200'}`} 
                    className={`${classes.infoPanel} ${classes.info3}`} 
                >
                    <span>{infoFrase}</span>
                    <div 
                        data-aos={'fade-left'} 
                        data-aos-delay={`${media ? '2400' : '400'}`} 
                        className={`${classes.image} ${classes.img3}`} 
                    />
                </div>
            </div>
        </div>
    );

};

export default ThirdFrame;