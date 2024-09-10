import React from 'react'
import {Navbar} from '../Navbar'
import {ParticleBackground} from '../ParticleBackground'
import {Intro} from '../Intro'
import {Quotes} from '../Quotes'
import '../../styles.css'

export const MainPage = () => {
    return (
        <>
                <Navbar />
                <ParticleBackground />
                <Intro />
                <Quotes />
            
        </>
      )
}

