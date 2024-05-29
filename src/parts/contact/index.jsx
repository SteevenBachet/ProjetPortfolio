import '../../styles/parts/contact/contact.css';
import React, { useState } from 'react';
import screenCv from "../../assets/screenCv.PNG"

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://formspree.io/f/xpzveenl', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });
        if (response.ok) {
            setFormState({ name: '', email: '', message: '' });
            setStatus('Message envoyé');
        } else {
            setStatus("Erreur d'envoie");
        }
    };

    return (
        <div className="contact" id="contact">
            <h2 className="contact__title">CONTACT</h2>
                <div className='contact__container'>
                    <div className='contact__container__item'>
                        <form className="contact__container__item__form" onSubmit={handleSubmit}>
                            <label>
                                Nom:
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Téléphone:
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formState.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <button type="submit">Envoyer</button>
                        </form>
                        {status && <p>{status}</p>}
                    </div>
                    <div className='contact__container__item'>
                            <div className='contact__container__item__cv'>
                                <img className='contact__container__item__cv__image' src={screenCv} alt='CV'/>
                                <button className='contact__container__item__cv__button'>Télécharger CV</button>
                            </div>
                        </div>
                </div>
        </div>
    );
}

export default Contact;