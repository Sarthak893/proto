import {
  IoArrowForward,
  IoCheckmarkCircle,
  IoColorPalette,
  IoDiamond,
  IoCube,
  IoPeople,
} from "react-icons/io5";

import paperBg from "../../assets/why/paper-bg.webp";

import hero1 from "../../assets/why/hero1.webp";
import hero2 from "../../assets/why/hero2.webp";
import hero3 from "../../assets/why/hero3.webp";

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
      className="relative overflow-hidden py-16 md:py-32"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= Heading ================= */}

        <div
          className="mx-auto mb-12 max-w-3xl text-center md:mb-24"
        >

          <span
            className="
              rounded-full
              bg-[#F8E7BF]
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[2px]
              sm:text-sm
              sm:tracking-[4px]
              text-[#A46C18]
            "
          >
            Crafted With Passion
          </span>

          <h2
            className="
              mt-8
              text-3xl
              font-black
              leading-tight
              text-[#3A2618]
              sm:text-4xl
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
              text-base
              leading-7
              md:text-lg
              md:leading-8
              text-[#6B594B]
            "
          >
            Every creation is handcrafted with love,
            creativity and attention to detail, making
            every piece truly one of a kind.
          </p>

        </div>

        {/* ================= Hero Card ================= */}

        <div
          className="
            overflow-hidden
            rounded-[26px]
            md:rounded-[40px]
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
              gap-0
              lg:gap-12
              lg:grid-cols-2
            "
          >
            {/* ================= LEFT SIDE ================= */}

<div className="relative p-4 sm:p-8">

  {/* Warm Glow */}

  <div
    className="
      absolute
      left-10
      top-1/2
      h-64
      w-64
      sm:h-[420px]
      sm:w-[420px]
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
      h-[340px]
      grid-cols-2
      grid-rows-[1.8fr_1fr]
      gap-3
      sm:h-[460px]
      sm:gap-5
      lg:h-[620px]
    "
  >

    {/* Main Image */}

    <div
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
        width={377}
        height={319}
        loading="lazy"
        decoding="async"
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </div>

    {/* Image 2 */}

    <div
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
        width={179}
        height={151}
        loading="lazy"
        decoding="async"
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </div>

    {/* Image 3 */}

    <div
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
        width={248}
        height={248}
        loading="lazy"
        decoding="async"
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

    </div>

  </div>

  {/* Floating Badge */}

  <div


    className="
      absolute
      right-3
      top-8
      max-w-[160px]

      rounded-[20px]
      sm:-right-3
      sm:top-16
      sm:max-w-none
      sm:rounded-[26px]

      border
      border-[#EAD9BA]

      bg-[#FFFDF8]/95

      px-4
      py-3
      sm:px-6
      sm:py-5

      shadow-[0_20px_45px_rgba(0,0,0,.15)]

      backdrop-blur-md
    "
  >

    <p
      className="
        text-[10px]
        uppercase
        tracking-[2px]
        sm:text-xs
        sm:tracking-[4px]
        text-[#A46A17]
      "
    >
      CraftHabitat
    </p>

    <h3
      className="
        mt-2
        text-xl
        font-black
        text-[#3A2618]
        sm:text-3xl
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

  </div>

</div>

{/* ================= RIGHT SIDE ================= */}

<div className="px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-14">

  <span
    className="
      rounded-full
      bg-[#F8E7BF]
      px-5
      py-2
      text-xs
      font-semibold
      uppercase
      tracking-[2px]
      text-[#A46C18]
      sm:text-sm
      sm:tracking-[4px]
    "
  >
    Our Promise
  </span>

  <h3
    className="
      mt-8
      text-3xl
      font-black
      leading-tight
      text-[#3A2618]
      sm:text-4xl
      md:text-5xl
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
      text-base
      leading-7
      text-[#6B594B]
      md:text-lg
      md:leading-9
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
            h-10
            w-10
            shrink-0
            items-center
            sm:h-11
            sm:w-11
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
            text-base
            font-medium
            text-[#4C3828]
            sm:text-lg
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
    px-6
    py-3
    sm:px-8
    sm:py-4
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

        </div>

        {/* ================= Trust Statistics ================= */}

        <div
          className="mt-12 md:mt-20"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[20px]
                    border
                    border-[#E9DCC8]
                    bg-white/90
                    p-4
                    sm:rounded-[28px]
                    sm:p-8
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
                      mb-4
                      flex
                      h-11
                      w-11
                      sm:mb-6
                      sm:h-14
                      sm:w-14
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
                      text-2xl
                      font-black
                      sm:text-4xl
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

                </div>

              );

            })}

          </div>

          {/* Quote */}

          <div
            className="mx-auto mt-12 max-w-4xl text-center md:mt-20"
          >

            <p
              className="
                text-xl
                italic
                leading-relaxed
                md:text-3xl
                text-[#5C4633]
              "
            >
              “Every handcrafted piece begins as an idea,
              is shaped with passion, and becomes a memory
              you'll cherish forever.”
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
