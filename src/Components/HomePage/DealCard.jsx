/* eslint-disable react/prop-types */
import { useState } from "react";

export const DealCard = ({ deal }) => {
  const [add, setAdd] = useState(false);

  const addtoList = () => {
    setAdd(!add);
  };
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-8 order-none">
        <div
          className={`flex flex-col justify-between h-[250px] w-full bg-center bg-no-repeat bg-contain rounded-xl hover:brightness-75`}
          style={{ backgroundImage: `url(${deal.img})` }}
        >
          <button
            onClick={addtoList}
            className="ml-auto text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out"
          >
            {add ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-6 text-white mt-2 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="h-6 text-white mt-2 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            )}
          </button>

          <h3 className="text-white text-center font-bold py-1 bg-[#6a61fe] rounded-b-lg">
            Deal of the week
          </h3>
        </div>

        <div className="flex flex-col justify-between gap-6 text-white rounded-lg">
          <h4 className="text- mb-2">{deal.title}</h4>
          <span className="flex flex-row gap-2 text-sm">
            <p className="bg-[#0071df] rounded-sm text-[8px] px-2 ">
              {deal.discount}
            </p>
            <p className="line-through">₹{deal.price}</p>
            <p>₹{deal.discount_price}</p>
          </span>
        </div>
      </div>
    </>
  );
};
