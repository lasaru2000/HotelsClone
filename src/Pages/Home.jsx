import React, { Component } from 'react';
import './Home.css';
import Main from '../Components/Main/Home';
import Destination from  '../Components/Destination/Dest';
import Experience from '../Components/Experience/Exp';
import Offers from '../Components/Offers/Offers';
import Footer from '../Components/Footer/Footer';






function Home(){
  return(
    <div>
   <Main/>
   <Destination/>
   <Experience/>
   <Offers/>
   <Footer/>
    </div>
  );
}
  


export default Home;