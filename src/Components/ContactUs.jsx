import React from 'react'
import ContactUsForm from './ContactUsForm'

export default function ContactUs() {
    return (
        <section id="cont" className="contact">
            <h2 className='contactUsTitle'>Contact Us
            </h2>
            <div style={{ marginTop: 20 }} className="container">
                <ContactUsForm />
            </div>
            <button className="btn-header">SEND</button>
        </section>
    )
}
