import React from 'react';
import Service from './Service';

export default function Services() {
    let data = [
        { icon: <i class="fa-brands fa-github"></i>, serviceName: 'Web Development', serviceExplanation: "I have interests in web development overall, and fron-end development especially, you can say that i interest in the view and details of the web page" },
        { icon: <i class="fa-solid fa-camera"></i>, serviceName: 'Photography', serviceExplanation: " I'd like to take photos of the nature, and i'd like to take personal photos for meand for my friends, so i have interests in cameras types and their qualites" },
        { icon: <i class="fa-solid fa-cube"></i>, serviceName: 'Web Design', serviceExplanation: "  I have an intermediate interests in UI/UX web design, but i focus currently on  front-end just" },
    ];
    return (
        <>
            <section id="serv" class="serv-parent" style={{ textAlign: 'center' }}>
                <h2>MY <span style={{ color: 'rgb(137, 63, 63)' }}><b>SERVICES</b></span></h2>
                <div class="container">
                    <div style={{ marginTop: 20 }} class="services-row">

                        {data.map((element) => {
                            return (
                                <Service icon={element.icon} serviceName={element.serviceName} serviceExplanation={element.serviceExplanation} />
                            );
                        })}

                    </div>
                </div>

            </section>
        </>
    )
}
