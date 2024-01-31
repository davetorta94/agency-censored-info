import contactApi from "../api/contactApi";
import { toast,ToastContainer } from 'react-toastify';



export const useContactBackend = () => {
  
    const startContact = async({name, email, number,method}) => {
       
        console.log({name, email, number,method,});
        const notify = () => {
            window.location.href = 'contact/resp=ok';
        }

        const errorNotify = () => toast.error(`Conexión Fallida: ${errormsg}`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });

            let errormsg = 'Un usuario existe con este email';

            if (!method && number.length < 9) {
                errormsg = 'Datos no válidos, por favor revise la información';
            } else if (number.length < 9) {
                errormsg = 'Número de teléfono no válido';
            } else if (!method) {
                errormsg = 'Por favor añada un método de contacto';
            }

        try {
            
            const resp = await contactApi.post('/api/auth/new', {name, email, number, method});
            notify();
            console.log({resp});
            
            

        } catch (error) {
               console.log({error})
               console.log(number.length)
                errorNotify();
        }
    }


    return {

        /*Métodos*/
        startContact
    }
}
