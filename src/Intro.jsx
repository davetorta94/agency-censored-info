import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"
import { TypeAnimation } from 'react-type-animation';
import { Services } from "./Services";
import { Reasons } from "./Reasons";


export const Intro = () => {

    const ref = useRef(null);
  const isInView = useInView(ref);
  const introControls = useAnimation();
 

  useEffect(() => {
   if (isInView) {
    introControls.start("visible");
   
   } else {
    introControls.start("hidden");
   
   }
  }, [isInView])

  return (
    <>
        <div className="container-fluid intro pb-4 introduccion" ref={ref}>
            <motion.div 
            className="row d-flex"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={introControls}
              transition={{ duration: 1.5, delay: 1}}
            >
             
                <div className="col-lg-5 pt-1 mx-lg-2 mx-md-0 text-white d-flex justify-content-center align-items-center">
                    <TypeAnimation
                      sequence={[
                        "EL ÉXITO DIGITAL",
                        1000,
                        "A TU ALCANCE",
                        1000,
                        
                      ]}
                      speed={50}
                      repeat={Infinity}
                      className="type-animation-font"
                    />

                </div>
               
                  
                <div className="col-lg-5 col-md-12 d-flex justify-content-center align-items-center text-center text-white mx-lg-1 mx-md-0" id="descripcion-intro">
                    <p>
                        Así como los astronautas exploran los desconocido, te invitamos a unirte a esta expedición digital. Juntos superaremos desafíos, alcanzaremos tus metas más audaces y llevaremos tu marca a nuevas alturas. Convierte tu marca en una estrella digital en constante crecimiento.
                    </p>
                </div>
            </motion.div>

            

              <motion.div 
              className="row d-flex justify-content-between"
              variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={introControls}
              transition={{ duration: 1.5, delay: 1}}>
                
                {/*<div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <a href={'contact'} className="mt-1 boton">CONTÁCTANOS</a>
                </div>*/}

                </motion.div>

                

                <div 
                  className="row d-flex justify-content-center astronauta">
                
                </div>

                <motion.div 
            className="row d-flex justify-content-center mt-5"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={introControls}
              transition={{ duration: 1.5, delay: 1}}
            >

               
            </motion.div>

                
      
        </div>
        <div className="segundo-fondo">
          <Services />
          <Reasons />
        </div>


      </>
  )
}











