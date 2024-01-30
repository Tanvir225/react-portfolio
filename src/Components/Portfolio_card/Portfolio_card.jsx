import { Link } from "react-router-dom";

const Portfolio_card = ({ element }) => {
  let modalId = `my_modal_${element.id}`;
  //console.log(element);
  return (
    <div className="relative  overflow-hidden ">
      <img
        src={element.image}
        className="w-full h-[30vh] object-cover rounded-lg"
        alt={`${element.name}`}
      />

      <div className="absolute rounded-lg bottom-0 flex flex-col justify-center items-center left-0 right-0 top-0 h-full w-full overflow-hidden bg-indigo-700 opacity-0 transition duration-300 ease-in-out hover:opacity-85">
        <h2 className="text-2xl font-extrabold">{element.name}</h2>
        <button
          className="btn btn-outline"
          onClick={() => document.getElementById(modalId).showModal()}
        >
          View Details
        </button>
      </div>

      <dialog
        id={modalId}
        className="border-none  shadow-xl rounded-lg w-fit h-fit bg-gray-800  text-white overflow-hidden"
      >
        <div className="modal-box">
          <div className="">
            <h2 className="text-lg font-semibold ">
              ☆ Name : <span className="text-[#ffb400]">{element.name}</span>
            </h2>
            <p className="">🛠 Language : {element.Language}</p>
            <p className="">
              👁‍🗨 Preview :{" "}
              <Link to={element.link} className="text-[#ffb400]">
                {element.link}
              </Link>
            </p>
            <p className="leading-6">📣 Description : {element.description}</p>
            <hr className="my-5"/>
            <img src={element.image} className="w-full rounded-lg h-[35vh] object-cover" alt="" />
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Portfolio_card;
