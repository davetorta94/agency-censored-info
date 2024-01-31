import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Planetas = () => {
  const planetControls1 = useAnimation();
  const planetControls2 = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const orbitAnimation1 = {
      
      rotate: [0,360],
      //originY:'30px',
      //originX:'100px',
      //y: ['-150px','30px'],
      //x: ['350px','100px'],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
        width: 2,
      } 
    };

    

    planetControls1.start(orbitAnimation1);
    
  }, [planetControls1]);

  useEffect(() => {
    if (isInView){
      const orbitAnimation2 = {
     
        rotate: [0,360],
        scale: [0.5,1.5],
        transition: {
          duration: 1,
          ease: "linear",
        } // Cambiar a una propiedad animable
      };
      planetControls2.start(orbitAnimation2);
    } 
    
  }, [isInView])
  

  return (
    <div className="row mb-5">
      {/* Primer planeta en órbita */}

      
              <motion.div
              className="col-lg-10 col-md-10 d-flex astronauta mt-5"
              initial={{  x: 100, y: 30 }}
              animate={planetControls1}
            >   
                    <motion.svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#9fc5e8">
                        <path d="M 0 80 C 0 36.8, 36.8 0, 80 0 S 160 36.8, 160 80 123.2 160 80 160 0 123.2 0 80"></path>
                        
                    </motion.svg>

                     <div className="col-lg-1">
                      <motion.svg xmlns="http://www.w3.org/2000/svg" width="260" height="260"
                                  ref={ref}
                                  initial={{rotate: 0, scale: 0.5}}
                                  animate={planetControls2}
                                  >
                      <defs>
                        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="rgb(245,158,17)" />
                          <stop offset="35%" stopColor="rgba(238,242,42,1)" />
                          <stop offset="100%" stopColor="rgba(242,193,12,1)" />
                        </linearGradient>
                      </defs>
                      <path d="M 0 130 C 0 59.8, 59.8 0, 130 0 S 260 59.8, 260 130 200.2 260 130 260 0 200.2 0 130" transform="rotate(0, 130, 130)" fill="url(#gradient3)" />
                      <a href="/contact">
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white">
                          Contáctanos
                        </text>
                      </a>
                      </motion.svg>
                    </div>
               </motion.div>

              
                

                {/*<motion.div
                    className="col-lg-4 col-md-10 mt-5"
                    initial={{ opacity: 0.8, x: 100, y: 30 }}
                    animate={planetControls2}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" fill="#cc0000">
                               <path d="M 0 91 C 0 41.86, 41.86 0, 91 0 S 182 41.86, 182 91 140.14 182 91 182 0 140.14 0 91" transform="rotate(0, 91, 91) translate(0, 0)"></path>
                             </svg>
                  </motion.div>*/}
      
      

      {/* Elemento central (el sol u otro objeto) */}
      <div className="col-lg-4 col-md-10 mt-5 d-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
                  <defs>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgb(245,158,17)" />
                      <stop offset="35%" stopColor="rgba(238,242,42,1)" />
                      <stop offset="100%" stopColor="rgba(242,193,12,1)" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 130 C 0 59.8, 59.8 0, 130 0 S 260 59.8, 260 130 200.2 260 130 260 0 200.2 0 130" transform="rotate(0, 130, 130)" fill="url(#gradient3)" />
                </svg>
      </div>

      {/* Segundo planeta en órbita */}
      
    </div>
  );
};

//<div className="row">
//
//<Parallax translateX={['-180px', '180px']}>
//  <div className=' col-lg-4 col-md-10 astronauta mt-5'>
//    <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#9fc5e8">
//      <path d="M 0 80 C 0 36.8, 36.8 0, 80 0 S 160 36.8, 160 80 123.2 160 80 160 0 123.2 0 80" transform="rotate(0, 80, 80) translate(0, 0)"></path>
//    </svg>
//  </div>
//</Parallax>
//  
//
//  <div className=' col-lg-4 col-md-10 astronauta'>
//    <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
//    <defs>
//      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
//        <stop offset="0%" stopColor="rgb(245,158,17)" />
//        <stop offset="35%" stopColor="rgba(238,242,42,1)" />
//        <stop offset="100%" stopColor="rgba(242,193,12,1)" />
//      </linearGradient>
//    </defs>
//    <path d="M 0 130 C 0 59.8, 59.8 0, 130 0 S 260 59.8, 260 130 200.2 260 130 260 0 200.2 0 130" transform="rotate(0, 130, 130)" fill="url(#gradient3)" />
//  </svg>
//  </div>
//
//<Parallax translateX={['-180px', '180px']}>
//  <div className=' col-lg-4 col-md-10 astronauta mt-5'>
//    <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" fill="#cc0000">
//      <path d="M 0 91 C 0 41.86, 41.86 0, 91 0 S 182 41.86, 182 91 140.14 182 91 182 0 140.14 0 91" transform="rotate(0, 91, 91) translate(0, 0)"></path>
//    </svg>
//  </div>
//</Parallax>
//  
//</div>

