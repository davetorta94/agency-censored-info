import { useEffect, useRef } from "react";
import {motion, useInView, useAnimation, color} from "framer-motion";




export const Reasons = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const reasonsControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      reasonsControls.start("visible");
    } else {
      reasonsControls.start("hidden");
    }
  }, [isInView]);

  return (
    <div className="container-fluid pb-5 mt-5" ref={ref}>

    <motion.div
        className="row justify-content-center mt-3 pb-2 text-light"
        variants={{
            hidden: { opacity: 0},
            visible: {opacity: 1},
          }}
          initial="hidden"
          animate={reasonsControls}
          transition={{ duration: 0.5, delay: 0.25}}>
            <div className="col-12 d-flex justify-content-center">
              <h2>¿Por qué MYF?</h2>
            </div>

            
    </motion.div>

{/*PRIMERA FILA*/}

    <motion.div 
      className='row d-flex justify-content-center mt-3 pb-0'
      variants={{
        hidden: { opacity: 0},
        visible: {opacity: 1},
      }}
      initial="hidden"
      animate={reasonsControls}
      transition={{ duration: 0.5, delay: 0.25}}>
      <div className=' col-3 text-light pt-5'>
        <span className="colorcito">Enfoque integral:</span><p>Ofrecemos servicios integrales que abarcan desde el desarrollo web hasta el marketing digital, lo que nos permite ofrecer soluciones completas y coherentes para alcanzar tus objetivos comerciales.</p>
      </div>
      <div className=' col-3 estrellitas d-flex justify-content-center'>
      
      </div>
      
      <div className=' col-3 text-light personalizacion'>
        <span className="colorcito">Personalizacion:</span><p>Nos enfocamos en comprender a fondo tus necesidades y objetivos para ofrecer soluciones personalizadas que se adapten a tu <br /> marca y te diferencien de la competencia.</p>
      </div>
      
    </motion.div>
    
    {/*SEGUNDA FILA*/}
    <motion.div 
      className='row d-flex justify-content-center pb-0'
      variants={{
        hidden: { opacity: 0},
        visible: {opacity: 1},
      }}
      initial="hidden"
      animate={reasonsControls}
      transition={{ duration: 0.5, delay: 0.25}}>
      <div className=' col-3 text-light pt-5'>
        <span className="colorcito">Estrategias efectivas:</span><p>Desarrollamos estrategias de Marketing Digital y SEO sólidas y efectivas que aumentan tu visibilidad en línea, generan tráfico de calidad y convierten visitantes en clientes.</p>
      </div>
      <div className=' col-3 estrellitas d-flex justify-content-center'>
      
      </div>
      <div className=' col-3 text-light personalizacion'>
        <span className="colorcito">Transparencia y Comunicación:</span><p>Nos comprometemos a mantener una comunicación clara y transparente en cada etapa del proyecto. Mantenemos informados a nuestros clientes y estamos disponibles para responder preguntas y brindar soporte.</p>
      </div>
    </motion.div>

      {/*TERCERA FILA*/}
    <motion.div 
      className='row d-flex justify-content-center pb-0'
      variants={{
        hidden: { opacity: 0},
        visible: {opacity: 1},
      }}
      initial="hidden"
      animate={reasonsControls}
      transition={{ duration: 0.5, delay: 0.25}}>
      <div className=' col-3 text-light pt-5'>
        <span className="colorcito">Innovación constante:</span><p>Nos mantenemos al tanto de las últimas tendencias y avances tecnológicos en el sector. Utilizamos herramientas y enfoques innovadores para ofrecerte soluciones vanguardistas.</p>
      </div>
      <div className=' col-3 estrellitas d-flex justify-content-center'>
      
      </div>
      <div className=' col-3 text-light personalizacion'>
        <span className="colorcito">Resultados medibles:</span><p>Nos enfocamos en generar resultados tangibles y medibles. Utilizamos herramientas analíticas y de seguimiento para evaluar el rendimiento y ajustar estrategias en función de datos obtenidos.</p>
      </div>
    </motion.div>

    {/*CUARTA FILA*/}

    <motion.div 
      className='row d-flex justify-content-center pb-0'
      variants={{
        hidden: { opacity: 0},
        visible: {opacity: 1},
      }}
      initial="hidden"
      animate={reasonsControls}
      transition={{ duration: 0.5, delay: 0.25}}>
      <div className=' col-3 text-light pt-5'>
        <span className="colorcito">Acompañando en cada paso:</span><p>Nuestro objetivo principal es tu éxito. Trabajamos en estrecha colaboración contigo, escuchando tus necesidades y adaptando nuestras estrategias para lograr los mejores resultados posibles.</p>
      </div>
      <div className=' col-3 estrellititas d-flex justify-content-center'>
      </div>
      <div className=' col-3 text-light personalizacion'>
        
      </div>
    </motion.div>
</div>
  );
};


