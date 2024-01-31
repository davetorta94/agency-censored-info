import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion"


export const Body = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const bodyControls = useAnimation();
 

  useEffect(() => {
   if (isInView) {
    bodyControls.start("visible");
   
   } else {
    bodyControls.start("hidden");
   
   }
  }, [isInView])
  
  return (
    <>
        <div className="container-fluid descripcion mb-4" ref={ref}>
            <motion.div 
              className='row d-flex justify-content-lg-between justify-content-md-center'
              variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={bodyControls}
              transition={{ duration: 0.5, delay: 0.25}}>
              <div className="col-lg-3 col-md-10 text-light body-text">
                <p>Somos pioneros en impulsar marcas hacia el futuro y convertirlas en estrellas brillantes en el panorama digital actual.</p>
              </div>
            
              {/*<Parallax translateX={['0px', '0px']}
                  scale={[1, 1]}
                  rotate={[0,360]}
                  easing="easeInQuad">
                <div className=' col-lg-4 col-md-10 astronauta'>
                    <img src={astronauta} alt="astronauta flotando en el espacio" />
                </div>
              </Parallax>*/}

              
              

            <div className="col-lg-3 col-md-10 text-light body-text lower-text">
                <p>
                  En  MYF  entendemos que tus objetivos son nuestra prioridad. <br /> Tu éxito es nuestro combustible.
                </p>
            </div>
            </motion.div>
        </div>
    </>
  )
}







//<Parallax translateX={['-200px', '600px']}
//                  scale={[0.75, 1]}
//                  rotate={[0,360]}
//                  easing="easeInQuad">
//                <div className=' col-lg-4 col-md-10 astronauta'>
//                    <img src={astronauta} alt="astronauta flotando en el espacio" />
//                </div>
//</Parallax>








//useEffect(() => {
//  AOS.init({duration: 2000});
//  
//}, []);
//
//data-aos="fade-up"





