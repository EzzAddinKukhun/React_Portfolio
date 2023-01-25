import React from 'react'; 
import Profile from '../imgs/profile.jpeg'; 

export default function Header() {
    return (

        <header id="home">
            <div className="container">
                <div className="intro-details">
                    <div className="details">
                        <h2 style={{ color: 'red' }}><b>WELCOME!</b></h2>
                        <h1>I Am Front-end Web Developer</h1>
                        <h6>I'm a Front-end Developer with experience for over 1 year. My expertise is to create and
                            Websites design, graphic design and many more...</h6>
                        <div className="social-media-header">
                            <span>
                                <div>
                                    <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <a href="#serv"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <a href="#serv"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                            </span>
                            <span>
                                <div>
                                    <a href="#serv"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </span>

                        </div>
                    </div>

                </div>
                <div className="personal-img">
                    <img src={Profile} />

                </div>

            </div>
        </header>

    )
}
