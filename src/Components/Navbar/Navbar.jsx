import {AiOutlineHome,AiOutlineUser,AiOutlineBarChart ,AiOutlineMessage,AiOutlineBgColors   } from "react-icons/ai"
import { NavLink } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    return (
        
            <div className=" flex flex-row md:flex-col items-center justify-center text-3xl gap-10 bg-gray-800 md:bg-transparent px-5 py-5 rounded-lg md:rounded-none">
                <NavLink to={"/"}><AiOutlineHome></AiOutlineHome></NavLink>
                <NavLink to={"/about"}><AiOutlineUser></AiOutlineUser></NavLink>
                <NavLink to={"/portfolio"}><AiOutlineBarChart ></AiOutlineBarChart ></NavLink>
                <NavLink to={"/contact"}><AiOutlineMessage></AiOutlineMessage></NavLink>
                <NavLink to={"/blog"}><AiOutlineBgColors ></AiOutlineBgColors ></NavLink>
            </div>
    );
};

export default Navbar;