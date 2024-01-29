import { useRef, useEffect } from 'react'
import './styles/Contact.css'
import circularText from './assets/circular-text.svg'
import useIntersectionObserver from './useIntersectionObserver'


function Contact(){
    const contactRef = useRef(null)
    useIntersectionObserver(contactRef, 'pre-appear', 'appear-right')

    return (
        <section id="contact-section" ref={contactRef}>
            <div>
                <p className='pre-appear'>Philippines</p>
                <p className='pre-appear'>Antipolo City, 1870</p>
                <a className='pre-appear'>+639205090839</a>
                <a className='pre-appear' href='#'>cj.ceps@gmail.com</a>
                <a className='pre-appear' href='#'>github.com/CJ-Cepe</a>
                <a className='pre-appear' href='#'>linkedin.com/in/cjcepe</a>
            </div>
            <div>
                <img src={circularText} alt="Open For Work" />
            </div>
        </section>
    )
}

export default Contact