
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div className="text-3xl space-x-10 my-5">
      <Link>
        <AiOutlineLinkedin></AiOutlineLinkedin>
      </Link>
      <Link>
        <AiOutlineGithub></AiOutlineGithub>
      </Link>
      <Link>
        <SiFiverr></SiFiverr>
      </Link>
      <Link>
        <AiOutlineFacebook></AiOutlineFacebook>
      </Link>
    </div>
  );
};

export default SocialLink;
