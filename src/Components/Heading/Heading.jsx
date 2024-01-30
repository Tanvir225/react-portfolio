

const Heading = ({ heading, subHeading, spanText }) => {
  return (
    <div className="relative">
      <h1 className="text-8xl opacity-30 md:text-9xl text-gray-400 text-center md:opacity-15 uppercase font-extrabold">
        {heading}
      </h1>
      <h3 className="text-6xl text-white lg:text-7xl font-extrabold absolute -top-2 left-[15%] md:left-[35%] uppercase">
        {subHeading} <span className="text-[#ffb400]">{spanText}</span>
      </h3>
    </div>
  );
};


export default Heading;
