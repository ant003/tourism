const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/lugares"> Lugares</a> </li>
                <li><a href="/mapa">Mapa</a></li>
                <li><a href="/consejos">Consejos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;