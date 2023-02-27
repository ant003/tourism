import style from './navFooter.module.css';
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <ul className={style.social}>
                <li>
                    <a href="/facebook"><Icon icon="ri:facebook-box-fill" width="50" height="50" alt="Facebook" /></a>
                </li>
                <li>
                    <a href="/twitter"><Icon icon="ri:twitter-line" width="50" height="50" alt="Twitter" /></a>
                </li>
                <li>
                    <a href="/instagram"><Icon icon="ri:instagram-line" width="50" height="50" alt="Twitter" /></a>
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