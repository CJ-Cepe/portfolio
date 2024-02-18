import { useRef, useEffect } from 'react'
import ThemeButton from './ThemeButton'
import './styles/Nav.css'

function Nav(){
    const scrollWatcher = useRef(null)
    const navRef = useRef(null)
    const titleRef = useRef(null)
    const ulRef = useRef(null)
    const buttonRef = useRef(null)

    const objRef = useRef({
        "about-section": [false, 0], 
        "skills-section": [false, 0], 
        "projects-section": [false, 0], 
        "contact-section": [false, 0]
    })
    
    const toggleClasses = (isIntersecting) => {
        navRef.current.classList.toggle('sticky', !isIntersecting);
        titleRef.current.classList.toggle('hide', !isIntersecting);
        buttonRef.current.classList.toggle('hide', !isIntersecting);
        ulRef.current.classList.toggle('styled-list', !isIntersecting);
    };

    const getMaxRatioKey = (obj) => {
        return Object.keys(obj).reduce((maxKey, key) => 
            obj[key][0] && obj[key][1] > (maxKey ? obj[maxKey][1] : -Infinity) ? key : maxKey, null);
    };

    const navObserver = new IntersectionObserver((entries) => {
        toggleClasses(entries[0].isIntersecting);
    }, {rootMargin: "20px 0px 0px 0px"})

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const {target: {id}, isIntersecting, intersectionRatio} = entry;
            objRef.current[id] = [isIntersecting, intersectionRatio];
    
            const maxId = getMaxRatioKey(objRef.current);
    
            // Remove 'active' class from all elements
            ulRef.current.querySelectorAll('.active').forEach((list) => list.classList.remove('active'));
    
            // Add 'active' class to the element with the highest ratio
            if(maxId){
                ulRef.current.querySelector(`[href="#${maxId}"]`).parentNode.classList.add('active');
            }
        });
    }, {threshold: [0.10, 0.50, 1]});

    useEffect(()=> {
        if(scrollWatcher.current){
             //give navObserver observe
            navObserver.observe(scrollWatcher.current)
        }

        //give sections observer
        const sections = document.querySelectorAll("#about-section, #skills-section, #projects-section, #contact-section")
        sections.forEach(section => sectionObserver.observe(section));

         // Cleanup: stop observing when component unmounts since array is empty
        return () => {
            if (scrollWatcher.current) {
                navObserver.unobserve(scrollWatcher.current);
                 sections.forEach(section => sectionObserver.unobserve(section));
            }
        }
    }, [])

    return (
        <>
        <div ref={scrollWatcher} aria-hidden="true"></div>
        <nav ref={navRef}>
            <div ref={titleRef}><span>CJ</span><span>Cepe</span></div>
            <ul ref={ulRef}>
                <li><a href="#about-section">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#projects-section">Projects</a></li>
                <li><a href="#contact-section">Contact</a></li>
            </ul>
            <ThemeButton buttonRef = {buttonRef} />
        </nav>
        </>
    )
}

export default Nav