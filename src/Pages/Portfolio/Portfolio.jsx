import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Heading from "../../Components/Heading/Heading";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Portfolio_card from "../../Components/Portfolio_card/Portfolio_card";
import { Helmet } from "react-helmet-async";

const Portfolio = () => {
  //state
  const [projects, setProjects] = useState([]);
  const [keyWord, setKeyWord] = useState("Tailwind-Css");
  const [fileterProject, setFilterProject] = useState(projects);

  //aos
  useEffect(() => {
    Aos.init({
      duration: 600, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animation
      once: true, // Whether animation should only happen once
    });

    //projects
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //dummy projects categories
  const tabs = ["Tailwind-Css", "JavaScript", "React", "Full Website"];

  //handleTabChange
  const handleTabChange = (index) => {
    setKeyWord(tabs[index]);
  };

  useEffect(() => {
    if (keyWord) {
      const filter = projects?.filter((project) => project.keyword === keyWord);
      setFilterProject(filter);
    }
  }, [keyWord, projects]);

  return (
    <div data-aos="fade-down" className=" text-white  bg-opacity-95 px-8">
      <Helmet>
        <title>Abdur Rahman | Portfolio</title>
      </Helmet>
      <Heading heading="Works" spanText="Portfolio"></Heading>

      <Tabs
        onSelect={handleTabChange}
        selectedIndex={tabs?.findIndex((tab) => tab === keyWord)}
      >
        <TabList
          className={"text-center flex justify-center items-center gap-2"}
        >
          {tabs?.map((tab, index) => (
            <Tab
              className={`btn text-black bg-blue-100 ${
                keyWord === tab ? "bg-yellow-600" : ""
              }`}
              key={index}
              value={tab}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {fileterProject &&
            fileterProject?.map((project) => (
              <TabList key={project.id}>
                <Portfolio_card element={project}></Portfolio_card>
              </TabList>
            ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Portfolio;
