import './Connect.scss';
import React, {useState} from 'react';
import Form from '../Form/Form';
import emailjs from '@emailjs/browser';
import coffeeandlaptop from '../../assets/images/coffeeandlaptop.png';

const Connect = () => {

    const [formSubmit, setFormSubmit] = useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.name.value;
        const message = event.target.name.value;

        const serviceId = `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`;
        const templateId= `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`;
        const userId = `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`;
        const templateParams = {
            name,
            email,
            message
        }

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((response)=> setFormSubmit(true) )
            .catch((err)=>console.log(err))


    }
    return (
        <section className='connect'>
            <div className='connect__formbox'>
                <h2>Connect with me</h2>
                {formSubmit ?
                <p>Thank you for sending me a message</p>:
                <Form handleSubmit={handleSubmit}/>}
            </div>
            <img className={formSubmit ? 'connect__img-sent':'connect__img'} src={coffeeandlaptop}/>
            
        </section>
    )
}

export default Connect