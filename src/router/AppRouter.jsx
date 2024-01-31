import React, { useState } from 'react'
import '../../styles.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { ContactPage } from '../pages/ContactPage'
import { useForm } from '../hooks/useForm'
import { useContactBackend } from '../hooks/useContactBackend'
//import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LandinPage } from '../pages/LandinPage'
import { Planetas } from '../Components/Planetas'

const contactFields = {
  name: '',
  email: '',
  number: '',
  method: '',
  errormsg: ''
}


export const AppRouter = () => {

  const navigate = useNavigate()


  const {startContact} = useContactBackend()

  const {onInputChange, name, email, number, method} = useForm(contactFields);

 


  const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
        startContact({name, email, number,method});
        
        
        
        
        
        
    }

  return (
    <>
       <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='contact' element={<ContactPage handleSubmit={handleSubmit} 
                                                    onInputChange={onInputChange} 
                                                    name={name} 
                                                    email={email} 
                                                    number={number}
                                                    method={method}
                                                    />}
                                                    />
        <Route path='contact/resp=ok' element={<LandinPage />} />                                            
        <Route path='/*' element={<MainPage/>} />
        <Route path='planeta' element={<Planetas />} />
       </Routes>
    </>
  )
}
