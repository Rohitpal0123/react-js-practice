import Booking from "./components/booking";
import Ticket from "./components/ticket";
import Counter from "./components/counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
