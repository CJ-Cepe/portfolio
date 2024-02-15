import { useRef, useEffect } from 'react'
import {Skills as data} from './info.json'
import './styles/Skills.css'
import './styles/tags.css'
import useIntersectionObserver from './useIntersectionObserver'


function Segment({group}){
    const key = group == 'technical' ? 'technical' :
        group == 'design' ? 'design' :
        group == 'communication' ? 'communication' : 'others'

    const {[key]: value} = data
    const tags = value.map((tag, index) => {
        return <li key={index} data-value={tag} className='tag'>{tag}</li>
    })
    
    function showDisclaimer(){
        if(key === 'others'){
            return <p>Technologies I've utilized across various tasks and projects throughout my tech journey, some of which used to be my specialty</p>
        } else {
            return null
        }
    }

    return (
        <div className="skills-segment pre-appear">
            <h2>{key}</h2>
            {showDisclaimer()}
            <ul>{tags}</ul>
        </div>
    )
}

function Skills(){
    const skillsRef = useRef(null)
    useIntersectionObserver(skillsRef, 'pre-appear', 'appear-right')

    const toScrollLeft = () => {
        skillsRef.current.scrollLeft = 0;
    }

    const toScrollRight = () => {
        skillsRef.current.scrollLeft = skillsRef.current.scrollWidth;
    }

    return (
        <section id="skills-section" ref={skillsRef}>
            <div>
                <Segment group="technical"/>
                <Segment group="design"/>
                <Segment group="communication"/>
            </div>
            <div>
                <Segment group="others"/>
            </div>
            <div>
                <button className="arrow" data-arrow="left"onClick={toScrollLeft}>&lt;</button>
                <button className="arrow" data-arrow="right" onClick={toScrollRight}>&gt;</button>
            </div>
        </section>
    )
}

export default Skills