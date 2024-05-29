import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/parts/portfolio/portfolio.css';
import Slider from 'react-slick';

const reponse = await fetch('http://localhost:3000/projects.json');
const projects = await reponse.json();

function Portfolio() {

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

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__title">PORTFOLIO</h2>
      <div className="portfolio__container">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio__item">
              <img
                src={project.image}
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
    </div>
  );
}

export default Portfolio;
