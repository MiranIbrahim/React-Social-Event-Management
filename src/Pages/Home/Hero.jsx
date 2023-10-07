import birthday from "../../assets/birthday-banner.jpg";
import wedding from "../../assets/wedding-banner.jpg";
import family from "../../assets/family-banner.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [family, wedding, birthday];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="carousel rounded-box max-h-[80vh]">
      <div className="carousel-item w-full" id="">
        <img className="w-full" src={images[currentIndex]} alt="Burger" />
      </div>
    </div>
  );
};

export default Hero;

