import React, { useState } from "react";

const CategorizedQuestions = () => {
  const [category, setCategory] = useState([]);
  console.log(category);
  return (
    <>
      <div className="border border-gray-400 rounded-lg min-h-[40vh] p-5">
        <p className="text-xl font-semibold py-2">Question 1</p>

        <div className="mb-5">
          <input
            className="border px-2 py-1 rounded-md outline-none"
            type="text"
            name=""
            id=""
            placeholder="Description"
          />
        </div>

        <div>
          <p className="text-xl  font-medium flex flex-col">Categories</p>
          <div className="flex">
            <input
              className="border px-2 py-1 rounded-md outline-none block my-2"
              type="text"
              name=""
              id=""
              placeholder="Category 1"
              onChange={(e) => setCategory(e.target.value)}
            />

            <div className="mt-3 text-xl opacity-70">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>

          <div className="flex">
            <input
              className="border px-2 py-1 rounded-md outline-none block my-2"
              type="text"
              name=""
              id=""
              placeholder="Caytegory 2"
              onChange={(e) => setCategory(e.target.value)}
            />
            <div className="mt-3 text-xl opacity-70">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        </div>

        {/* <p className="my-4 text-xl font-medium">Items</p> */}

        <div>
          <p className="text-xl  font-medium flex flex-col">Items</p>
          <div className="flex">
            <div className="flex mr-10">
              <input
                className="border px-2 py-1 rounded-md outline-none block my-2"
                type="text"
                name=""
                id=""
                placeholder="Description"
              />

              <div className="mt-3 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
            <div className="flex">
              <input
                className="border px-2 py-1 rounded-md outline-none block my-2"
                type="text"
                name=""
                id=""
                placeholder="Description"
              />

              <div className="mt-3 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex mr-10">
              <input
                className="border px-2 py-1 rounded-md outline-none block my-2"
                type="text"
                name=""
                id=""
                placeholder="Description"
              />

              <div className="mt-3 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
            <div className="flex">
              <input
                className="border px-2 py-1 rounded-md outline-none block my-2"
                type="text"
                name=""
                id=""
                placeholder="Description"
              />

              <div className="mt-3 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>

          <div className="flex">
            <input
              className="border px-2 py-1 rounded-md outline-none block my-2"
              type="text"
              name=""
              id=""
              placeholder="Description"
            />
            <div className="mt-3 text-xl opacity-70">
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
        </div>
        {/* <div className="">
          <div className="flex">
            <div className="flex">
              <input
                className="border px-2 py-1 rounded-md outline-none"
                type="text"
              />
              <div className="mt-2 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
            <div className="flex">
              <input
                className="border px-2 py-1 rounded-md outline-none"
                type="text"
              />
              <div className="mt-2 text-xl opacity-70">
                <ion-icon name="close-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CategorizedQuestions;
