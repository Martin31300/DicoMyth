import "./Nav.css"
import { Link } from "react-router"
import Logo from "../../Image-site-mythologie/logo.jpg"

function Nav() {
    return (
        <nav>
            <Link to="/"><img className="logo" src={Logo} alt="logo" /></Link>

            <div className="divNav">
                <Link to="/arbre" className="linkNav">Arbre</Link>
                <Link to="/dictionnaire" className="linkNav">Dictionnaire</Link>
                <Link to="/mythes" className="linkNav">Mythes</Link>

            </div>
        </nav>
    )
}

export default Nav