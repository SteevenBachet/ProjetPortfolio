import helloWorldVideo from '../../assets/helloWorldVideo.mp4';
import '../../styles/components/header/header.css';

function Header() {
    return (
        <header className="header">
            <video className="header__video" src={helloWorldVideo} muted autoPlay loop type="video/mp4" alt="Vidéo d'accueil de programmation avec écrit hello wolrd">
            </video>

            <div className="header__overlay">
            </div>
        </header>
    );
}
  
export default Header;