import React, { useEffect, useState } from 'react'
import Techblendhub from './components/Techblendhub';
import Welcome from './components/Welcome';
import AOS from 'aos';

//handles all the reset styles
import './styles/reset.scss'


const App = () => {

    useEffect( () => {
        AOS.init({
        duration: 1200, // animation duration in ms
        offset: 100, // trigger point from top
        once: true, // animation runs only once
      });
    }, []);

  const DelayPage = () => {
      const [page, setPage] = useState(<Welcome />);

      useEffect( () => {

        const timeVal = setTimeout( () => setPage(<Techblendhub />), 5000);
        return () => clearTimeout(timeVal);

      }, []) 

      return (
        <>
          {page}
        </>
      )
  }

  return (
    <>
      <DelayPage />
    </>
  )
}

export default App;