import {Projects as data} from './info.json'

function Card({name, date, link, tools}){
    const imgSrc = new URL(link, import.meta.url).href 
    const toolList = tools.map((tool, index) => <li key={index} className='tag'>{tool}</li>)
    console.log(link)
    return (
        <div className="card">
            <img src={imgSrc} alt="" />
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