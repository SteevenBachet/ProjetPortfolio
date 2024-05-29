import '../../styles/components/nav/nav.css';
import Logo from '../logo';

function Nav() {
    return (
      <nav className='nav'>   
        <div className='nav__container'>
            
            <div className='nav__container__logo'>
                <Logo/>
            </div>
            
            <ul className="nav__container__list" >
                <li className="nav__container__list__item">
                    <a href="#header">ACCUEIL</a>
                </li>
                <li className="nav__container__list__item">
                    <a href="#profil">PROFIL</a>
                </li>
                <li className="nav__container__list__item">
                    <a href="#skills">COMPÉTENCES</a>
                </li>
                <li className="nav__container__list__item">
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li className="nav__container__list__item">
                    <a href="#contact">CONTACT</a>
                </li>
            </ul>
        </div>
        
        <div class="menu-hamburger">
            <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    );
}
  
export default Nav;
  