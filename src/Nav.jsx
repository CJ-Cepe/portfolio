import './styles/Nav.css'
import sun from '../public/sun.svg'
import { useRef, useEffect } from 'react'

function Nav(){
    const scrollWatcher = useRef(null)
    const navRef = useRef(null)
    const titleRef = useRef(null)
    const buttonRef = useRef(null)
    const ulRef = useRef(null)
    
    const navObserver = new IntersectionObserver((entries) => {
        console.log(entries[0].isIntersecting)
        navRef.current.classList.toggle('sticky', !entries[0].isIntersecting)
        titleRef.current.classList.toggle('hide', !entries[0].isIntersecting)
        buttonRef.current.classList.toggle('hide', !entries[0].isIntersecting)
        ulRef.current.classList.toggle('styled-list', !entries[0].isIntersecting)
    }, {rootMargin: "20px 0px 0px 0px"})

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id')
          ulRef.current.querySelector(`[href="#${id}"]`).parentNode.classList.toggle('active', entry.isIntersecting);
          /* if (entry.isIntersecting) {
                ulRef.current.querySelector(`[href="#${id}"]`).classList.add('active');
            } else {
                ulRef.current.querySelector(`[href="#${id}"]`).classList.remove('active');
            } */
        });
    }, { threshold: 0.1 });

    
    useEffect(()=> {
        //give navObserver observe
        if(scrollWatcher.current){
            navObserver.observe(scrollWatcher.current)
        }

        //give sections observer
        const sections = document.querySelectorAll("#about-section, #skills-section, #projects-section, #contact-section")
        sections.forEach(section => observer.observe(section));
            
        
         // Cleanup: stop observing when component unmounts since array is empty
        return () => {
            if (scrollWatcher.current) {
                navObserver.unobserve(scrollWatcher.current);
                sections.forEach(section => observer.unobserve(section));
            }
        }
    }, [])


  
   
    return (
        <>
        <div ref={scrollWatcher} aria-hidden="true"></div>
        <nav ref={navRef}>
            <div ref={titleRef}>CJ <span>Cepe</span></div>
            <ul ref={ulRef}>
                <li><a href="#about-section">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <button ref={buttonRef}><img src={sun} alt="sun icon for lightmode" /></button>
        </nav>
        </>
        
    )
}

export default Nav