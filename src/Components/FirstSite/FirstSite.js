import React from 'react';
import Navigation from '../Navbar/Navigation';
import CaroFood from '../CaroFood/CaroFood';
import CaroTopRated from '../CaroTopRated/CaroTopRated';
import Footer from '../Footer/Footer';
import FilterFood from '../FilterFood/FilterFood';


function FirstSite(){
    return(
        <div className="firstSite">
            <Navigation />
            <CaroFood/>
            <FilterFood/>
            <CaroTopRated />
            <Footer/>
        </div>
    )
}
export default FirstSite;