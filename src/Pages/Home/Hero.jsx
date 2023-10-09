import { useEffect, useState } from "react";
import birthday from '../../assets/birthday.jpg';
import anniversary from '../../assets/anniversary.jpg';
import wedding from '../../assets/wedding.jpg';
import picnic from '../../assets/picnic.jpg';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [picnic, wedding, birthday, anniversary];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div data-aos="zoom-in" className="carousel sm:w-[750px] md:w-[950px] lg:w-[1150px] mx-auto">
      <div
        className="carousel-item transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`
        }}
      >
        {images.map((image, index) => (
          <div className="sm:w-[750px] md:w-[950px] lg:w-[1150px] max-h-[88vh]" key={index}>
            <img
              className="sm:w-[750px] md:w-[950px] lg:w-[1150px] h-full "
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;


