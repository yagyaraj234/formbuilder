import React, { useState } from "react";
import Layout from "./Layout/Layout";
import QuestionType from "./QuestionType";

const FormBuilder = () => {
  // const [questionType, setQuestionType] = useState("");

  // const [currentQuestion, setCurrentQuestion] = useState({
  //   question: "",
  //   options: [],
  //   text: "",
  //   blanks: [],
  //   passage: "",
  // });
  // const handleSelectType = (type) => {
  //   setQuestionType(type);
  //   setCurrentQuestion({
  //     question: "",
  //     options: [],
  //     text: "",
  //     blanks: [],
  //     passage: "",
  //   });
  // };

  const [formName, setFormName] = useState("Untitled Project");

  return (
    <Layout>
      <div className="p-10 border m-10 rounded-xl">
        <div className="flex justify-between">
          <div className="flex ">
            <input
              type="text"
              className="border-b outline-none"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
              placeholder="Enter Project name"
            />
            <div className="mt-2">
              <ion-icon
                onClick={() => setFormName("")}
                name="close-outline"
              ></ion-icon>
            </div>
          </div>

          <button className="bg-[#A40E4C] text-white font-semibold px-3 py-1 rounded-xl">
            Show Preview
          </button>
        </div>
        <QuestionType />
      </div>
    </Layout>
  );
};

export default FormBuilder;
