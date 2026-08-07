import { motion } from "framer-motion";

import paperBg from "../../assets/why/paper-bg.jpg";

import r1 from "../../assets/reviews/r1.jpg";
import r2 from "../../assets/reviews/r2.jpg";
import r3 from "../../assets/reviews/r3.jpg";
import r4 from "../../assets/reviews/r4.jpg";
import r5 from "../../assets/reviews/r5.jpg";
import r6 from "../../assets/reviews/r6.jpg";
import r7 from "../../assets/reviews/r7.jpg";
import r8 from "../../assets/reviews/r8.jpg";
import r9 from "../../assets/reviews/r9.jpg";
import r10 from "../../assets/reviews/r10.jpg";
import r11 from "../../assets/reviews/r11.jpg";
import r12 from "../../assets/reviews/r12.jpg";
import { useEffect, useState } from "react";

// inside Testimonials()



const row1 = [r1, r2, r3, r4];
const row2 = [r5, r6, r7, r8];
const row3 = [r9, r10, r11, r12];

const rotations = [
  "-rotate-3",
  "rotate-2",
  "-rotate-1",
  "rotate-3",
];

const heights = [
  "md:h-[480px]",
  "md:h-[520px]",
  "md:h-[500px]",
  "md:h-[540px]",
];

const floating = [
  [0, -10, 0],
  [0, -6, 0],
  [0, -12, 0],
  [0, -8, 0],
];

const ReviewCard = ({ image, index }) => {
  return (
    <motion.div
      animate={{
        y: floating[index % floating.length],
      }}
      transition={{
        duration: 4 + (index % 3),
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        y: -30,
        rotate: 0,
        scale: 1.05,
      }}
      className={`
        group
        relative

        flex-shrink-0
w-[155px]
h-[270px]

sm:w-[170px]
sm:h-[300px]

md:w-[270px]
lg:w-[300px]

${heights[index % heights.length]}

        overflow-hidden

        rounded-3xl

        border
        border-[#E7D8C5]

        bg-[#FFFDF8]

        p-4

        transition-all
        duration-500

        shadow-[0_30px_70px_rgba(0,0,0,.12)]

        hover:border-[#D8A23C]
        hover:shadow-[0_35px_90px_rgba(216,162,60,.35)]

        ${rotations[index % rotations.length]}
      `}
    >
      {/* Gold Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10

          h-40
          w-40

          rounded-full

          bg-[#F4D06F]/20

          blur-[90px]

          opacity-0

          transition-all
          duration-500

          group-hover:opacity-100
        "
      />

      {/* Image */}

      <div className="relative h-full overflow-hidden rounded-[20px]">

        <img
          src={image}
          alt=""
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Light Reflection */}

        <div
          className="
            absolute
            right-0
            top-0

            h-24
            w-24

            rounded-full

            bg-white/20

            blur-2xl
          "
        />

        {/* Soft Vignette */}

        <div
          className="
            absolute
            inset-0

            bg-gradient-to-t

            from-black/5
            via-transparent
            to-white/5
          "
        />

      </div>

    </motion.div>
  );
};
const Testimonials = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);

  check();

  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);

  return (
    <section
      id="reviews"
      className="
relative
scroll-mt-[96px]
overflow-hidden

py-14
md:py-28
"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "700px",
        backgroundColor: "#FFF8F1",
      }}
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#E6B347]/15 blur-[140px]" />

      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#F2D98E]/20 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-24 text-center"
        >
          <span
            className="
              rounded-full
              bg-[#F8E7BF]
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[4px]
              text-[#A36C18]
            "
          >
            Customer Love
          </span>

          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-[#3A2618]
              md:text-6xl
            "
          >
            Handmade Moments

            <span className="block text-[#D39A31]">
              Loved By Everyone
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-[#6B594B]
            "
          >
            Every review represents a smile, a memory,
            and the happiness of receiving something
            handcrafted with love.
          </p>
        </motion.div>

        {/* ===================== Reviews ===================== */}
        {/* ===================== Row 1 ===================== */}

<div className="relative overflow-hidden">

  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
  duration: isMobile ? 10 : 42,
  repeat: Infinity,
  ease: "linear",
}}
    className="
flex


md:-space-x-8
"
  >

    {[...row1, ...row1].map((image, index) => (

      <ReviewCard
        key={index}
        image={image}
        index={index}
      />

    ))}

  </motion.div>

</div>

{/* ===================== Row 2 ===================== */}

<div className="relative mt-10 hidden overflow-hidden md:block">

  <motion.div
    animate={{
      x: ["-50%", "0%"],
    }}
    transition={{
  duration: isMobile ? 12 : 56,
  repeat: Infinity,
  ease: "linear",
}}
    className="flex -space-x-8"
  >

    {[...row2, ...row2].map((image, index) => (

      <ReviewCard
        key={index}
        image={image}
        index={index + 4}
      />

    ))}

  </motion.div>

</div>

{/* ===================== Row 3 ===================== */}

<div className="relative mt-10 hidden overflow-hidden lg:block">

  <motion.div
    animate={{
      x: ["0%", "-50%"],
    }}
    transition={{
  duration: isMobile ? 11 : 48,
  repeat: Infinity,
  ease: "linear",
}}
    className="flex -space-x-8"
  >

    {[...row3, ...row3].map((image, index) => (

      <ReviewCard
        key={index}
        image={image}
        index={index + 8}
      />

    ))}

  </motion.div>

</div>

{/* ===================== Bottom Quote ===================== */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: .3 }}
  viewport={{ once: true }}
  className="mx-auto mt-24 max-w-4xl text-center"
>

  <p
    className="
      text-2xl
      italic
      leading-10
      text-[#5B4432]
      md:text-3xl
    "
  >
    “Every handmade gift carries a story,
    and every smile we receive becomes
    a part of ours.”
  </p>

</motion.div>
{/* ===================== Stats ===================== */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .7 }}
  viewport={{ once: true }}
  className="
    mt-24

    grid
    grid-cols-2
    gap-6

    

    lg:grid-cols-4
  "
>

  {[
    {
      value: "1000+",
      label: "Happy Customers",
    },
    {
      value: "5000+",
      label: "Orders Delivered",
    },
    {
      value: "4.9★",
      label: "Average Rating",
    },
    {
      value: "100%",
      label: "Handmade",
    },
  ].map((item) => (

    <motion.div

      key={item.label}

      whileHover={{
        y: -8,
        scale: 1.03,
      }}

      transition={{
        type: "spring",
        stiffness: 220,
      }}

      className="
        relative

        overflow-hidden

        rounded-[30px]

        border
        border-[#E7D8C5]

        bg-white/80

        p-5

md:p-8

        text-center

        backdrop-blur-md

        shadow-[0_20px_45px_rgba(0,0,0,.08)]

        transition-all
        duration-500

        hover:border-[#D8A23C]
        hover:shadow-[0_25px_70px_rgba(216,162,60,.25)]
      "
    >

      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10

          h-28
          w-28

          rounded-full

          bg-[#F4D06F]/20

          blur-[70px]
        "
      />

      <h3
        className="
          relative

          text-3xl

md:text-4xl
          font-black

          text-[#D39A31]
        "
      >
        {item.value}
      </h3>

      <p
        className="
          relative

          mt-3

          text-[#6B594B]
        "
      >
        {item.label}
      </p>

    </motion.div>

  ))}

</motion.div>

      </div>

    </section>

  );
};

export default Testimonials;