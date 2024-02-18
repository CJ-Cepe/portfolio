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
    const emojiRef = useRef(null)
    const emojiContRef = useRef(null)
    useIntersectionObserver(aboutRef, 'pre-appear', 'appear-up', '0px 0px -100px 0px')
    
    function handleMouseLeave(){
        emojiRef.current.style.setProperty("--xDeg", 0);
        emojiRef.current.style.setProperty("--yDeg", 0);
    }
    
    function rotateElement(e){
        //get mouse position
        const x = e.clientX
        const y = e.clientY

        //get cont's middle
        const square = emojiContRef.current.getBoundingClientRect();
        const midX = square.left + square.width / 2;
        const midY = square.top + square.height / 2

        //get offset from middle 
        const offsetX = ((x - midX) / midX) * 80;
        const offsetY = ((y - midY) / midY) * 80;

        emojiRef.current.style.setProperty("--xDeg", -1 * offsetY + "deg");
        emojiRef.current.style.setProperty("--yDeg", offsetX + "deg");
    }

    return (
        <section id="about-section" className="about" ref={aboutRef}>
            <div>
                <div className='pre-appear' ref={emojiContRef} onMouseMove={rotateElement} onMouseLeave={handleMouseLeave}> 
                    <div className="emoji" ref={emojiRef} >🧑‍💻</div> 
                </div>
                <p className='pre-appear'>{data.background.text}</p>
                <ul>
                    <li className='pre-appear'>{data.background.bulletOne}</li>
                    <li className='pre-appear'>{data.background.bulletTwo}</li>
                </ul>

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