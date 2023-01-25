import React from 'react'
import Profile from '../imgs/profile.jpeg'; 
import Address from './Address';

export default function About() {
    return (
        <section id="about" className="CV">
            <div className="sticker-img">
                <img src={Profile} />
            </div>
            <div className="basic-information">
                <h1>Hello, I Am Ezz Addin H. Kukhun</h1>
                <p>
                    Disciplined and insightful 5th year Computer Engineer student. Highly orga-
                    nized, self-motivated. Interested in Front-End Engineering. And recently i started an internship
                    as a Front-end developer at Foothill Solutuion Technologies LLC.
                </p>
                
                <Address name="Ezz Addin H. Kukhun" age="22" address="Palestine/Nablus" phoneNumber="0599836899" emailAddress="ezkukhun2000@gmail.com"/>
               
                <button className="btn-header">Download CV</button>

            </div>

        </section>

    )
}
