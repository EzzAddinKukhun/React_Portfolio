import React from 'react'
import { Fade } from 'react-reveal'

export default function HistoryData({ ID, name, explanation, month, year }) {
    return (
        <Fade delay={300*ID}>
            <div style={{ marginTop: 300 * ID }} className="circular-img">

                {
                    ID % 2 == 0 ? <div className="caption">
                        <h1 style={{ marginBottom: 10 }}>{name}</h1>
                        <p style={{ color: 'gray' }}>
                            {explanation}
                        </p>
                    </div> : <div className="circular-caption">
                        <div>{month}<br />
                            <label style={{ fontSize: 40 }}><b>{year}</b></label> <br />
                        </div>
                    </div>
                }




                {
                    ID % 2 == 0 ? <div className="circular-caption">
                        <div> {month} <br />
                            <label style={{ fontSize: 40 }}><b>{year}</b></label> <br />
                        </div>
                    </div> : <div className="caption-2">
                        <h1 style={{ marginBottom: 10 }}>{name}</h1>
                        <p style={{ color: 'gray' }}>
                            {explanation}
                        </p>
                    </div>
                }


            </div>
        </Fade>
    )
}
