import React, { useEffect, useRef } from "react";
import {motion, useInView, useAnimation} from "framer-motion";

export const Cometa = () => {

  const ref = useRef(null);
    const orbitRadius = 1000; 
    const orbitSpeed = 10; 
 

    
  return (

    <>

<div className="row">
             
             <motion.div className=' col-lg-4 col-md-10 astronauta mt-5'
                         ref={ref}
                         initial={{ x: orbitRadius, y: 0 }}
                         animate={{
                           x: orbitRadius * Math.cos((2 * Math.PI * orbitSpeed * (Date.now() / 1000))),
                           y: orbitRadius * Math.sin((2 * Math.PI * orbitSpeed * (Date.now() / 1000))),
                         }}
                         transition={{ duration: 30, ease: "linear", repeat: Infinity }}>
               <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#9fc5e8">
                 <path d="M 0 80 C 0 36.8, 36.8 0, 80 0 S 160 36.8, 160 80 123.2 160 80 160 0 123.2 0 80" transform="rotate(0, 80, 80) translate(0, 0)"></path>
               </svg>
             </motion.div>

     </div>
    </>
  )}