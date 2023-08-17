import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FormBuilder from "./components/FormBuilder";
import Contact from "./components/Contact";
import Preview from "./components/Preview";
import Login from "./components/pages/Login";
import SignupForm from "./components/pages/SignupForm";
import Profile from "./components/pages/Profile";
import { useSelector } from "react-redux";

function App() {
  const userLoggedIn = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview" element={<Preview />} />

        <Route path="/profile" element={<Profile />} />
      </Routes>
      {userLoggedIn ? (
        ""
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      )}

      {/* <Home /> */}
    </>
  );
}

export default App;
