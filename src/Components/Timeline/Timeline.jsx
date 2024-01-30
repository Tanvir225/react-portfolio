import React from "react";
import { AiOutlineAudit } from "react-icons/ai";

const Timeline = ({ element }) => {
  console.log(element);
  return (
    <ul className="timeline  timeline-vertical">
      <li className="mb-10">
        <div className="timeline-middle timeline-box text-white ">
          <AiOutlineAudit className="text-3xl text-white rounded-full p-2 bg-[#ffb400]"></AiOutlineAudit>
          <p className="bg-gray-500 rounded-lg p-2 w-32 text-center">
            {element.period}
          </p>
          <h2 className="text-lg">{element.title}</h2>
          <h2 className="text-lg text-[#ffb400] font-extrabold">
            {element.company}
          </h2>
          <p className="">{element.details}</p>
        </div>
        <hr className="bg-white timeline-start" />
      </li>
    </ul>
  );
};

export default Timeline;
