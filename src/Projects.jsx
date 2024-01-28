import {Projects as data} from './info.json'
import './styles/Project.css'
import { useRef, useEffect } from 'react'

function Card({name, date, link, tools}){
    const imgSrc = new URL(link, import.meta.url).href 
    const toolList = tools.map((tool, index) => <li key={index} className='tag'data-value={tool}>{tool}</li>)

    return (
        <div className="card fade-in">
            <div>
                <div>
                    <img src={imgSrc} alt="" />
                </div>
                <div></div>
            </div>
            <p>{name}<span>{date}</span></p>
            <ul>{toolList}</ul>
        </div>
    )
}

function Projects(){
    const cards = data.map((project, index) => {
        return <Card key={index} name={project.name} date={project.date} link={project.link} tools={project.tools}/>
    })

    const projectRef = useRef(null)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('appear');
            }
        })
    }, {threshold: 0.1, rootMargin: "0px 0px -150px 0px"})

    useEffect(() => {
        const segments = projectRef.current.querySelectorAll('.fade-in')
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
        <section id="projects-section" ref={projectRef}>
            {cards}
        </section>
    )
}

export default Projects