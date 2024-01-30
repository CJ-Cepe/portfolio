import {Projects as data} from './info.json'
import './styles/Project.css'
import { useRef, useEffect } from 'react'
import useIntersectionObserver from './useIntersectionObserver'


function Card({name, date, link, tools}){
    const imgSrc = new URL(link, import.meta.url).href 
    const toolList = tools.map((tool, index) => <li key={index} className='tag'data-value={tool}>{tool}</li>)

    return (
        <div className="card pre-appear">
            <div>
                <div>
                    <img loading ="lazy" decoding="async" src={imgSrc} alt="" />
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
    /* useIntersectionObserver(projectRef, 'fade-in', 'appear') */
    useIntersectionObserver(projectRef, 'pre-appear', 'appear-up')

    
    return (
        <section id="projects-section" ref={projectRef}>
            {cards}
        </section>
    )
}

export default Projects