// x: [50, 200, 400, 600, 400, 200, 50],

//x: [50, 200, 400, 600, 400, 200, 50], y: [-80, -120, -160, -200, -160, -120, -80, -40, 0, 100, 0, -80]

//[-80, -100, -120, -140, -160, -180, -200, -220, -240, -245, -240, -235, -225, -215, -205, -195, -185, -175, -165, -155, -145, -135, -125, -115, -105, -100 ]


//x: [50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 520, 530, 525, 520, 515, 510,505,500,495,490,485], y: [-80, -100, -120, -140, -160, -180, -200, -220, -240, -245, -240, -235, -225, -215, -205, -195, -185, -175, -165, -155, -145, -135, -125, -115, -105, -100, -95, -90, -85, -80,-75,-70,-65,-60,-55,-50, 

// x: [50, 70, 90, 110, 130, 150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510, 520, 530, 525, 520, 515, 510,505,500,495,490,485,480,475,470,465,460,455,450,445,440,435,415,395,375,355,335,315,295,275,110,90,70,50], y: [-80, -100, -120, -140, -160, -180, -200, -220, -240, -245, -240, -235, -225, -215, -205, -195, -185, -175, -165, -155, -145, -135, -125, -115, -105, -100, -95, -90, -85, -80,-75,-70,-65,-60,-55,-50, -45, -40,-35,-30,-25,-20,-15,-10,-5,0,20,40,60,80,100,120,140,160,140,120,100,80]


//x: [50, 70, 90, 110, 130, 150, 170, 210,290,310,], y: [-80, -100, -120, -140, -160, -180, -160,   ]

//import React, { useEffect, useRef } from "react";
//import { Parallax } from 'react-scroll-parallax';
//import {motion, useInView, useAnimation} from "framer-motion";

//export const Planetas = () => {

  //const ref = useRef(null);
  //  //const isInView = useInView(ref);
  //  const planetControls = useAnimation();
  //
  //  
 //
//
  //  
  //return (
//
  //    <div className="row mb-5">
  //           
  //              <motion.div className=' col-lg-4 col-md-10 astronauta mt-5'
  //                          ref={ref}
  //                          initial={{ x: 50 }}
  //                          animate={{ x: [50, 220, 440, 442, 444, 446, 448, 450,], y: [-80, -100, -102, -104, -106, -108, -110, -112, -114,-116,-118, -120,-100, -80    ], }}
  //                          transition={{ duration: 10, ease: "linear", repeat: Infinity }}>
  //                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#9fc5e8">
  //                  <path d="M 0 80 C 0 36.8, 36.8 0, 80 0 S 160 36.8, 160 80 123.2 160 80 160 0 123.2 0 80" transform="rotate(0, 80, 80) translate(0, 0)"></path>
  //                </svg>
  //              </motion.div>
  //           
  //              
//
  //              <div className=' col-lg-4 col-md-10 astronauta'>
  //                <svg xmlns="http://www.w3.org/2000/svg" width="260" height="260">
  //                <defs>
  //                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
  //                    <stop offset="0%" stopColor="rgb(245,158,17)" />
  //                    <stop offset="35%" stopColor="rgba(238,242,42,1)" />
  //                    <stop offset="100%" stopColor="rgba(242,193,12,1)" />
  //                  </linearGradient>
  //                </defs>
  //                <path d="M 0 130 C 0 59.8, 59.8 0, 130 0 S 260 59.8, 260 130 200.2 260 130 260 0 200.2 0 130" transform="rotate(0, 130, 130)" fill="url(#gradient3)" />
  //              </svg>
  //              </div>
//
  //            
  //              <motion.div className=' col-lg-4 col-md-10 astronauta mt-5'>
  //                <svg xmlns="http://www.w3.org/2000/svg" width="182" height="182" fill="#cc0000">
  //                  <path d="M 0 91 C 0 41.86, 41.86 0, 91 0 S 182 41.86, 182 91 140.14 182 91 182 0 140.14 0 91" transform="rotate(0, 91, 91) translate(0, 0)"></path>
  //                </svg>
  //              </motion.div>
  //            
  //              
  //    </div>
  //              
  //              
  //
  //)
////}


