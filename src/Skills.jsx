import { useRef, useEffect } from 'react'
import {Skills as data} from './info.json'
import './styles/Skills.css'
import './styles/tags.css'
import useIntersectionObserver from './useIntersectionObserver'


function Section({group}){
    const key = group == 'technical' ? 'technical' :
        group == 'design' ? 'design' :
        group == 'communication' ? 'communication' : 'others'

    const {[key]: value} = data
    const tags = value.map((tag, index) => {
        return <li key={index} data-value={tag} className='tag'>{tag}</li>
    })

    return (
        <div className="skills-segment pre-appear">
            <h2>{key}</h2>
            <ul>{tags}</ul>
        </div>
    )
}

function Skills(){
    const skillsRef = useRef(null)
    useIntersectionObserver(skillsRef, 'pre-appear', 'appear-right')

    return (
        <section id="skills-section" ref={skillsRef}>
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