import './Connect.scss';
import React, {useState} from 'react';
import Form from '../Form/Form';
import emailjs from '@emailjs/browser';
import coffeeandlaptop from '../../assets/images/coffeeandlaptop.png';
import {ReactComponent as ApCoffee} from '../../assets/images/ap-coffee.svg';

const Connect = ({connectRef}) => {

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
        <section ref={connectRef}className='connect'>
            <h2>Send me a message!</h2>
            <div className='connect__formbox'>
                {formSubmit ?
                <p>Thank you for sending me a message</p>:
                <Form handleSubmit={handleSubmit}/>}
                <ApCoffee className='connect__img'/>
            </div>
            
        </section>
    )
}

export default Connect