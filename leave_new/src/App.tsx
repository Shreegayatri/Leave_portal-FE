import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import RequestLeave from "./components/RequestLeave/RequestLeave";
import "../global.css";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/RequestLeave" element={<RequestLeave />} />
          </>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
