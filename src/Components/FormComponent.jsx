import React from 'react';
import { WhatsappComponent } from './WhatsappComponent';
import '../../styles.css'

export const FormComponent = ({handleSubmit, onInputChange,name,email,number,method}) => {

  
  return (
    <>
    <div className="container contenedor-formulario">

    <div className="row d-flex justify-content-center align-content-center">
    <div className='borde-formulario col-lg-10 col-sm-12'>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-3 titulo-formulario d-flex justify-content-center">
                <h4>CONTÁCTANOS</h4>
            </div>
          </div>

            <div className='row d-flex justify-content-center'>
                <div className="col-6 px-0 text-center">        
                        <form className='d-flex flex-column justify-content-center' id='formulario' autoComplete='on' onSubmit={handleSubmit}>
                            <input type="text" name='name' value={name} placeholder='  nombre' autoComplete='name'onChange={onInputChange} className='method-input justify-content-center'/>
                            <input type="email" name='email' value={email} placeholder='  email'  autoComplete='email'onChange={onInputChange} className='method-input justify-content-center'/>
                            <input type="number" name='number' value={number} placeholder='  número de teléfono' autoComplete='tel'onChange={onInputChange} className='method-input justify-content-center'/>            
                              <div className='text-white text-center mt-2'>
                                <p>¿Qué método de contacto prefiere?</p>
                              </div>

                                <div className='text-white d-flex justify-content-between'>

                                <div>
                                  <p>Whatsapp</p>
                                  <input type="radio" name="method" value="whatsapp" onChange={onInputChange}/>
                                </div>

                                <div>
                                  <p>Llamada</p>
                                <input type="radio" name="method" value="llamada" onChange={onInputChange}/>
                                </div>

                                <div>
                                  <p>Email</p>
                                  <input type="radio" name="method" value="email" onChange={onInputChange}/>
                                </div>
                              </div>
                              <div className='d-flex justify-content-center'>
                                  <input type="submit" name='boton' className='boton-formulario mb-3' placeholder='enviar'/>
                              </div>
                        </form> 
                </div>
            </div>
          </div>
          </div>

          {/*<div className="container">
            <div className="row">
              <div className="col-12">
              <iframe width="540" height="305" src="https://c821ea4e.sibforms.com/serve/MUIFADxcht6p8GsFrN4MZ2tlWYZ3InBLzJ6GchoiFKH_V09oS8MH4V-uS3Jijxeu-6BUhDh-61qW8Uby69SuqDeEeoU8dN4yMPfczBXJinArAIBMwll3wdM9cGOxPft0-QeiHx6zsimZy0f4zVSAMoW25Q1P0DBwqJnBwAqdJ4YWPPIZufIar3NJmCjHF4SUqLYn4mFG2Xorm2lN" frameborder="0" scrolling="auto" allowfullscreen className='formulario-brevo'></iframe>
              </div>
            </div>
          </div>*/}



            <WhatsappComponent />



    </div>
    </>
  )
}


