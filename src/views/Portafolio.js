import React from 'react';
import '../assets/style/portafolio.css';
import Header from '../components/Header';
import pugb from '../assets/img/pugb.jpg';
import ciberH from '../assets/img/ciberH.jpg';
import rogueC from '../assets/img/rogueC.jpg';
import rocketL from '../assets/img/rocketL.jpg';
import valorant from '../assets/img/valorant.jpg';
import paladins from '../assets/img/paladins.png';

const Portafolio = () => {

   

   const handleChange = e => {
      const bigImg = document.getElementById('bigImg');
      bigImg.src = e.target.src;
   }

   return (
      <>
         <Header />
         <div className="titulo">
            <p className="played-games">Played Games</p>
         </div>
         <div className="row">
            <div className="columnImg">
               <img className="img-props" id="bigImg" src={valorant} alt="" />
            </div>
            <div className="columnImg2">
               <img className="img-props opacity" src={valorant} onClick={handleChange} alt="" />
               <img className="img-props opacity" src={paladins} onClick={handleChange} alt="" />
               <img className="img-props opacity" src={pugb} onClick={handleChange} alt="" />
               <img className="img-props opacity" src={ciberH} onClick={handleChange} alt="" />
               <img className="img-props opacity" src={rogueC} onClick={handleChange} alt="" />
               <img className="img-props opacity" src={rocketL} onClick={handleChange} alt="" />
            </div>
         </div>
      </>
   );
}

export default Portafolio;