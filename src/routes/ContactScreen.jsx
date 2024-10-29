import { useState } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/Contact.css'

const ContactScreen = () => {

  const initialFormState = {
    nameContact: '',
    email: '' ,
    phone:'',
    about:'',
    message: ''
  }
  const {formState, onInputChange, reset} = useForm(initialFormState)

  const {nameContact, email, phone, about,  message} = formState

  let nameEmpty = false
  const [clicked, setClicked] = useState(false)
  
const handleOnSubmit = (e)=>{
e.preventDefault();
//console.log(formState)
//console.log(phone)

if(!nameContact){
nameEmpty = true;
console.log("No hay tu nombre")
console.log(clicked)
return
}
reset();

}

  return (
    <>
       <div className="contact_form">

<div className="formulario">			
  <h1>Contact Form</h1>
    <h3>Send us a message and we will contact to you as soon as posible</h3>


      <form onSubmit={handleOnSubmit}>				

        
            <p>
              <label htmlFor="nombre" className="colocar_nombre">Name
                <span >*</span>
              </label>
                <input type="text"  name='nameContact' value={nameContact}  onChange={onInputChange} onClick={()=>{ setClicked(true)}} placeholder="Please  introduce your name"/>
                {(!nameContact&&clicked)&&<span className='error-advertise'>Name is necesary</span>}
            </p>
          
            <p>
              <label htmlFor="email" className="colocar_email">Email
                <span >*</span>
              </label>
                <input type="text"  name='email' value={email}  onChange={onInputChange} placeholder="youremail@example.com"/>
            </p>
        
            <p>
              <label htmlFor="telefone" className="colocar_telefono">Phone
              </label>
                <input type="tel" name='phone' value={phone}  onChange={onInputChange}  placeholder="your cell phone"/>
            </p>		
                         
            <p>
              <label htmlFor="asunto" className="colocar_asunto">About
                <span >*</span>
              </label>
                <input type="text"   name='about' value={about}  onChange={onInputChange} placeholder="Add the reason for your message"/>
            </p>		
          
            <p>
              <label htmlFor="mensaje" className="colocar_mensaje">Message
                <span >*</span>
              </label>                     
                                 <textarea  className="texto_mensaje" name='message' value={message}  onChange={onInputChange}  placeholder="Please text your message..."></textarea> 
                             </p>	  								
          
            <button type="submit"  ><p>Submit</p></button>

            <p className="aviso">
              <span > * </span>los campos son obligatorios.
            </p>					
        
      </form>
</div>	
</div>
    </>
  )
}

export default ContactScreen
