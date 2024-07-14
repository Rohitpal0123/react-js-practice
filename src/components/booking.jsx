import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const Booking = ({ handleTicketBooking }) => {
  const navigate = useNavigate();

  const [stations, setStations] = useState([
    "Palghar",
    "Virar",
    "Nallasopara",
    "Vasai",
    "Bhayandar",
    "Miraroad",
    "Dahisar",
    "Borivali",
  ]);

  const [fromStation, setFromStation] = useState(stations[0]);
  const [toStation, setToStation] = useState(stations[0]);
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
        className="bg-gray-100 border-black shadow-xl align-top text-xl flex pt-14 pb-5 px-14
     rounded-2xl"
      >
        <div className="flex ">
          <form
            onSubmit={handleBooking}
            className="flex min-w-72 gap-6 mx-auto flex-col"
          >
            <label className="flex text-md flex-col">
              From
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={fromStation}
                onChange={fromStationSelection}
              >
                {stations.map((station, index) => (
                  <option key={index} value={station}>
                    {station}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex text-md flex-col">
              To
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={toStation}
                onChange={toStationSelection}
              >
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
