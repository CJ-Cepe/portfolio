import {Projects as data} from './info.json'
import './styles/Project.css'

function Card({name, date, link, tools}){
    const imgSrc = new URL(link, import.meta.url).href 
    const toolList = tools.map((tool, index) => <li key={index} className='tag'data-value={tool}>{tool}</li>)

    return (
        <div className="card">
            <div>
                <img src={imgSrc} alt="" />
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

    return (
        <section className="projects">
            {cards}
        </section>
    )
}

export default Projects