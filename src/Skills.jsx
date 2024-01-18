import {Skills as data} from './info.json'

function Section({group}){
    const key = group == 'technical' ? 'technical' :
        group == 'design' ? 'design' :
        group == 'communication' ? 'communication' : 'others'

    const {[key]: value} = data
    const content = value.join(" | ")

    return (
        <div className="skills-section">
            <h2>{key}</h2>
            <p>{content}</p>
        </div>
    )
}

function Skills(){
    return (
        <div className="skills">
            <div>
            <Section group="technical"/>
            <Section group="design"/>
            <Section group="communication"/>
            </div>
            <div>
            <Section group="others"/>
            </div>
        </div>
    )
}

export default Skills