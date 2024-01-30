import {Projects as data} from './info.json'
import './styles/Project.css'
import { useRef, useEffect } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

function Card({project}){
    const {name, date, demo, link, tools, source, description} = project
    const imgSrc = new URL(link, import.meta.url).href 
    const toolList = tools.map((tool, index) => <li key={index} className='tag'data-value={tool}>{tool}</li>)

    return (
        <div className="card pre-appear">
            <div>
                <img loading ="lazy" decoding="async" src={imgSrc} alt="" />
                <div></div>
            </div>
            <div>
                <p>{name}</p>
                <span>{date}</span>
                <ul>{toolList}</ul>
                <p>{description}</p>
                <a href={source}>Source Code</a>
                <a href={demo}>Live Demo</a>
            </div>
        </div>
    )
}

function Projects(){
    const cards = data.map((project, index) => {
        return <Card key={index} project={project}/>
    })

    const projectRef = useRef(null)
    useIntersectionObserver(projectRef, 'pre-appear', 'appear-up')


    return (
        <section id="projects-section" ref={projectRef}>
            {cards}
        </section>
    )
}

export default Projects