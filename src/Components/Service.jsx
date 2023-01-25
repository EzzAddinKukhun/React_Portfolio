import React from 'react'

export default function Service({icon, serviceName, serviceExplanation}) {
    return (
        <div class="service">
            <div class="serv-icon">
                <span>
                    {icon}
                </span>
            </div>
            <h5>{serviceName}</h5>
            <div class="serv-exp">
                <p>
                    {serviceExplanation}
                </p>
            </div>
        </div>
    )
}
