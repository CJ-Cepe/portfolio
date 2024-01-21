import './styles/Contact.css'
import circularText from './assets/circular-text.svg'
function Contact(){
    return (
        <section className='contact'>
            <div>
                <h2>Philippines</h2>
                <h3>Antipolo City, 1870</h3>
                <ul>
                    <li><a>+639205090839</a></li>
                    <li><a href="">cj.ceps@gmail.com</a></li>
                    <li><a href="">github.com/CJ-Cepe</a></li>
                    <li><a href="">linkedin.com/in/cjcepe</a></li>
                </ul>
            </div>
            <div>
                <img src={circularText} alt="Open For Work" />
            </div>
        </section>
    )
}

export default Contact