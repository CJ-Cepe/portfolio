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
        /* console.log(entries[0].isIntersecting) */
        navRef.current.classList.toggle('sticky', !entries[0].isIntersecting)
        titleRef.current.classList.toggle('hide', !entries[0].isIntersecting)
        buttonRef.current.classList.toggle('hide', !entries[0].isIntersecting)
        ulRef.current.classList.toggle('styled-list', !entries[0].isIntersecting)
    }, {rootMargin: "20px 0px 0px 0px"})

    const objRef = useRef({
        "about-section": [false, 0], 
        "skills-section": [false, 0], 
        "projects-section": [false, 0], 
        "contact-section": [false, 0]
    })
    
    
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const {target: {id}, isIntersecting, intersectionRatio} = entry
            console.log(id, isIntersecting, intersectionRatio)
            objRef.current[id][0] = isIntersecting
            objRef.current[id][1] = intersectionRatio
            /* maxRatio = maxId === id ? intersectionRatio : maxRatio */
            
            let maxId = null;
            let maxRatio = -Infinity;

            for(let key in objRef.current){
                if(objRef.current[key][0]){
                    console.log(maxId, maxRatio)
                    console.log(key, 'true', objRef.current[key][1])
                    if(objRef.current[key][1] > maxRatio){
                        maxRatio = objRef.current[key][1]
                        maxId = key
                    }/*  else {
                        console.log(key)
                        ulRef.current.querySelector(`[href="#${key}"]`).parentNode.classList.toggle('active', false)
                    } */
                } else {
                    ulRef.current.querySelector(`[href="#${key}"]`).parentNode.classList.toggle('active', objRef.current[key][0])
                }
            }

            ulRef.current.querySelectorAll('.active').forEach((list)=>{
                list.classList.remove('active')
            })
            if(maxId){
                ulRef.current.querySelector(`[href="#${maxId}"]`).parentNode.classList.toggle('active', objRef.current[maxId][0])
            }
            //if maxId is null remove active to all
            console.log(maxId, maxRatio)
           console.log("------------------")
        })
    }, {threshold: [0.10, 0.50, 1]});

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