import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../images/logo-educadores.svg';
import landingImg from '../../images/landing.svg';
import studyIcon from '../../images/icons/study.svg';
import giveClassesIcon from '../../images/icons/give-classes.svg';
import purpleHeartIcon from '../../images/icons/heart.svg';

import './styles.scss';

function Landing() {
  return (
    <div className="landing">
      <div className="wrapper">
        <div className="logo landing-logo">
          <img src={logoImg} alt="Logo Educadores" />
          <h2 className="landing-title">Sua plataforma de estudos online.</h2>          
        </div>
        <img src={landingImg} alt="Plataforma" className="landing-hero" />
        <div className="landing-actions">
          <Link className="landing-actions--study" to="/estudar">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link className="landing-actions--classes" to="/ensinar">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <div className="landing-footer">
          <p>Total de 200 conexôes já realizadas <img src={purpleHeartIcon} alt="Coração roxo" /></p>
        </div>
      </div>
    </div>
  )
}

export default Landing;