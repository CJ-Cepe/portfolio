import {Projects as data} from './info.json'
import './styles/Project.css'
import { useRef, useEffect } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

function getUrl(link){
    return new URL(link, import.meta.url).href 
}

function getToolList(tools){
    return tools.map((tool, index) => <li key={index} className='tag'data-value={tool}>{tool}</li>)
}

function Card({project}){
    const {name, date, demo, tools, source, description, imageSource, videoSource} = project
    const imgSrc = getUrl(imageSource)
    const vidSrc = getUrl(videoSource) 
    const toolList = getToolList(tools)
    const videoRef = useRef(null)
    let mediaElement = null;
    let demoElement = null;

    if(videoSource){
        mediaElement =  <video ref={videoRef} poster={imgSrc} src={vidSrc}  type="video/mp4" width="100%" loop preload="none" muted></video>
    } else {
        mediaElement = <img loading ="lazy" decoding="async" src={imgSrc} alt=""  width="100%"/> 
    }

    if(demo){
        demoElement = <a href={demo}>Live Demo</a>
    }

    useEffect(()=>{
        const videoElement = videoRef.current;

        const handleMouseOver = () => {
            const videoElemProm = videoElement.play();
            if(videoElemProm !== undefined){
                videoElemProm.catch(error => {
                    //console.error('Playback failed:', error)
                })
            }
        }

        const handleMouseOut = () => {
            videoElement.pause();       
            videoElement.load();
        };

        if(videoSource){
            videoElement.addEventListener('mouseover', handleMouseOver);
            videoElement.addEventListener('mouseout', handleMouseOut);
        }
        
        return () => {
            if(videoSource){
                videoElement.removeEventListener('mouseover', handleMouseOver);
                videoElement.removeEventListener('mouseout', handleMouseOut);
            }
        }
    })


    return (
        <div className="card pre-appear">
            <div>
                {mediaElement}
            </div>
            <div>
                <p>{name}</p>
                <span>{date}</span>
                <ul>{toolList}</ul>
                <p>{description}</p>
                <div>
                    <a href={source}>Source Code</a>
                    {demoElement}
                </div>
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