const Footer = () => {
    return (
        <footer className="footer">
            <ul className="social">
                <li>
                    <a href="/facebook"><img src="" alt="Facebook" /></a>
                </li>
                <li>
                    <a href="/twitter"><img src="" alt="Twitter" /></a>
                </li>
                <li>
                    <a href="/instagram"><img src="" alt="Instagram" /></a>
                </li>
            </ul>
            <ul>
                <li><a href="/acerca">Acerca</a></li>
                <li><a href="/ayuda">Ayuda</a></li>
                <li> <a href="/privacidad">Privacidad</a></li>
                <li><a href="/terminos">Términos de uso</a></li>
            </ul>
        </footer>
    );
}

export default Footer;