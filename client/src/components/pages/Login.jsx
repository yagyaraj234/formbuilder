import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Layout from "../Layout/Layout";
import TextField from "./TextField";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/auth";
const initialValue = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const baseURl = "https://formbuilder-back.vercel.app";
  const url = `${baseURl}/login`;

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  const dispatch = useDispatch();
  // dispatch(setAuth());
  const handleAuthenticationToggle = () => {
    dispatch(setAuth());
  };

  

  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });

  
  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(url, values);
      toast.success(response.data.message);
      handleAuthenticationToggle();
      navigate("/");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };
  return (
    <Layout>
      <Toaster />
      <Formik
        initialValues={initialValue}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <div className="flex flex-col  mt-10 justify-center items-center">
            <h1 className="text-3xl text-center font-bold my-5  ">
              Login Here
            </h1>
            <Form>
              <TextField label="Email" type="text" name="email" />
              <TextField label="Password" type="password" name="password" />

              <div className="flex flex-col my-5 ">
                <button
                  type="submit"
                  className={`bg-primary  shadow-sm rounded-lg p-2 text-white  transition `}
                >
                  Login
                </button>
                <Link
                  to="/signup"
                  type="submit"
                  className="border-2 my-2 rounded-lg p-2  text-md text-black text-bold  hover:border-black delay-75 transition"
                >
                  Don't Have Account? Signup Here
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </Layout>
  );
};

export default LoginPage;
