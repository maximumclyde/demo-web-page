import FirstFrame from './FirstInfoFrame';
import SecondFrame from './SecondInfoFrame';
import ThirdFrame from './ThirdInfoFrame';
import SignFrame from './SignFrame';
import LocationFrame from './LocationFrame';
import classes from './PageFrame.module.css';

const PageFrame = ()=>{

    return (
        <div className={classes.frame} >
            <FirstFrame />
            <SecondFrame />
            <ThirdFrame />
            <SignFrame />
            <LocationFrame />
        </div>
    );

};

export default PageFrame;