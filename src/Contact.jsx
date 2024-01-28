import { useRef, useEffect } from 'react'
import './styles/Contact.css'
import circularText from './assets/circular-text.svg'

function Contact(){
    const contactRef = useRef(null)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('appear');
            }
        })
    }, {threshold: 0.1, rootMargin: "0px 0px -150px 0px"})

    useEffect(() => {
        const segments = contactRef.current.querySelectorAll('.fade-in')
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