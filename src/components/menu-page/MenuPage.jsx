import logo from '../../assets/logo.svg';

import classes from './MenuPage.module.css';

const MenuPage = ()=>{

    return(
        <div className={classes.frame} >
            <div className={classes.innerFrame} >
                <div className={classes.photosFrame} >
                    <div className={`${classes.img} ${classes.im1}`} />
                    <div className={`${classes.img} ${classes.im2}`} />
                    <div className={`${classes.img} ${classes.im3}`} />
                </div>
                <div className={classes.menuSection} >
                    <div className={classes.menuTitle} >
                        <img src={logo} alt='amea coffee' />
                    </div>
                    <div className={classes.menuBody} >
                        <div className={classes.body} >
                            <div className={classes.bodyTitle} >
                                <span>Coffee and Beverages</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Espresso</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Macchiato</span>
                                <div className={classes.priceSeparator} />
                                <span>0.80$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Tea</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            <div className={classes.bodyTitle} >
                                <span>Coffee and Beverages</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Espresso</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Macchiato</span>
                                <div className={classes.priceSeparator} />
                                <span>0.80$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Tea</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            <div className={classes.bodyTitle} >
                                <span>Coffee and Beverages</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Espresso</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Macchiato</span>
                                <div className={classes.priceSeparator} />
                                <span>0.80$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Tea</span>
                                <div className={classes.priceSeparator} />
                                <span>0.50$</span>
                            </div>
                            
                        </div>
                        <div className={classes.bodySeparator} />
                        <div className={classes.body} >
                            <div className={classes.bodyTitle} >
                                <span>Alcoholic Drinks</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Wine</span>
                                <div className={classes.priceSeparator} />
                                <span>1.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Vodka</span>
                                <div className={classes.priceSeparator} />
                                <span>3$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Jack Daniels</span>
                                <div className={classes.priceSeparator} />
                                <span>3.50$</span>
                            </div>
                            <div className={classes.bodyTitle} >
                                <span>Alcoholic Drinks</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Wine</span>
                                <div className={classes.priceSeparator} />
                                <span>1.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Vodka</span>
                                <div className={classes.priceSeparator} />
                                <span>3$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Jack Daniels</span>
                                <div className={classes.priceSeparator} />
                                <span>3.50$</span>
                            </div>
                            <div className={classes.bodyTitle} >
                                <span>Alcoholic Drinks</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Wine</span>
                                <div className={classes.priceSeparator} />
                                <span>1.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Vodka</span>
                                <div className={classes.priceSeparator} />
                                <span>3$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Jack Daniels</span>
                                <div className={classes.priceSeparator} />
                                <span>3.50$</span>
                            </div>
                            <div className={classes.bodyTitle} >
                                <span>Alcoholic Drinks</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Wine</span>
                                <div className={classes.priceSeparator} />
                                <span>1.50$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Vodka</span>
                                <div className={classes.priceSeparator} />
                                <span>3$</span>
                            </div>
                            <div className={classes.bodyItem} >
                                <span>Jack Daniels</span>
                                <div className={classes.priceSeparator} />
                                <span>3.50$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MenuPage;