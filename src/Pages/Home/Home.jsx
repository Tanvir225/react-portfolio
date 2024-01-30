import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import tanvir_desktop from "../../assets/tanvir-desktop.png";
import tanvir_mobile from "../../assets/tanvir-mobile.png";

import { TypeAnimation } from "react-type-animation";
import SocialLink from "../../Components/SocialLink/SocialLink";
import { Helmet } from "react-helmet-async";

const Home = () => {
  //aos
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="text-white flex flex-col justify-center items-center gap-5 md:flex-row px-8 mt-5"
    >
      <Helmet>
        <title>Abdur Rahman</title>
      </Helmet>
      <div className="hidden md:w-full md:flex">
        <img
          src={tanvir_desktop}
          className="w-full h-full object-cover"
          alt="Abdur Rahman Image"
        />
      </div>
      <div className="md:hidden">
        <img
          src={tanvir_mobile}
          className="w-full h-full object-cover"
          alt="Abdur Rahman Image"
        />
      </div>

      <div>
        <h2 className="text-5xl text-[#ffb400] font-extrabold ">
          I'M Abdur Rahman.
        </h2>

        <TypeAnimation
          sequence={["Web Developer", 1200, "Web Designer", 2000]}
          speed={50}
          style={{ fontWeight: "bold", fontSize: "50px" }}
          repeat={Infinity}
        />

        <p className="text-justify text-lg md:w-[80%]">
          I'm a{" "}
          <span className="text-[#ffb400] font-semibold ">
            web developer & front‑end designer
          </span>{" "}
          focused on crafting clean & user‑friendly experiences, I am passionate
          about building excellent software that improves the lives of those
          around me.
        </p>

        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Home;
