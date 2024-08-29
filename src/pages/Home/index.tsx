import './style.css'

import { useState } from 'react'

export default function Home() {
    return (
        <div className='container'>
        <header>
      <a href="./pages/Home/index.tsx">
        <img
          className="logo-header"
          src="./src/assets/imgs/cremoso.png"
          alt="logo header"
        />
      </a>

      

      <button id="removeClass">
        <img src="./src/assets/icons/hamburguer.svg" alt="" className="icon-menu" />
      </button>
    </header>

    <div className="openMenu">
      <button>
        <img src="./src/assets/icons/close.svg" alt="" />
      </button>

      <ul>
        <li>
          <a href=""> Home </a>
        </li>

        <li>
          <a href=""> Institucional</a>
        </li>

        <li>
          <a href=""> Produtos</a>
        </li>

        <li>
          <a href=""> Onde Encontrar</a>
        </li>

        <li>
          <a href=""> Contato</a>
        </li>

        <li>
          <a href=""> FAÇA SUA FESTA</a>
        </li>
      </ul>
    </div>

    <div className="carousel">
      <div className="carousel-content">
        <div className="carousel-item carousel-active">
          <img src="./src/assets/imgs/copo-acai.jpg" alt="img slide"/>
        </div>

        <div className="carousel-item">
          <img src="./src/assets/imgs/tigela-acai.jpg" alt="img slide"/>
        </div>
  
        <div className="carousel-item">
          <img src="./src/assets/imgs/taca-felicidades.jpg" alt="img slide"/>
        </div>
  
        <div className="carousel-item">
          <img src="./src/assets/imgs/taca-frutas-vermelhas.jpg" alt="img slide"/>
        </div>

        <div className="carousel-item">
          <img src="https://wallpapers.com/images/hd/1920x1080-full-hd-nature-aerial-shot-house-ysvrfl2ex8jn04wp.jpg" alt="img slide"/>
        </div>

      </div>
      <button className="carousel-control prev" >
        <img src="./assets/imgs/arrow-left.svg" alt=""/>
      </button>

      <button className="carousel-control next" >
        <img src="./assets/imgs/arrow-right.svg" alt=""/>
      </button>

      <div className="carousel-indicators"></div>
    </div>

    </div>   
    )
}