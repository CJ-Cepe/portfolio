import './styles/Nav.css'
import sun from '../public/sun.svg'
function Nav(){
    return (
        <nav>
            <div>&lt;CJ Cepe/&gt;</div>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button><img src={sun} alt="sun icon for lightmode" /></button>
        </nav>
    )
}

export default Nav