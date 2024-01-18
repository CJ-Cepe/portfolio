import './styles/About.css'
import {About as data} from './info.json'
import {Experience, Education, Training} from './AboutSection'

function About(){
    return (
        <div className="about">
            <div>
                <img src="" alt="" />
                <p>{data.background.firstParagraph} <span>{data.background.secondParagraph}</span></p>
            </div>
            <div>
                <Experience content={data}/>
                <Education content={data}/>
                <Training content={data}/>
            </div>
        </div>
    )
}

export default About