import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Booking = () => {
  const navigate = useNavigate();

  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [journeyType, setJourneyType] = useState("One way");

  function fromStationSelection(e) {
    console.log(e.target.value);
    setFromStation(e.target.value);
  }
  function toStationSelection(e) {
    console.log(e.target.value);
    setToStation(e.target.value);
  }

  function journeyTypeSelection(e) {
    setJourneyType(e.target.value);
    console.log(e.target.value);
  }
  const handleBooking = () => {
    navigate("/ticket");
  };
  return (
    <>
      <div
        className="bg-gray-100 border-black shadow-xl align-top text-xl flex pt-14 pb-5 px-14
     rounded-2xl"
      >
        <div className="flex ">
          <form className="flex min-w-72 gap-6 mx-auto flex-col">
            <label className="flex text-md flex-col">
              From
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={fromStation}
                onChange={fromStationSelection}
              >
                <option value="Start station">Start station</option>
                <option value="Virar">Virar</option>
                <option value="Nallasopara">Nallasopara</option>
                <option value="Vasai">Vasai</option>
                <option value="Naigaon">Naigaon</option>
                <option value="Bhayandar">Bhayandar</option>
                <option value="MiraRoad">MiraRoad</option>
                <option value="Dahisar">Dahisar</option>
                <option value="Borivali">Borivali</option>
              </select>
            </label>

            <label className="flex text-md flex-col">
              To
              <select
                className="border-2 mt-2 py-4 px-1 pr-12 border-orange-500 rounded-md text-sm"
                value={toStation}
                onChange={toStationSelection}
              >
                <option value="End station">End station</option>
                <option value="Nallasopara">Nallasopara</option>
                <option value="Vasai">Vasai</option>
                <option value="Naigaon">Naigaon</option>
                <option value="Bhayandar">Bhayandar</option>
                <option value="MiraRoad">MiraRoad</option>
                <option value="Dahisar">Dahisar</option>
                <option value="Borivali">Borivali</option>
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
              onClick={handleBooking}
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

export default Booking;
