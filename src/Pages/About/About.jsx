import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Heading from "../../Components/Heading/Heading";
import Introduction from "./Introduction/Introduction";
import Skills from "./Skills/Skills";
import Edu_Exp from "./Edu_Exp/Edu_Exp";
import { Helmet } from "react-helmet-async";

const About = () => {
  //aos
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <div data-aos="fade-right" className=" text-white px-8  space-y-16">
      <Helmet>
        <title>Abdur Rahman | About</title>
      </Helmet>

      <Heading heading="Resume" subHeading="About" spanText="Me"></Heading>
      <Introduction></Introduction>
      <hr className="w-1/2" />
      <Skills></Skills>
      <hr className="w-1/2" />
      <Edu_Exp></Edu_Exp>
    </div>
  );
};

export default About;
