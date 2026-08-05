import { useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";

const slides = [hero1, hero2];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    }

    if (e.key === "ArrowLeft") {
      prevSlide();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <section
      id="home"
      className="
        relative
    
        h-[55vh]
        sm:h-[65vh]
        md:h-[75vh]
        lg:h-[90vh]
        xl:h-[calc(100vh-96px)]
        w-full
        overflow-hidden
        bg-[#FFF9F3]
      "

    >
              {/* Hero Slides */}

      <div className="relative h-full w-full">

        {slides.map((image, index) => (
          <div
            key={index}
            className={`
              absolute
              inset-0
              transition-all
              duration-[1500ms]
              ease-in-out
              ${
                current === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-[1.08] z-0"
              }
            `}
          >

            <img
              src={image}
              alt={`Hero ${index + 1}`}
              className="
                h-full
                w-full
                object-cover
                object-center
                select-none
                pointer-events-none
                transition-transform
                duration-[6000ms]
                ease-linear"
              draggable="false"
            />

            {/* Warm Overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-[#FFF8EF]/10
                via-transparent
                to-black/10
              "
            />

          </div>
        ))}

      </div>



      <div
        className="
          absolute
          bottom-6
          left-1/2
          z-30
          flex
          -translate-x-1/2
          items-center
          gap-3
        "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to Slide ${index + 1}`}
            onClick={() => setCurrent(index)}
            className={`
              relative
              h-3
              rounded-full
              transition-all
              duration-500
              ${
                current === index
                  ? "w-10 bg-[#E3A62A]"
                  : "w-3 bg-white/80 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;