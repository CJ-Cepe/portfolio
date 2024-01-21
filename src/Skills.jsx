import {Skills as data} from './info.json'
import './styles/Skills.css'
import './styles/tags.css'

function Section({group}){
    const key = group == 'technical' ? 'technical' :
        group == 'design' ? 'design' :
        group == 'communication' ? 'communication' : 'others'

    const {[key]: value} = data
    console.log(data)
    const tags = value.map((tag, index) => {
        return <li key={index} data-value = {tag} className='tag'>{tag}</li>
    })

    return (
        <div className="skills-section">
            <h2>{key}</h2>
            <ul>{tags}</ul>
        </div>
    )
}

function Skills(){
    return (
        <section className="skills">
            <div>
                <Section group="technical"/>
                <Section group="design"/>
                <Section group="communication"/>
            </div>
            <div>
                <Section group="others"/>
            </div>
        </section>
    )
}

export default Skills