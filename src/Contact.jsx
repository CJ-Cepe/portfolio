import './styles/Contact.css'
import circularText from './assets/circular-text.svg'
function Contact(){
    return (
        <section className='contact'>
            <div>
                <p>Philippines</p>
                <p>Antipolo City, 1870</p>
                <a>+639205090839</a>
                <a href='#'>cj.ceps@gmail.com</a>
                <a href='#'>github.com/CJ-Cepe</a>
                <a href='#'>linkedin.com/in/cjcepe</a>
            </div>
            <div>
                <img src={circularText} alt="Open For Work" />
            </div>
        </section>
    )
}

export default Contact