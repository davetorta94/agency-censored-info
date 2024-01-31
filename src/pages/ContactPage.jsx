import React from 'react'
import { Navbar } from '../Navbar'
import { ParticleBackground } from '../ParticleBackground'
import { FormComponent } from '../Components/FormComponent'
import { ToastContainer } from 'react-toastify';

export const ContactPage = ({handleSubmit,onInputChange,name,email,number,method}) => {

    
  return (
    <>
    
        <Navbar/>
        
         <ParticleBackground />

         <ToastContainer
          />
         
        <ToastContainer />
        
        <FormComponent handleSubmit={handleSubmit} 
                        onInputChange={onInputChange} 
                        name={name} 
                        email={email} 
                        number={number}
                        method={method}
                        
                        
                        />
            
    </>
  )
}
