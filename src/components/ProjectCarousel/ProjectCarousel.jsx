import { useState } from "react";
import { Carousel, Image, Ratio } from "react-bootstrap";
import fawo from "../../assets/Fawo.png";
import photoland from "../../assets/Photoland.png";
import vroomchat from "../../assets/Vroomchat.png";

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image alt="fawo" fluid src={fawo} />
        </Ratio>
      </Carousel.Item>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image alt="photoland" fluid src={photoland} />
        </Ratio>
      </Carousel.Item>
      <Carousel.Item>
        <Ratio aspectRatio={2 / 3}>
          <Image alt="vroomchat" fluid src={vroomchat} />
        </Ratio>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProjectCarousel;
