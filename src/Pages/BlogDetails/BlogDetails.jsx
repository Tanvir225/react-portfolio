import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";


const BlogDetails = () => {

    //get id from params
    const {id} = useParams()

    //loader data
    const blogs = useLoaderData()

    //find single blog from blogs by id
    const blog = blogs.find(b => b.id === parseInt(id))
    console.log(blog);
    return (
        <div>
            <Heading subHeading="Blog" spanText="Details" heading="Details"></Heading>

            <div className="px-8">
                <img src={blog.image} className="w-full rounded-lg lg:h-[80vh] object-cover" alt={`${blog.name} image`} />
                <h1 className="text-4xl font-extrabold text-[#ffb400]">{blog.name}</h1>
                <hr />
                <p className="text-gray-400 text-justify text-xl">{blog.description}</p>
            </div>

        </div>
    );
};

export default BlogDetails;