import React from 'react'
import HistoryData from './HistoryData';
import Fade from 'react-reveal'; 

export default function History() {
    let data = [
        { name: "Tawjihi Success", explanation: "I have graduated from secondary exams which they called 'twajihi' in Palestine in <i>Jul,2018</i> and i got 93.6% in scientific stream.", month: 'July', year: '2018' },
        { name: "Computer Engineering & University", explanation: " After end of tawjihi, i decided to study in faculty of engineering, i decided to join to the computer engineering department, and now i am in the last year in computer engineering with 3.31/4 GPA.", month: 'Aug', year: '2018' },
        { name: "Full Stack Development Diploma", explanation: " According to the needs of the workshop, and high demanding of web developers, i decided to take a course with knowledge academy in Full Stack Development Diploma.", month: 'Jan', year: '2022' },
        { name: "Foothill Internship", explanation: " I started an internship as front-end intern at foothill technology solutions LLC. After pass the personal interview in the last september.", month: 'Oct', year: '2022' },
        { name: "Graduation", explanation: "I will graduate inshallah by the end of the second semester in jun 2023 as a computer engineer.", month: 'Jun', year: '2023' },
    ];
    return (
        <section id="about" class="about">
            <h2 style={{ fontSize: 50, textAlign: 'center' }}>History</h2>

            <div class="line-span">
                <span class="line"></span>
                {
                    data.map((element, key) => {
                        { console.log(element) }
                        return (
                                <HistoryData ID={key} name={element.name} explanation={element.explanation} month={element.month} year={element.year} />
                        );
                    })
                }




            </div>


        </section>
    )
}
