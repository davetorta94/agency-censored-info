import React from 'react'
import astronauta from '../assets/images/astronautasinbg.png';
import { Parallax } from 'react-scroll-parallax';

export const Astronauta = () => {
  return (
    <>
    <Parallax translateX={['0px', '0px']}
                  scale={[0.25, 0.25]}
                  speed={-290}
                  rotate={[0,360]}
                  >
                <div className=' col-lg-4 col-md-10 astronauta'>
                    <img src={astronauta} alt="astronauta flotando en el espacio" />
                </div>
    </Parallax>

    </>
    
  )
}



