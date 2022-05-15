import "./App.css";
import { Home } from "./Home";
import { Calendar } from "./Calendar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UseTransition } from "./useHooks/UseTransition";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
          {/* <Route path="usetransition" element={<UseTransition />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
