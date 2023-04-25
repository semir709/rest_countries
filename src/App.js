import "./App.css";
import { Route, Routes } from "react-router-dom";
import Country from "./container/Country";
import Home from "./container/Home";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<Home dark={dark} setDark={setDark} />}
        ></Route>
        <Route path="/country" element={<Country />}></Route>
      </Routes>
    </>
  );
}

export default App;
