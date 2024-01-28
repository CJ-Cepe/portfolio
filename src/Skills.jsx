import { useRef, useEffect } from 'react'
import {Skills as data} from './info.json'
import './styles/Skills.css'
import './styles/tags.css'

function Section({group}){
    const key = group == 'technical' ? 'technical' :
        group == 'design' ? 'design' :
        group == 'communication' ? 'communication' : 'others'

    const {[key]: value} = data
    const tags = value.map((tag, index) => {
        return <li key={index} data-value={tag} className='tag'>{tag}</li>
    })

    return (
        <div className="skills-segment move-out">
            <h2>{key}</h2>
            <ul>{tags}</ul>
        </div>
    )
}

function Skills(){
    const skillsRef = useRef(null)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('move-in');
            }
        })
    }, {threshold: 0, rootMargin: "0px 0px -150px 0px"})

    useEffect(() => {
        const segments = skillsRef.current.querySelectorAll('.move-out')
        console.log(segments)
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