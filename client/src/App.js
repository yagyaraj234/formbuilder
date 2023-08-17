import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import FormBuilder from "./components/FormBuilder";
import Contact from "./components/Contact";
import Preview from "./components/Preview";
import Login from "./components/pages/Login";
import SignupForm from "./components/pages/SignupForm";
import Profile from "./components/pages/Profile";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isAuth = useSelector((state) => state.auth.user);

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/form-builder" element={<FormBuilder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/preview" element={<Preview />} />

        <Route path="/profile" element={<Profile />} />
        <Route element={<ProtectedRoute isAuth={isAuth} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
