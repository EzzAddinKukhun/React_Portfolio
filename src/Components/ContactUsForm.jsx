import React from 'react'

export default function ContactUsForm() {
    return (
        <div style={{ justifyContent: 'space-between' }} className="row">
            <div className="main-info">
                <input type="text" placeholder="YOUR NAME" required />
                <input type="email" placeholder="YOUR EMAIL" required />
                <input type="text" placeholder="YOUR PHONE" required />
            </div>
            <div className="message">
                <textarea placeholder="YOUR MESSAGE" name="" id="" cols="80" rows="10"></textarea>
            </div>
        </div>
    )
}
