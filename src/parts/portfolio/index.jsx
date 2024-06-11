import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/parts/portfolio/portfolio.css';
import Slider from 'react-slick';
import Carrousel from '../../components/carrousel';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:3000/projects.json');
      const data = await response.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="portfolio__container__item"
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="portfolio__container__item__image"
              />
              <h3 className="portfolio__container__item__title">{project.title}</h3>
              <p className="portfolio__container__item__description">
                {project.description}
              </p>
              <div className="portfolio__container__item__more-info">En savoir plus</div>
            </div>
          ))}
        </Slider>
      </div>

      {selectedProject && (
        <div className="portfolio__modal" onClick={closeModal}>
          <div className="portfolio__modal__content" onClick={(e) => e.stopPropagation()}>
            <span className="portfolio__modal__content__close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <Carrousel selectedProject={selectedProject}/>
            <p>{selectedProject.information}</p>
            <ul className="portfolio__modal__content__technology">Technologies :
              {selectedProject.technologies.map((technologie) => (
                <li>{technologie}</li>
              ))}
            </ul>
            {selectedProject.competences ? (
                  <ul className="portfolio__modal__content__skill">Compétences :
                    {selectedProject.competences.map((competence, index) => (
                      <li key={index}>{competence}</li>
                    ))}
                  </ul>
                ) : null   
            }
            {selectedProject.github ? (
                <a href={selectedProject.github}>Lien Github du projet</a>
              ) : null
            }
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;