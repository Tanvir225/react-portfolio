import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="card card-compact bg-gray-900 shadow-xl">
      <figure className="">
        <img
          src={blog.image}
          alt="Shoes"
          className="w-full lg:h-[30vh] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title px-5 -mt-2 text-[#ffb400]">{blog.name}!</h2>
        <p className="px-5 -mt-2">{blog.description.slice(0,60)}...</p>
        <div className="-mt-5">
          <Link to={`/blog/${blog.id}`} className="btn btn-outline text-[#ffb400] ">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
