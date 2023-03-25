import "slick-carousel/slick/slick-theme.css";
import foto2 from "../../assets/foto2.png";
import foto1 from "../../assets/foto1.png";
import foto3 from "../../assets/foto3.png";
import drug1 from "../../assets/drug1.png";
import drug2 from "../../assets/drug2.png";
import drug3 from "../../assets/drug3.png";
import drug4 from "../../assets/drug4.png";
import "slick-carousel/slick/slick.css";
import { Container } from "./style";
import Slider from "react-slick";

const Carroussel = () => {
  const images: any[] = [foto3, foto2, foto1, drug1, drug2, drug3, drug4];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export { Carroussel };
