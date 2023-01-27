import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/lugares"> Lugares</Link> </li>
                <li><Link to="/map">Mapa</Link></li>
                <li><Link to="/consejos">Consejos</Link></li>
                <li><Link to="/crear">Crear</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;