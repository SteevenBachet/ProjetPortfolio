import '../../styles/components/nav/nav.css';
import Logo from '../logo';

function Nav() {
    return (
      <nav className='nav'>   
        <ul className="nav__list" >
            <li className="nav__list__item logo">
                <Logo/>
            </li>
            <li className="nav__list__item">
                <a href="#home-section">ACCUEIL</a>
            </li>
            <li className="nav__list__item">
                <a href="#profil-section">PROFIL</a>
            </li>
            <li className="nav__list__item">
                <a href="#skill-section">COMPÉTENCES</a>
            </li>
            <li className="nav__list__item">
                <a href="#about-section">A PROPOS</a>
            </li>
            <li className="nav__list__item">
                <a href="#projects-section">PORTFOLIO</a>
            </li>
            <li className="nav__list__item">
                <a href="#projects-section">CONTACT</a>
            </li>
        </ul>
        <div class="menu-hamburger">
            <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    );
}
  
export default Nav;
  