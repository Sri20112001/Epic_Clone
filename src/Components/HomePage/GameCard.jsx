/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAddtoList } from "../StateManagement/AddtoList";

export const GameCard = ({ game }) => {
  const [add, setAdd] = useState(false);
  const { addedGames, addGame } = useAddtoList();

  const addtoList = () => {
    setAdd(!add)
    addGame(game)
    console.log("Add To List:",addedGames)
  }

  return (
    <div className="flex flex-col items-start p-4 shadow-lg">
      <div
        className={`flex items-start h-[250px] w-full rounded-md bg-center bg-cover bg-no-repeat  hover:brightness-75 `}
        style={{ backgroundImage: `url(${game.image})` }}
      >
        <button
          className="ml-auto text-white rounded-lg shadow-md transition-colors duration-300 ease-in-out"
          onClick={addtoList}
        >
          {add ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              className="h-6 text-white mt-2 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
      </div>
      <div className="text-white w-[175px] mt-3">
        <p className="text-xs text-gray-400">{game.category}</p>
        <p className="text-sm font-semibold tracking-wide line-clamp-2">
          {game.title}
        </p>
      </div>
      <div className="mt-2 w-[175px] text-white flex flex-row items-center gap-3">
        {game.discount ? (
          <h5 className="bg-blue-600 px-2 py-1 text-xs text-center rounded-md tracking-wide">
            {game.discount}
          </h5>
        ) : null}

        <h5
          className={`tracking-wide text-sm ${
            game.discount ? "line-through" : ""
          }`}
        >
          {game.original_price}
        </h5>

        {game.discount ? (
          <h5 className="tracking-wide text-sm">{game.discounted_price}</h5>
        ) : null}
      </div>
    </div>
  );
};
