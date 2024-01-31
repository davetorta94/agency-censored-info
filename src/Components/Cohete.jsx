import React from 'react'
import cohete from '../assets/images/cohete-sinbg.png';
import { Parallax } from 'react-scroll-parallax';

export const Cohete = () => {
  return (
    <Parallax translateX={['0px', '0px']}
              translateY={['20px','3500px']}
                  scale={[0.5, 0.5]}
                  speed={-310}
                  
                  >
                <div className=' col-lg-4 col-md-10 astronauta'>
                    <img src={cohete} alt="cohete flotando en el espacio" />
                </div>
    </Parallax>
  )
}