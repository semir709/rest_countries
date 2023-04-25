import "./App.css";
import { Route, Routes } from "react-router-dom";
import Country from "./components/Country";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />}></Route>
        <Route path="/country" element={<Country />}></Route>
      </Routes>
    </>
  );
}

export default App;
