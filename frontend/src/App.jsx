import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Helmet>
          <title>Vite App</title>
        </Helmet>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default App;
