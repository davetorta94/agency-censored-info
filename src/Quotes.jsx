import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation, color} from "framer-motion";
import "./Reasons.css";
import comillas from './assets/images/comillas.png';
import { Planetas } from "./Components/Planetas";

export const Quotes = () => {
    const ref = useRef(null);
  const isInView = useInView(ref);
  const quotesControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        quotesControls.start("visible");
    } else {
        quotesControls.start("hidden");
    }
  }, [isInView]);

  return (
    <>
        <div className="container-fluid pb-5 mt-5" ref={ref}>
          <motion.div
            className="row justify-content-center mt-3 pb-2 text-light"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={quotesControls}
              transition={{ duration: 0.5, delay: 0.25}}>
                <div className="col-12 d-flex justify-content-center">
                <div className="comillas"><img src={comillas} alt="" /></div><h4>En MYF entendemos que tus objetivos son nuestra prioridad. <br /> Trabajamos de manera profesional y orientada a resultados <br /> para <span className="colorcito">cumplir tus metas y superar tus expectativas.</span> <br /> Tu éxito es nuestro combustible.</h4>
                </div>
          </motion.div>

          

          <motion.div
            className="row d-flex justify-content-center mt-5 pb-2 text-light"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={quotesControls}
              transition={{ duration: 0.5, delay: 0.25}}>
                <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center pt-2 numero">
                    <h2>+90%</h2>
                    <p>de nuestros proyectos se desarrollan <br /> utilizando tecnologias modernas, <br /> brindándote soluciones digitales <br /> innovadoras y eficientes para alcanzar <br /> el éxito deseado</p>
                </div>
                <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center pt-2 numero">
                    <h2>+5</h2>
                    <p>años trabajando en el sector del <br /> marketing digital y desarrollo web <br /> nos permite darte la tranquilidad de contar <br /> con una agencia que ha acumulado <br /> conocimientos y experiencia</p>
                </div>
                <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center pt-2 numero">
                    <h2>+50%</h2>
                    <p>de incremento en ventas de nuestros <br /> clientes, gracias a nuestro enfoque <br /> estratégico de marketing, con el que <br /> podremos brindarte resultados <br /> tangibles y duraderos</p>
                </div>
          </motion.div>

          <motion.div
            className="row justify-content-start mt-5 pb-2 text-light"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={quotesControls}
              transition={{ duration: 0.5, delay: 0.25}}>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <a href={'contact'} className="mt-1 boton">CONTÁCTANOS</a>
                </div>
                
          </motion.div>

          <motion.div
            className="row d-flex justify-content-center mt-5 pb-2 text-light"
            variants={{
                hidden: { opacity: 0},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={quotesControls}
              transition={{ duration: 0.5, delay: 0.25}}>
               
              <Planetas />

            

          </motion.div>

          <motion.div
            className="row d-flex justify-content-center mt-5 pb-2 text-light"
            variants={{
                hidden: { opacity: 0.9},
                visible: {opacity: 1},
              }}
              initial="hidden"
              animate={quotesControls}
              transition={{ duration: 0.5, delay: 0.25}}>
               
              {/*<Footer />*/}

            

          </motion.div>

         
    
</div>
    </>
  )
}
