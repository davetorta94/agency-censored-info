import React from 'react'
import {Navbar} from '../Navbar.jsx'
import { ParticleBackground } from '../ParticleBackground.jsx'
import { ThankComponent } from '../Components/ThankComponent.jsx'

export const LandinPage = () => {
  return (
    <>
        <Navbar />
        <div className='particulas'>
                  <ParticleBackground />
        </div>
        <ThankComponent />
    </>
  )
}
