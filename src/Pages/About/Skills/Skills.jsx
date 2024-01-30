import { useEffect, useState } from "react";

const Skills = () => {
  //state
  const [skills, setSkills] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data));
  }, []);

  return (
    <div className="space-y-16">
      <h1 className="text-4xl text-center font-extrabold uppercase ">My Skills</h1>
      <div className=" flex flex-wrap justify-center  items-center gap-12">
        {skills &&
          skills?.map((skill) => (
            <div key={skill._id}>
              <div
                className="radial-progress text-[#ffb400]"
                style={{ "--value": skill.progress }}
                role="progressbar"
              >
                <span className="text-white font-semibold">
                  {skill.progress}
                </span>
              </div>
              <p className="text-lg text-center">{skill.skill}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
