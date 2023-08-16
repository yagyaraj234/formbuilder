import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Layout from "../Layout/Layout";
import TextField from "./TextField";

const initialValue = {
  email: "",
  password: "",
};
const LoginPage = () => {
  // const onLogin = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.post("/api/users/login", user);
  //     toast.success("Login successfully");
  //     const userId = await axios.get("/api/users/me");
  //     console.log(userId.data.data._id);
  //     const id = userId.data.data._id;
  //     //   router.push(`/profile/${id}`);
  //   } catch (err) {
  //     toast.error(err.response.data.error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required"),
  });

  const handleSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Layout>
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
