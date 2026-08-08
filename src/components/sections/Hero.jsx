import { useEffect, useState } from "react";

import heroDesktop1 from "../../assets/hero/hero1.webp";
import heroDesktop2 from "../../assets/hero/hero2.webp";

// Mobile Hero
import heroMobile from "../../assets/hero/hero-mobile.webp";

const slides = [heroDesktop1, heroDesktop2];

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
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);
return (
  <section
    id="home"
    className="relative overflow-hidden bg-[#FFF9F3]"
  >

    {/* ===================== Desktop Hero ===================== */}

    <div
      className="
        relative
        hidden
        md:block

        h-[75vh]
        lg:h-[90vh]
        xl:h-[calc(100vh-96px)]
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
              width={1600}
              height={751}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
              className="
                h-full
                w-full
                object-cover
                object-center

                select-none
                pointer-events-none

                transition-transform
                duration-[6000ms]
                ease-linear
              "
              draggable="false"
            />

            {/* Overlay */}

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

      {/* Slider Dots */}

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

    </div>

    {/* ===================== Mobile Hero Starts ===================== */}

    <div className="block md:hidden">
      <div className="relative aspect-[9/16] overflow-hidden bg-[#FFF9F3]">
        <img
          src={heroMobile}
          alt="CraftHabitat Hero"
          width={720}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className="absolute inset-0 h-full w-full object-cover object-top select-none pointer-events-none"
          draggable={false}
        />

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFF9F3] to-transparent" />
      </div>
    </div>

  </section>
);

};

export default Hero;

      