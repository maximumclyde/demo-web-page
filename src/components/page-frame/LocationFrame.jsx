import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { AiFillInstagram } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import classes from './LocationFrame.module.css';

const LocationFrame = ()=>{

    useEffect(()=>{
        Aos.init({
            duration: 400,
            easing: 'ease-in-out'
        });
    });

    return (
        <div id='location' className={classes.frame} >
            <div data-aos={'zoom-in'} data-aos-delay={'200'} className={classes.title} >
                <span>Contact us</span>
            </div>
            <div data-aos={'flip-up'} data-aos-delay={'400'} className={classes.map} />
            <div className={classes.infoTab} >
                <div className={classes.contactTab} >
                    <div className={classes.contact} >
                        <AiFillInstagram />
                        <span>some_insta</span>
                    </div>
                    <div className={classes.contact} >
                        <BsFillTelephoneFill />
                        <span>+666666666666</span>
                    </div>
                </div>
                <div className={classes.creditsTab} >
                    <a href="https://www.flaticon.com/free-icons/coffee" title="coffee icons">Coffee icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/wine" title="wine icons">Wine icons created by Freepik - Flaticon</a>
                    <a href="https://www.flaticon.com/free-icons/breakfast" title="breakfast icons">Breakfast icons created by Freepik - Flaticon</a>
                    <a href="https://www.maps.google.com" >Map - Google Maps</a>
                </div>
            </div>
        </div>
    );

};

export default LocationFrame;
