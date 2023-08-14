import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FormBuilder from "./components/FormBuilder";
import Contact from "./components/Contact";
import Preview from "./components/Preview";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* <Home /> */}
    </>
  );
}

export default App;
