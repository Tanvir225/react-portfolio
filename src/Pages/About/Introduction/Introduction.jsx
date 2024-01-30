import { useEffect, useState } from "react";

const Introduction = () => {
  //state
  const [introduction, setIntroduction] = useState([]);

  //useEffect
  useEffect(() => {
    fetch("/introduction.json")
      .then((response) => response.json())
      .then((data) => setIntroduction(data));
  }, []);

  console.log(introduction.length);
  return (
    <section className=" py-5">
      <h2 className="text-4xl font-extrabold uppercase">Personal Info</h2>
      {introduction.length > 0 &&
        introduction.map((intro) => (
          <div key={intro._id} className="flex flex-col lg:flex-row gap-5  lg:gap-10 items-center">
            <div className="flex flex-wrap gap-5 lg:gap-7">
              <div>
                <p className="text-lg">First Name : {intro.first_name}</p>
                <p className="text-lg md:hidden">Last Name : {intro.last_name}</p>
                <p className="text-lg">Age : {intro.age} Years</p>
                <p className="text-lg">
                  Freelance :{" "}
                  <span className="text-[#ffb400]">{intro.freelance}</span>
                </p>
                <p className="text-lg">Phone : {intro.phone}</p>
              </div>
              <div>
                <p className="text-lg hidden md:block">Last Name : {intro.last_name}</p>
                <p className="text-lg">Nationality : {intro.nationality}</p>
                <p className="text-lg">
                  Address :{" "}
                  <span className="text-[#ffb400]">{intro.address}</span>
                </p>
                <p className="text-lg ">email : {intro.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div
                className="text-center  rounded-lg h-36 px-5 py-5"
                style={{ border: "1px solid gray" }}
              >
                <p className="font-semibold">YEARS OF EXPERIENCE</p>
                <div className="flex gap-2 justify-center -mt-10">
                  <p className="text-6xl font-semibold text-[rgb(255,180,0)]">
                    {intro.experience_period}
                  </p>
                  <p className="text-4xl font-semibold text-[#ffb400]">+</p>
                </div>
              </div>

              <div
                className="text-center rounded-lg h-36 px-5 py-5"
                style={{ border: "1px solid gray" }}
              >
                <p className="font-semibold">Completed Projects</p>
                <div className="flex gap-2 justify-center -mt-10">
                  <p className="text-6xl font-semibold text-[rgb(255,180,0)]">
                    {intro.completed_project}
                  </p>
                  <p className="text-4xl font-semibold text-[#ffb400]">+</p>
                </div>
              </div>

              <div
                className="text-center rounded-lg h-36 px-5 py-5"
                style={{ border: "1px solid gray" }}
              >
                <p className="font-semibold">Running Projects</p>
                <div className="flex gap-2 justify-center -mt-10">
                  <p className="text-6xl font-semibold text-[rgb(255,180,0)]">
                    {intro.running_project}
                  </p>
                  <p className="text-4xl font-semibold text-[#ffb400]">+</p>
                </div>
              </div>

              <div
                className="text-center rounded-lg h-36 px-5 py-5"
                style={{ border: "1px solid gray" }}
              >
                <p className="font-semibold">Happy Customers</p>
                <div className="flex gap-2 justify-center -mt-10">
                  <p className="text-6xl font-semibold text-[rgb(255,180,0)]">
                    {intro.customer}
                  </p>
                  <p className="text-4xl font-semibold text-[#ffb400]">+</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default Introduction;
