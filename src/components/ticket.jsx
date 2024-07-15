import PropTypes from "prop-types";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Ticket = ({ ticketDetails }) => {
  const { fromStation, toStation, journeyType, ticketNumber } = ticketDetails;
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col ">
        <svg
          className="mx-auto "
          width="148px"
          height="148px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
              fill="#01c121"
            ></path>{" "}
          </g>
        </svg>

        <h1 className="mx-auto text-lg font-bold">
          Ticket Booked Successfully !
        </h1>
        <div className="flex flex-col bg-slate-200 my-3  px-11 pt-14 pb-4 shadow-md">
          <div className="flex flex-row justify-center items-center text-2xl">
            <div className="flex pt-4 pr-4">{fromStation}</div>

            <MdOutlineDoubleArrow className="mt-4"/>

            <div className="flex pt-4  pl-4">{toStation}</div>
          </div>
          <div className="text-md mx-auto ">{journeyType + " Journey"}</div>
          <div className="text-md mx-auto pt-16 mt-auto">
            {"Ticket Number: " + ticketNumber}
          </div>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticketDetails: PropTypes.object.isRequired,
};

export default Ticket;
