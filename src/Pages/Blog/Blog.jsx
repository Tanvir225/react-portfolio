import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Heading from "../../Components/Heading/Heading";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {

  //state
  const [blogs,setBlogs] = useState([])

  //aos
  useEffect(() => {
    Aos.init({
      duration: 600, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should only happen once
    });

    fetch("/blogs.json")
    .then(response=> response.json())
    .then((data) => setBlogs(data))
  }, []);



  return (
    <div data-aos="fade-down" className="bg-opacity-95 text-white px-8">
      <Helmet>
        <title>Abdur Rahman | Blog</title>
      </Helmet>
      
      <Heading subHeading="My" spanText="Blogs" heading="Posts"></Heading>

      <div className="grid gap-5 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          blogs?.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
        }
      </div>

    </div>
  );
};

export default Blog;
