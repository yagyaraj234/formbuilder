import React from "react";
import CategorizedQuestions from "./CategorizedQuestions";

const button = [
  { name: "Categorize", id: 1 },
  { name: "Cloze", id: 2 },
  { name: "comprehension", id: 3 },
];

const QuestionType = () => {
  console.log(button);
  return (
    <>
      <div className="flex md:w-[50%] py-4 gap-10">
        {/* Question button  */}
        {button.map((button) => (
          <div
            key={button.id}
            className="bg-[#A40E4C] text-white rounded-xl font-semibold py-1 px-4 flex"
          >
            <div className="pt-1">
              <ion-icon name="add-circle-outline"></ion-icon>
            </div>
            <button className="pl-2">{button.name}</button>
          </div>
        ))}
      </div>
      <CategorizedQuestions />
    </>
  );
};

export default QuestionType;
