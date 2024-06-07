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
              className="portfolio__item"
              onClick={() => openModal(project)}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="portfolio__image"
              />
              <h3 className="portfolio__item-title">{project.title}</h3>
              <p className="portfolio__item-description">
                {project.description}
              </p>
            </div>
          ))}
        </Slider>
      </div>

      {selectedProject && (
        <div className="modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <span className="modal__close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <div className="modal__scrollable-content">
              <Carrousel selectedProject={selectedProject}/>
              <div className="modal__info">
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
                <p>{selectedProject.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;