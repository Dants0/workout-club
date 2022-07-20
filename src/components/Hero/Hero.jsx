import React from 'react'
import Header from '../Header/Header.jsx'
import './Hero.css'
import '../../styles/main.css'
import hero_images from '../../assets/hero_image.png'
import hero_images_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'


const Hero = () => {
  return (
    <div className="hero">
      <h1>40,17 minuto</h1>
      <div className="left-h">
        <Header />

        {/* ad */}
        <div className="ad">
          <div></div>
          <span>O melhor clube fitness da cidade!</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span>Alcance </span>
            <span>O Seu</span>
          </div>
          <div>
            <span>Melhor </span>
            <span className='stroke-text'>Shape</span>
          </div>
          <div>
            <span>
              Nós te ajudaremos a desenvolver o melhor shape de acordo com sua pretensão!
            </span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>+100</span>
            <span>Treinadores Capacitados</span>
          </div>
          <div>
            <span>+967</span>
            <span>Membros Inscritos</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programas Fitness</span>
          </div>
        </div>

        {/* buttons */}

        <div className="hero-buttons">
          <buttons className="btn">Participar</buttons>
          <buttons className="btn">Saiba Mais</buttons>
        </div>


      </div>
      <div className="right-h">
        <button className='btn'>Comece Agora</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Frequencia Cardiaca</span>
          <span>118bpm</span>
        </div>
        <img src={hero_images} alt="" className="hero-image" />
        <img src={hero_images_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calorias Queimadas</span>
            <span>157Kcal 🔥</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero