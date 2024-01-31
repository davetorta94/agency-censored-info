import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";
import desarrollo from './assets/images/desarrollo-web.png';
import diseño from './assets/images/diseño.png';
import email from './assets/images/email-marketing.png';
import seo from './assets/images/seo.png';
import social from './assets/images/social-media.png';
import sem from './assets/images/sem.png';
import { Cohete } from "./Components/Cohete";

export const Services = () => {

    const ref = useRef(null);
    const isInView = useInView(ref);
    const serviceControls = useAnimation();
    const pageControls = useAnimation();
   
  
    useEffect(() => {
     if (isInView) {
      serviceControls.start("visible");
      pageControls.start("nohide");
      
     } else {
      serviceControls.start("hidden");
      pageControls.start("hide");
     }
    }, [isInView])

  return (
    <>
        <motion.div 
                className="container-fluid mb-5 espacio-servicios" 
                ref={ref}
                variants={{
                  hide: { opacity: 0.8, y: 100},
                  nohide: { opacity: 1 ,y: 0 }
                }}
                  initial="hide"
                  animate={pageControls}
                  transition={ {ease: "easeOut", duration: 2} }>
            <motion.div 
              className='row justify-content-center'
              variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={serviceControls}
              transition={{ duration: 1, delay: 0.5}}>
              <div className=' col-md-6 col-sm-12 mx-0 d-flex justify-content-center text-center'>
               <h1>NUESTROS SERVICIOS</h1>
              </div>
              
            </motion.div>

            <motion.div 
            className="row d-flex justify-content-center altura-cohete"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={serviceControls}
              transition={{ duration: 1.5, delay: 1}}
            >
              
                <Cohete />
                
           
            </motion.div>
            <motion.div 
              className='row justify-content-center mt-3 pb-5'
              variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={serviceControls}
              transition={{ duration: 1, delay: 0.5}}>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={desarrollo} alt="" />
              </div>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={diseño} alt="" />
              </div>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={email} alt="" />
              </div>
            </motion.div>
            <motion.div 
              className='row justify-content-center mt-3 pb-5'
              variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={serviceControls}
              transition={{ duration: 1, delay: 0.5}}>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={seo} alt="" />
              </div>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={social} alt="" />
              </div>
              <div className=' col-md-3 col-sm-12 p-4 mx-0 services'>
                <img src={sem} alt="" />
              </div>
            </motion.div>
        </motion.div>
    </>
  )
}

