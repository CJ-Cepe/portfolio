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
                <a className='pre-appear' href ="tel:+639205090839">+639205090839</a>
                <a className='pre-appear' href = "mailto: cj.ceps@gmail.com">cj.ceps@gmail.com</a>
                <a className='pre-appear' href='https://github.com/CJ-Cepe' target="_blank">github.com/CJ-Cepe</a>
                <a className='pre-appear' href='https://www.linkedin.com/in/cjcepe/' target="_blank">linkedin.com/in/cjcepe</a>
            </div>
            <div>
                <img src={circularText} alt="Open For Work" />
                <span>😉</span>
            </div>
        </section>
    )
}

export default Contact