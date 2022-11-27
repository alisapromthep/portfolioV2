import React from 'react';
import './Form.scss';
import {FaTelegramPlane} from 'react-icons/fa';

const Form = ({handleSubmit}) => {
    return (
        <form
        className='form'
        onSubmit={handleSubmit}
        >
            <label className='form__label'> Name
                <input
                required
                className='form__input'
                type='data'
                name='name'
                placeholder='name'
                />
            </label>
            <label className='form__label'> Email
                <input
                required
                className='form__input'
                type='data'
                name='email'
                placeholder='durian@email.com'
                />
            </label>
            <label className='form__label'> Message
            <textarea
                className='form__input form__input-textarea'
                required
                name='message'
                multiline
                placeholder='your message here...'
                />
            </label>
            <button className='form__button'>
                Send message
                <FaTelegramPlane className='button__icon'/>
            </button>
        </form>
    )
}

export default Form