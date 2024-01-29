import './styles/About.css'
import {About as data} from './info.json'
import { useRef } from 'react'
import useIntersectionObserver from './useIntersectionObserver'


function Experience() {
    const {main, secondary, location, date, details} = data.experience
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-segment pre-appear">
            <h2>Experience</h2>
            <p>{main} <span>{location}</span></p>
            <p>{secondary} <span>{date}</span></p>
            <ul>{detailList}</ul>
        </div>
    )
}

function Education() {
    const {main, secondary, location, date, details} = data.education
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-segment pre-appear">
            <h2>Education</h2>
            <p>{main} <span>{location}</span></p>
            <p>{secondary} <span>{date}</span></p>
            <ul>{detailList}</ul>
        </div>
    )
}

function Training(){
    const details = data.training.map((detail, index)=>
        <p key={index}>{detail.name} <span>{detail.date}</span></p>
        )
    return (
        <div className="about-segment pre-appear">
            <h2>Trainings/Certificates</h2>
            {details}
        </div>
    )
}

function About(){
    const aboutRef = useRef(null)
    useIntersectionObserver(aboutRef, 'pre-appear', 'appear-up')

    
    return (
        <section id="about-section" className="about" ref={aboutRef}>
            <div>
                <img src="" alt="" />
                <p className='pre-appear'>{data.background.firstParagraph}</p>
                <p className='pre-appear'>{data.background.secondParagraph}</p>
            </div>
            <div>
                <Experience/>
                <Education/>
                <Training/>
            </div>
        </section>
    )
}

export default About