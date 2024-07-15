import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaPlaneDeparture, FaPlaneArrival, FaTrain } from "react-icons/fa";

const Booking = ({ handleTicketBooking }) => {
  const navigate = useNavigate();
    const [stations, setStations] = useState([]);

  useEffect(() => {
    
      const stations = ["Palghar",
      "Virar",
      "Nallasopara",
      "Vasai",
      "Bhayandar",
      "Miraroad",
      "Dahisar",
      "Borivali",
    ];

    setStations(stations)
  },[])

  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [journeyType, setJourneyType] = useState("One way");

  function fromStationSelection(e) {
    setFromStation(e.target.value);
    console.log(e.target.value);
  }
  function toStationSelection(e) {
    setToStation(e.target.value);
    console.log(e.target.value);
  }
  function journeyTypeSelection(e) {
    setJourneyType(e.target.value);
    console.log(e.target.value);
  }

  function handleBooking(e) {
    e.preventDefault();
    const min = 10000000;
    const max = 99999999;

    let ticketNumber = Math.floor(Math.random() * (max - min) + min);
    handleTicketBooking({ fromStation, toStation, journeyType, ticketNumber });
    navigate("/ticket");
  }
  return (
    <>
      <div
        className="bg-gray-100 border-black shadow-xl align-top text-xl flex flex-col items-center pt-14 pb-5 px-14 space-y-8
     rounded-2xl"
      >
        <div className="text-4xl font-bold text-orange-500 flex space-x-3">
          <FaTrain />
          <h1>Ticket Booking</h1>
        </div>
        <div className="flex ">
          <form
            onSubmit={handleBooking}
            className="flex min-w-72 gap-6 mx-auto flex-col"
          >
            <label className="flex text-md flex-col">
              <FaPlaneDeparture className="text-orange-500" />
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={fromStation}
                onChange={fromStationSelection}
              >
                <option value="">Select Station</option>
                {stations.map((station, index) => (
                  <option key={index} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex text-md flex-col">
              <FaPlaneArrival className="text-orange-500"/>
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={toStation}
                onChange={toStationSelection}
              >
                <option value="">Select Station</option>
                {stations.map((station, index) => (
                  <option key={index} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </label>

            <p className="flex flex-col text-sm">
              Journey Type:
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="One Way"
                  onChange={journeyTypeSelection}
                  className="mr-2 mt-2"
                />
                One Way
              </label>
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="Return"
                  checked={journeyType === "Return"}
                  onChange={journeyTypeSelection}
                  className="mr-2"
                />
                Return
              </label>
            </p>

            <button
              type="submit"
              className="border-black rounded-lg px-3 py-1 mt-12 align-bottom bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg text-orange-700"
            >
              Book Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

Booking.propTypes = {
  handleTicketBooking: PropTypes.func.isRequired,
};
export default Booking;
