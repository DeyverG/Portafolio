import React from 'react';
import '../assets/style/home.css';
import fb from '../assets/img/fb.png';
import gh from '../assets/img/gh.png';
import yt from '../assets/img/yt.png';
import tw from '../assets/img/tw.png';
import logo from '../assets/img/logo2.png';
import jett from '../assets/img/jett.png';
import avatar from '../assets/img/avatar2.jpg';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="contenedorGamer">
          <p className="gamer">Gamer Profesional</p>
        </div>

        <div className="row">
          <div className="column1">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100023777904234"><img className="fb imgProp" src={fb} alt="Facebook-black" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/DeyverG"><img className="gh imgProp" src={gh} alt="Github-black" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCvTCddU7O7pVl4Mt1XxRM4Q?view_as=subscriber"><img className="gh imgProp" src={yt} alt="Youtube-black" /></a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/DeiiverGarcia"><img className="gh imgProp" src={tw} alt="Twitter-black" /></a>
          </div>
          <div className="column2">
            <div className="contenedorAvatar">
              <img className="avatar" src={avatar} alt="avatar-black" />
            </div>
            <img className="logo" src={logo} alt="valorant-blue" />
            <img className="jett" src={jett} alt="jett" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;