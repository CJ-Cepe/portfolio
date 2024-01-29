import { useRef, useEffect } from 'react'
import './styles/Contact.css'
import circularText from './assets/circular-text.svg'
import useIntersectionObserver from './useIntersectionObserver'


function Contact(){
    const contactRef = useRef(null)
    useIntersectionObserver(contactRef, 'fade-in', 'appear')

    return (
        <section id="contact-section" ref={contactRef}>
            <div>
                <p className='fade-in'>Philippines</p>
                <p className='fade-in'>Antipolo City, 1870</p>
                <a className='fade-in'>+639205090839</a>
                <a className='fade-in' href='#'>cj.ceps@gmail.com</a>
                <a className='fade-in' href='#'>github.com/CJ-Cepe</a>
                <a className='fade-in' href='#'>linkedin.com/in/cjcepe</a>
            </div>
            <div>
                <img className='fade-in' src={circularText} alt="Open For Work" />
            </div>
        </section>
    )
}

export default Contact