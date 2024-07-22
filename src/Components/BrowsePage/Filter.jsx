import { useSearch } from "../StateManagement/search";
import { Accordion } from "./Accordition";

export const Filter = () => {
  const search = useSearch((state) => state.search);
  return (
    <>
      <div className="">
        <label className="text-white text-sm ">Filters</label>
        <span className="bg-[#202020] flex flex-row text-sm text-white  items-center gap-2 my-2 px-1 py-2 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 px-1"
            viewBox="0 0 21 20"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="scale(1 -1) rotate(-45 -11.93502884 -2)"
              stroke="white"
              strokeWidth="1.65"
              fill="none"
              fillRule="evenodd"
            >
              <circle cx="7.70710678" cy="7.70710678" r="7"></circle>
              <path
                d="M15.2071068 8.62132034h5.6923881"
                strokeLinecap="square"
              ></path>
            </g>
          </svg>
          <input
            className=" bg-transparent focus: outline-none text-xs"
            type="search"
            placeholder="Keywords"
            onChange={(e) => console.log(e.target.value)}
          />
        </span>
        <Accordion/>
      </div>
    </>
  );
};
