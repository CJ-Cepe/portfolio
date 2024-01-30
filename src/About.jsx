import './styles/About.css'
import {About as data} from './info.json'
import { useRef, useEffect } from 'react'
import useIntersectionObserver from './useIntersectionObserver'

import React, { Suspense } from 'react';
const Spline = React.lazy(() => import('@splinetool/react-spline'));


function Experience() {
    const {main, secondary, location, date, details} = data.experience
    const detailList = details.map((detail, index)=>
        <li key={index}>{detail}</li>
        )
    return (
        <div className="about-segment pre-appear">
            <h2>Experience</h2>
            <p>{main} <span>{location}</span></p>
            <p>{secondary} <span>{date}</span></p>
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
        <div className="about-segment pre-appear">
            <h2>Education</h2>
            <p>{main} <span>{location}</span></p>
            <p>{secondary} <span>{date}</span></p>
            <ul>{detailList}</ul>
        </div>
    )
}

function Training(){
    const details = data.training.map((detail, index)=>
        <p key={index}>{detail.name} <span>{detail.date}</span></p>
        )
    return (
        <div className="about-segment pre-appear">
            <h2>Trainings/Certificates</h2>
            {details}
        </div>
    )
}

function About(){
    const aboutRef = useRef(null)
    useIntersectionObserver(aboutRef, 'pre-appear', 'appear-up')

    function onLoad(spline) {
        console.log('printed')
       /*  spline.setZoom(-10)
        spline.setSize(400, 400)
       const obj = spline.findObjectById('07a8eb7e-3b9f-4eb4-86dd-7229f9d1fc60'); */
       
      }

    useEffect(() => {
        /* const script = document.createElement('script');
        script.type = "module"
        script.src = 'https://unpkg.com/@splinetool/viewer@1.0.38/build/spline-viewer.js';
        script.async = true;
        document.querySelector('#about-section > div:first-child').appendChild(script);
     */

       /*  const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/fN9iccxUvAx3YMg6/scene.splinecode', 
            undefined, { credentials: 'include', mode: 'no-cors', }); */
            
        return () => {
            /* document.querySelector('#about-section > div:first-child').removeChild(script); */
        }
      }, []);
    
    return (
        <section id="about-section" className="about" ref={aboutRef}>
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <div><Spline scene="./src/assets/scene.splinecode" onLoad={onLoad}/></div>
                </Suspense>
                <p className='pre-appear'>{data.background.firstParagraph}</p>
                <p className='pre-appear'>{data.background.secondParagraph}</p>
            </div>
            <div>
                <Experience/>
                <Education/>
                <Training/>
            </div>
        </section>
    )
}

export default About