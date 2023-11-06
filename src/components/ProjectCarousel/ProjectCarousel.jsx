import { useState } from "react";
import { Carousel, Image, Ratio } from "react-bootstrap";
import fawo from "../../assets/Fawo.png";
import fawo2 from "../../assets/Fawo2.png";
import fawo3 from "../../assets/Fawo3.png";
import photoland from "../../assets/Photoland.png";
import photoland2 from "../../assets/Photoland2.png";
import photoland3 from "../../assets/Photoland3.png";
import vroomchat from "../../assets/Vroomchat.png";
import vroomchat2 from "../../assets/Vroomchat2.png";
import vroomchat3 from "../../assets/Vroomchat3.png";

const PORTFOLIO = [
  { alt: "fawo", photo1: fawo, photo2: fawo2, photo3: fawo3 },
  { alt: "photoland", photo1: photoland, photo2: photoland2, photo3: photoland3 },
  { alt: "vroomchat", photo1: vroomchat, photo2: vroomchat2, photo3: vroomchat3 },
];

const ProjectCarousel = ({ project }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image
            alt={PORTFOLIO[project].alt}
            fluid
            src={PORTFOLIO[project].photo1}
          />
        </Ratio>
      </Carousel.Item>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image
            alt={PORTFOLIO[project].alt}
            fluid
            src={PORTFOLIO[project].photo2}
          />
        </Ratio>
      </Carousel.Item>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image
            alt={PORTFOLIO[project].alt}
            fluid
            src={PORTFOLIO[project].photo3}
          />
        </Ratio>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectCarousel;
