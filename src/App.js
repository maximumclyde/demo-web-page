import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import LandingPage from './components/landing-page/LandingPage';
import PageFrame from './components/page-frame/PageFrame';
import MenuPage from './components/menu-page/MenuPage';

import classes from './App.module.css';

const App = () => {

  const [frontElement, setFrontElement] = useState(<div />);
  const [frontPageShow, setFrontPageShow] = useState(true);

  useEffect(()=>{
    if(!frontPageShow) {
      setFrontElement(
        <PageFrame />
      );
    } else {
      setFrontElement(
        <LandingPage onClick={()=>{
          setTimeout(()=>{
            setFrontPageShow(false)
          }, 3000);
        }} />
      )
    }
  } ,[frontPageShow]);

  return (
    <div className={classes.main} >
      <Routes>
        <Route path='/' element={frontElement} />
        <Route path='/menu' element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
