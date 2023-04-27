import "./App.css";
import { Route, Routes } from "react-router-dom";
import Country from "./container/Country";
import Home from "./container/Home";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div
      className={`min-h-screen flex flex-col ${
        dark ? "bg-custom--very-dark-blue-bg" : "bg-custom-white"
      }`}
    >
      <Routes>
        <Route
          path="/*"
          element={<Home dark={dark} setDark={setDark} />}
        ></Route>
        <Route
          path="/country/:countryId"
          element={<Country dark={dark} setDark={setDark} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
