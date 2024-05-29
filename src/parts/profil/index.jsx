import '../../styles/parts/profil/profil.css';
import photoIdentite from '../../assets/PhotoIdentite.png'


function Profil() {
    return (
      <div className="profil" id="profil">
        <div className="profil__container">
            <h2 className="profil__container__title">PROFIL</h2>
            <div className='profil__container__content'>
                <img className="profil__container__content__image" src={photoIdentite} alt="identité"/>
                <p className='profil__container__content__text'>
                    <span>technicien de maintenance industriel </span> passionné par le développement informatique.
                    Il y a plusieurs mois, j'ai commencé à programmer mon premier jeu vidéo par simple curiosité. j'ai pris goût à ce domaine et je suis devenu un <span>développeur amateur</span>. 
                    Actuellement, j'apprends à programmer en dehors de mon travail de manière autodidacte en utilisant des ressources en ligne, notamment en <span>C#, Front-end et Javascript</span>. Mais je suis conscient que pour consolider mes connaissances et devenir un professionnel compétent, j'ai besoin de suivre une <span>formation en apprentissage</span>.
                    Mon objectif est d'acquérir les compétences nécessaires pour devenir un développeur qualifié et travailler sur des projets passionnants dans ce domaine en constante évolution.
                </p>
            </div>
            
        </div>
      </div>
    );
}
  
export default Profil;
  