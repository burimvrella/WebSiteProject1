import React, { useRef }  from 'react';
import './Contact.css';
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

const renderAlert = () => {
  return(
    <div className='popup'>
      <div className='box'>
        email send
      </div>
    </div>
  )
};


function Contact() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l8h5oqb', 'template_mf5p46i', form.current, '_FUy23t29KGeouUiY')
        .then((result) => {
            console.log(result.text);
            setIsAlertVisible(true);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    const[isAlertVisible, setIsAlertVisible] = React.useState(false);


    setTimeout(() => {
      setIsAlertVisible(false)
    }, 3000);
    
  return (
    <motion.div className='contact'
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      exit = {{opacity: 0}}
      transition = {{duration: 0.5}}>
          <h1>contact me</h1>
      <div className='contactform'>
        <form id='contact-form' method='POST' ref={form} onSubmit={sendEmail}>
          <label htmlFor='user_name'>name</label>
          <input name='user_name' placeholder='e.g. Max Musterman' type='text' required/>
          <label htmlFor='user_email'>e-mail</label>
          <input name='user_email' placeholder='e.g. maxmuster@gmail.com' type='email' required/>
          <label htmlFor='message'>message</label>
          <textarea name='message' rows='6' placeholder='Enter message...' required></textarea>
          <button type='submit' value='Send'>send</button>
          {isAlertVisible && renderAlert()}
        </form>
      </div>
    </motion.div>
  )
}

export default Contact