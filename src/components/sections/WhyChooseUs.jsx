import { motion } from "framer-motion";
import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoColorPalette,
  IoDiamond,
  IoCube,
  IoPeople,
} from "react-icons/io5";

import paperBg from "../../assets/why/paper-bg.jpg";

import hero1 from "../../assets/why/hero1.jpg";
import hero2 from "../../assets/why/hero2.jpg";
import hero3 from "../../assets/why/hero3.jpg";

const highlights = [
  "100% Handmade",
  "Premium Quality Materials",
  "Completely Customized",
  "Secure Packaging",
];

const stats = [
  {
    value: "1000+",
    label: "Happy Customers",
    icon: IoPeople,
  },
  {
    value: "500+",
    label: "Custom Orders",
    icon: IoColorPalette,
  },
  {
    value: "4.9★",
    label: "Customer Rating",
    icon: IoDiamond,
  },
  {
    value: "100%",
    label: "Handmade",
    icon: IoCube,
  },
];

const WhyChoose = () => {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-32"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px",
        backgroundColor: "#FFF8F1",
      }}
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-[#E6B347]/15 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#F5D78B]/20 blur-[170px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
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
              text-[#A46C18]
            "
          >
            Crafted With Passion
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
            Handmade Pieces

            <span className="block text-[#D39A31]">
              Made Just For You
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-[#6B594B]
            "
          >
            Every creation is handcrafted with love,
            creativity and attention to detail, making
            every piece truly one of a kind.
          </p>

        </motion.div>

        {/* ================= Hero Card ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-[#E8DCCB]
            bg-[rgba(255,252,247,.92)]
            shadow-[0_35px_90px_rgba(0,0,0,.10)]
            backdrop-blur-md
          "
        >

          <div
            className="
              grid
              items-center
              gap-12
              lg:grid-cols-2
            "
          >
            {/* ================= LEFT SIDE ================= */}

<div className="relative p-8">

  {/* Warm Glow */}

  <div
    className="
      absolute
      left-10
      top-1/2
      h-[420px]
      w-[420px]
      -translate-y-1/2
      rounded-full
      bg-[#D8A23C]/15
      blur-[120px]
    "
  />

  {/* Image Grid */}

  <div
    className="
      relative
      grid
      h-[620px]
      grid-cols-2
      grid-rows-[1.8fr_1fr]
      gap-5
    "
  >

    {/* Main Image */}

    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: .35 }}
      className="
        group
        col-span-2
        overflow-hidden
        rounded-[34px]
        shadow-[0_25px_60px_rgba(0,0,0,.18)]
      "
    >

      <img
        src={hero1}
        alt=""
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image 2 */}

    <motion.div
      whileHover={{
        y: -8,
        rotate: -2,
        scale: 1.04,
      }}
      transition={{ duration: .35 }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        shadow-[0_18px_45px_rgba(0,0,0,.18)]
      "
    >

      <img
        src={hero2}
        alt=""
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </motion.div>

    {/* Image 3 */}

    <motion.div
      whileHover={{
        y: -8,
        rotate: 2,
        scale: 1.04,
      }}
      transition={{ duration: .35 }}
      className="
        group
        overflow-hidden
        rounded-[28px]
        shadow-[0_18px_45px_rgba(0,0,0,.18)]
      "
    >

      <img
        src={hero3}
        alt=""
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </motion.div>

  </div>

  {/* Floating Badge */}

  <motion.div

    initial={{ opacity: 0, scale: .8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: .4 }}

    className="
      absolute
      -right-3
      top-16

      rounded-[26px]

      border
      border-[#EAD9BA]

      bg-[#FFFDF8]/95

      px-6
      py-5

      shadow-[0_20px_45px_rgba(0,0,0,.15)]

      backdrop-blur-md
    "
  >

    <p
      className="
        text-xs
        uppercase
        tracking-[4px]
        text-[#A46A17]
      "
    >
      CraftHabitat
    </p>

    <h3
      className="
        mt-2
        text-3xl
        font-black
        text-[#3A2618]
      "
    >
      ❤️ Handmade
    </h3>

    <p
      className="
        mt-2
        text-[#735D48]
      "
    >
      Crafted with love
      <br />
      for every home.
    </p>

  </motion.div>

</div>

{/* ================= RIGHT SIDE ================= */}

<div className="px-12 py-14 lg:px-16">

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
      text-[#A46C18]
    "
  >
    Our Promise
  </span>

  <h3
    className="
      mt-8
      text-5xl
      font-black
      leading-tight
      text-[#3A2618]
    "
  >
    Handmade

    <span className="block text-[#D39A31]">
      With Heart ❤️
    </span>

  </h3>

  <p
    className="
      mt-8
      text-lg
      leading-9
      text-[#6B594B]
    "
  >
    Every product is designed to celebrate
    special moments with premium craftsmanship,
    timeless elegance and attention to every
    little detail.
  </p>

  {/* Checklist */}

  <div className="mt-10 space-y-5">

    {highlights.map((item) => (

      <div
        key={item}
        className="flex items-center gap-4"
      >

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            bg-gradient-to-br
            from-[#F5D06E]
            to-[#D79C29]

            text-white

            shadow-lg
          "
        >
          <IoCheckmarkCircle size={20}/>
        </div>

        <span
          className="
            text-lg
            font-medium
            text-[#4C3828]
          "
        >
          {item}
        </span>

      </div>

    ))}

  </div>

  <button
  onClick={() => {
    document.getElementById("categories")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="
    mt-12
    flex
    items-center
    gap-3
    rounded-full
    bg-gradient-to-r
    from-[#D8A23C]
    to-[#BB7F17]
    px-8
    py-4
    font-semibold
    text-white
    shadow-xl
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-2xl
  "
>
  Discover Collection
  <IoArrowForward size={18} />
</button>

</div>

          </div>

        </motion.div>

        {/* ================= Trust Statistics ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: .3,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#E9DCC8]
                    bg-white/90
                    p-8
                    shadow-[0_15px_40px_rgba(0,0,0,.08)]
                    backdrop-blur-md
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      right-0
                      top-0
                      h-28
                      w-28
                      rounded-full
                      bg-[#F5D06E]/20
                      blur-[70px]
                    "
                  />

                  {/* Icon */}

                  <div
                    className="
                      relative
                      mb-6
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#F5D06E]
                      to-[#D89D2A]
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon size={24} />
                  </div>

                  {/* Value */}

                  <h3
                    className="
                      relative
                      text-4xl
                      font-black
                      text-[#3A2618]
                    "
                  >
                    {item.value}
                  </h3>

                  {/* Label */}

                  <p
                    className="
                      relative
                      mt-2
                      text-[#6B594B]
                    "
                  >
                    {item.label}
                  </p>

                </motion.div>

              );

            })}

          </div>

          {/* Quote */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3 }}
            viewport={{ once: true }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >

            <p
              className="
                text-3xl
                italic
                leading-relaxed
                text-[#5C4633]
              "
            >
              “Every handcrafted piece begins as an idea,
              is shaped with passion, and becomes a memory
              you'll cherish forever.”
            </p>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChoose;