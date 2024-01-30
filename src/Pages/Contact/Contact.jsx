import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Heading from "../../Components/Heading/Heading";
import { AiOutlineMessage, AiOutlinePhone } from "react-icons/ai";
import SocialLink from "../../Components/SocialLink/SocialLink";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  //sending email by email-js
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formValue = e.target;
    console.log(formValue);
    emailjs
      .sendForm(
        "service_wwhzxgl",
        "template_owm8e6a",
        form.current,
        "3tEzzEzGWAG3q0k3X"
      )
      .then(
        (result) => {
          console.log(result.text);
          formValue.reset();
          toast.success("message send successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //aos
  useEffect(() => {
    Aos.init({
      duration: 600, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should only happen once
    });
  }, []);

  return (
    <div data-aos="fade-down" className="bg-opacity-95 text-white">
      <Helmet>
        <title>Abdur Rahman | Contact</title>
      </Helmet>

      <Heading subHeading="Get In" spanText="Touch" heading="Contact"></Heading>
      <section className="grid grid-cols-12 gap-10 px-8">
        <div className="col-span-full lg:col-span-4 ">
          <h2 className="text-3xl font-extrabold uppercase">Don't be shy</h2>
          <hr className="" />
          <p className="leading-6 ">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex items-center gap-3">
            <AiOutlineMessage className="text-4xl text-[#ffb400]"></AiOutlineMessage>
            <div>
              <h2 className="text-xl font-extrabold uppercase text-gray-500">
                Mail me
              </h2>
              <p className="font-semibold -mt-2">tanvirrehman200@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlinePhone className="text-4xl text-[#ffb400]"></AiOutlinePhone>
            <div>
              <h2 className="text-xl font-extrabold uppercase text-gray-500">
                Call me
              </h2>
              <p className="font-semibold -mt-2">+880 1782407546</p>
            </div>
          </div>

          <SocialLink></SocialLink>
        </div>

        <div className="col-span-full lg:col-span-8">
          <form
            className="card-body grid  gap-8 lg:grid-cols-2"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="form-control">
              <input
                type="text"
                name="from_name"
                placeholder="your name"
                className="input input-bordered text-[#ffb400] rounded-full"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="from_email"
                placeholder="your email"
                className="input input-bordered text-[#ffb400] rounded-full"
                required
              />
            </div>
            <div className="form-control lg:col-span-2">
              <input
                type="text"
                placeholder="your subject"
                className="input input-bordered text-[#ffb400] rounded-full"
                required
              />
            </div>

            <textarea
              className="textarea textarea-bordered text-[#ffb400] lg:col-span-2"
              rows={4}
              name="message"
              placeholder="Your Message"
            ></textarea>

            <div className="form-control mt-6 lg:col-span-2">
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
