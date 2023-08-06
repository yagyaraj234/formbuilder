import React from "react";
import Layout from "./Layout/Layout";
import HeroImage from "../assets/herosection.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="px-10 grid grid-cols-2">
        <div className=" min-h-[80vh] pt-20 ">
          <p className="text-6xl font-extrabold text-[#A40E4C]">
            Empower Your Creativity:
          </p>
          <p className="text-4xl font-bold"> Build Forms with Ease</p>
          <p className="text-4xl font-bold">
            {" "}
            and Precision using Our Intuitive Web App!"
          </p>

          <div className="mt-10 ">
            <Link
              className="font-semibold text-xl border border-black rounded-xl px-5 py-1 hover:bg-[#A40E4C] duration-300 transition-colors hover:text-white"
              to="/form-builder"
            >
              {" "}
              Try it Out
            </Link>
          </div>
        </div>
        <div className=" mt-20 pl-20 rounded-lg">
          <img
            className="rounded-lg h-[300px]"
            src={HeroImage}
            alt="HeroImage"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
