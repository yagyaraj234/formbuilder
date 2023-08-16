import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import Layout from "../Layout/Layout";
import SignupForm from "./SignupForm";

const Signup = () => {
  const [formError, setFormError] = useState({});
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      // setFormError(validateForm(user));
      // return;
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);

      // console.log("Signup Success", response.data);
      toast.success("Signup succesfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length >= 10 &&
      user.username.length >= 5 &&
      user.password.length >= 5
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const validateForm = (user) => {
    const error = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!user.name) {
      error.name = "Fullname  required";
    }
    if (!user.email) {
      error.email = "Email is required";
    } else if (!regex.test(user.email)) {
      error.email = "Please enter a valid email";
    }
    if (!user.password) {
      error.password = "Min 8 character required";
    }

    return error;
  };
  useEffect(() => {}, []);
  return (
    <Layout>
      <SignupForm />

      {/* <div className="flex flex-row h-[100vh] justify-center items-center">
        <div className="flex flex-col   ">
          <Toaster />
          <h1 className="text-3xl text-center font-bold my-5  ">Signup Here</h1>
          <label htmlFor="username" className="text-lg font-semibold">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={user.username}
            placeholder="Username"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="p-2 text-black font-semibold outline-none rounded-lg mb-5 border-2"
          />
          {formError.name}
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="p-2 text-black font-semibold outline-none rounded-lg mb-5 border-2"
          />
          {setFormError.email}
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="p-2 text-black font-semibold outline-none rounded-lg mb-5 border-2"
          />
          {formError.password}

          <button
            disabled={buttonDisabled}
            className={`bg-primary text-white font-semibold  shadow-sm rounded-lg p-2  transition ${
              buttonDisabled ? "cursor-not-allowed " : "hover:cursor-pointer"
            }`}
            onClick={onSignup}
          >
            {loading ? "Submitting..." : "Signup"}
          </button>
          <Link
            to="/login"
            className="border-2 my-2 rounded-lg p-2   text-black text-bold  hover:border-black delay-75 transition"
          >
            Already Have Account? Login Here
          </Link>
        </div>
      </div> */}
    </Layout>
  );
};

export default Signup;
