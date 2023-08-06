import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FormBuilder from "./components/FormBuilder";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Home /> */}
    </>
  );
}

export default App;
