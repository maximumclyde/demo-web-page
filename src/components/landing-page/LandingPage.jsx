import { Fragment, useState } from 'react';
import CoffeeIcon from '../../assets/coffeeIcon.png';
import AppLogo from '../../assets/logo1.png';

import classes from './LandingPage.module.css';

const FrontPage = (props)=>{

    const [coffeeStyle, setCoffeeStyle] = useState(`${classes.coffeeIcon} ${classes.coffeeBounce}`);
    const [textStyle, setTextStyle] = useState(`${classes.welcomeFrase}`);
    const [logoStyle, setLogoStyle] = useState(`${classes.appLogo}`);

    const clickHandler = ()=>{
        props.onClick(); 
        setCoffeeStyle(`${classes.coffeeIcon}`);
        setTextStyle(`${classes.welcomeFrase} ${classes.textDisappear}`);
        setTimeout(()=>{
            setLogoStyle(`${classes.appLogo} ${classes.textDisappear}`);
            setTimeout(()=>{
                setCoffeeStyle(`${classes.coffeeIcon} ${classes.coffeeDisappear}`);
            }, 1000)
        }, 1000);
    }

    return(
        <Fragment>
            <div className={coffeeStyle} >
                <img 
                    src={CoffeeIcon} 
                    alt='CoffeeIcon' 
                    onClick={clickHandler}
                />
            </div>
            <div className={textStyle} >
                <span onClick={clickHandler} >Welcome to</span>
            </div>
            <div className={logoStyle} >
                <img 
                    src={AppLogo} 
                    alt='amea' 
                    onClick={clickHandler}
                />
            </div>
        </Fragment>
    );

};

export default FrontPage;