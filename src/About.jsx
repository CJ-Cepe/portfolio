import './styles/About.css'
import {About as data} from './info.json'
import { useRef, useEffect } from 'react'


function Experience() {
    const {main, secondary, location, date, details} = data.experience
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-segment fade-in">
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
        <div className="about-segment fade-in">
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
        <div className="about-segment fade-in">
            <h2>Trainings/Certificates</h2>
            {details}
        </div>
    )
}

function About(){
    const aboutRef = useRef(null)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('appear');
            }
        })
    }, {threshold: 0.1, rootMargin: "0px 0px -150px 0px"})

    useEffect(() => {
        const segments = aboutRef.current.querySelectorAll('.fade-in')
        if(segments){
            segments.forEach(segment => {observer.observe(segment)})
        }

        return () => {
            if(segments){
                segments.forEach(segment => {observer.unobserve(segment)})
            }
        } 

    }, [])

    return (
        <section id="about-section" className="about" ref={aboutRef}>
            <div>
                <img src="" alt="" />
                <p className='fade-in'>{data.background.firstParagraph}</p>
                <p className='fade-in'>{data.background.secondParagraph}</p>
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