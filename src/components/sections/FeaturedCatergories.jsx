import { Link } from "react-router-dom";
import { ArrowForwardIcon } from "../ui/Icons";

import paperBg from "../../assets/categories/paper-bg.webp";

import i1 from "../../assets/categories/i1.webp";
import i2 from "../../assets/categories/i2.webp";
import i3 from "../../assets/categories/i3.webp";
import i4 from "../../assets/categories/i4.webp";
import i5 from "../../assets/categories/i5.webp";
import i6 from "../../assets/categories/i6.webp";
import i7 from "../../assets/categories/i7.webp";
import i8 from "../../assets/categories/i8.webp";

const categories = [
  {
    title: "Nameplates",
    description: "Personalized Wooden & Resin Nameplates",
    count: "12+ Designs",
    image: i1,
  },
  {
    title: "Wall Decor",
    description: "Wall Hangings, Resin Art & Clay Decor",
    count: "18+ Designs",
    image: i2,
  },
  {
    title: "Personalized Gifts",
    description: "Customized Gifts For Every Occasion",
    count: "25+ Designs",
    image: i3,
  },
  {
    title: "Accessories",
    description: "Keychains, Magnets & Bookmarks",
    count: "15+ Designs",
    image: i4,
  },
  {
    title: "Festival Collection",
    description: "Diwali, Christmas & Festival Specials",
    count: "20+ Designs",
    image: i5,
  },
  {
    title: "Home Decor",
    description: "Elegant Handmade Home Decoration",
    count: "10+ Designs",
    image: i6,
  },
  {
    title: "Bulk Orders",
    description: "Corporate Gifts & Return Favours",
    count: "Custom Orders",
    image: i7,
  },
  {
    title: "Customization",
    description: "Bring Your Ideas To Life",
    count: "Made For You",
    image: i8,
  },
];

const firstRow = categories.slice(0, 4);
const secondRow = categories.slice(4, 8);

const CategoryCard = ({ item }) => {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(item.title)}`}
      className="
      group
      block
      relative
      z-20
      overflow-hidden
      rounded-[30px]
      border
      border-[#EFE2D4]
      bg-[#FFFDF9]
      shadow-[0_12px_35px_rgba(0,0,0,.08)]
      transition-all
      duration-500
      hover:-translate-y-4
      hover:border-[#D7A33B]
      hover:shadow-[0_25px_55px_rgba(0,0,0,.18)]
      "
    >
      <div className="p-5">

        <div
          className="
          overflow-hidden
          rounded-[24px]
          shadow-lg
          "
        >
          <img
            src={item.image}
            alt={item.title}
            width={400}
            height={340}
            loading="lazy"
            decoding="async"
            className="
            h-52
            sm:h-72
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
            "
          />
        </div>

      </div>

      <div className="px-5 pb-6 sm:px-6 sm:pb-7">

        <h3
          className="
          text-[22px]
          sm:text-[26px]
          font-bold
          text-[#3A2618]
          "
        >
          {item.title}
        </h3>

        <p
          className="
          mt-3
          min-h-[60px]
          text-[15px]
          leading-7
          text-[#6F5948]
          "
        >
          {item.description}
        </p>

        <div
          className="
          mt-6
          flex
          items-center
          justify-between
          "
        >
          <span
            className="
            rounded-full
            bg-[#F7E8C4]
            px-4
            py-2
            text-sm
            font-semibold
            text-[#94641A]
            "
          >
            {item.count}
          </span>

          <span
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#D8A23C]
            text-white
            transition-all
            duration-300
            group-hover:translate-x-1
            group-hover:scale-110
            "
          >
            <ArrowForwardIcon size={18} />
          </span>

        </div>

      </div>

    </Link>
  );
};


const FeaturedCategories = () => {
      return (
    <section
      id="categories"
      className="relative overflow-hidden py-16 md:py-28"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "650px",
        backgroundColor: "#FFF9F3",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <div className="mb-12 text-center md:mb-20">

          <h2
            className="
              text-3xl
              font-bold
              text-[#3A2618]
              md:text-5xl
            "
          >
            Explore Our Creations
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              md:text-lg
              leading-8
              text-[#715C4A]
            "
          >
            Discover handcrafted treasures made with love for every
            celebration, every memory and every corner of your home.
          </p>

        </div>

        {/* ================= FIRST ROW ================= */}

        <div className="relative">

          <div
            className="
              relative
              z-20
              mb-0
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              md:gap-8
              xl:mb-[-45px]
              xl:grid-cols-4
            "
          >
            {firstRow.map((item) => (
              <CategoryCard
                key={item.title}
                item={item}
              />
            ))}
          </div>


        </div>

        {/* ================= SECOND ROW ================= */}

        <div className="relative mt-8 md:mt-28">

          <div
            className="
              relative
              z-20
              mb-0
              grid
              grid-cols-1
              gap-6
              md:grid-cols-2
              md:gap-8
              xl:mb-[-45px]
              xl:grid-cols-4
            "
          >
            {secondRow.map((item) => (
              <CategoryCard
                key={item.title}
                item={item}
              />
            ))}
          </div>


        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;