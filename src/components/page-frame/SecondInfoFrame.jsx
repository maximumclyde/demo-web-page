import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

import Aos from 'aos';
import 'aos/dist/aos.css';

import wineIcon from '../../assets/wine-glasses-icon.png';
import classes from './FrameStyles.module.css';

const infoFrase = "This is information regarding events. Nothing special here."

const SecondFrame = ()=>{

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
            data-aos-delay={`${media && '1000'}`} 
            className={`${classes.frame} ${classes.fr2}`} 
        >
            <div data-aos={'zoom-in'} className={classes.title} >
                <span>Events Information</span>
            </div>
            <img src={wineIcon} alt='' className={classes.pageIcon} />
            <div className={classes.panelContainer} >
                <div 
                    data-aos={`${!media && 'fade-down'}`} 
                    data-aos-delay={`${!media && '200'}`}  
                    className={`${classes.infoPanel} ${classes.info2}`} 
                >
                    <span>{infoFrase}</span>
                    <div 
                        data-aos={'fade-left'} 
                        data-aos-delay={`${media ? '1600' : '400'}`} 
                        className={`${classes.image} ${classes.img2}`} 
                    />
                </div>
            </div>
        </div>
    );

};

export default SecondFrame;