import './styles/About.css'
import {About as data} from './info.json'

function Experience() {
    const {main, secondary, location, date, details} = data.experience
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-section">
            <h2>{main} <span>{location}</span></h2>
            <h3>{secondary} <span>{date}</span></h3>
            <ul>{detailList}</ul>
        </div>
    )
}

function Education() {
    const {main, secondary, location, date, details} = data.education
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-section">
            <h2>{main} <span>{location}</span></h2>
            <h3>{secondary} <span>{date}</span></h3>
            <ul>{detailList}</ul>
        </div>
    )
}

function Training(){
    const details = data.training.map((detail, index)=>
        <li key={index}>{detail.name} <span>{detail.date}</span></li>
        )
    return (
        <div className="about-section">
            <ul>{details}</ul>
        </div>
    )
}

function About(){
    return (
        <div className="about">
            <div>
                <img src="" alt="" />
                <p>{data.background.firstParagraph} <span>{data.background.secondParagraph}</span></p>
            </div>
            <div>
                <Experience/>
                <Education/>
                <Training/>
            </div>
        </div>
    )
}

export default About