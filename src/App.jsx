import Booking from "./components/booking";
import Ticket from "./components/ticket";
import Counter from "./components/counter";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [ticketDetails, setTicketDetails] = useState({});

  function handleTicketBooking(journeyData) {
    setTicketDetails(journeyData);
    console.log(journeyData);
  }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Booking handleTicketBooking={handleTicketBooking} />} />
          <Route path="/ticket" element={<Ticket ticketDetails={ticketDetails} />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
