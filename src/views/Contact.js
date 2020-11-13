import React from 'react'
import '../assets/style/contact.css'
import Header from '../components/Header';
import fb2 from '../assets/img/fb2.png'
import wpp from '../assets/img/wpp.png'
const Contact = () => {
    return (
        <>
        <Header/> 
        <div className="contact">
            <div className="contenedor-contact">
                <p className="invitacion">Quieres jugar conmigo?</p>
                <p className="invitacion2">Contactame</p>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.link/wugev5"><img className="wpp" src={wpp} alt=""/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100023777904234"><img className="fb2" src={fb2} alt=""/></a>
            </div>
        </div>
        </>
     );
}
 
export default Contact;