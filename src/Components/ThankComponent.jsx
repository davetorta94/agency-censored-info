import React, { useEffect } from 'react'

export const ThankComponent = () => {

  useEffect(() => {
    setTimeout(() => {
      window.location.href = '/';
    }, 5000);
  }, [])
  
  return (
<>
  <div className="container contenedor-formulario mb-5">
    <div className="row d-flex justify-content-center align-content-center">
      <div className='borde-formulario col-lg-10 col-sm-12'>
      <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-sm-6 titulo-formulario d-flex justify-content-center text-light text-center">
                <h1>¡GRACIAS POR ENVIARNOS SUS DATOS!</h1>
                
            </div>
            <div className="col-lg-12 col-sm-6 titulo-formulario d-flex justify-content-center text-light text-center mt-2">
                <h2>EN BREVE NOS PONDREMOS EN CONTACTO CON USTED</h2>
            </div>
          </div>
      </div>
    </div>
  </div>
</>
  )
}

  