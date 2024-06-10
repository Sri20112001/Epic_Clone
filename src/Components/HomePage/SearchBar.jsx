import { Link } from "react-router-dom";
import useMenuStore from "../StateManagement/Menu";

export const SearchBar = () => {
  const menu = [
    {
      id: 1,
      title: "Discover",
      path: "/",
    },
    {
      id: 2,
      title: "Browse",
      path: "Browse",
    },
    {
      id: 3,
      title: "News",
      path: "/News",
    },
  ];
  const menu2 = ["Cart", "WishList"];

  const menuVisible = useMenuStore((state) => state.menuVisible);

  return (
    <>
      <div
        className={`flex flex-row items-center bg-black pb-3 z-10 ${
          menuVisible ? "" : "sticky top-0 "
        }`}
      >
        {/* Search Bar */}
        <div className="flex rounded-full py-1  bg-[#202020] my-4 max-w-[300px]">
          <button className="ml-2 p-1 text-gray-500">
            <svg
              className="h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.74-5.25a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-2 py-1 focus:outline-none border-none bg-transparent text-white "
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          {/* Menu 1 */}
          <div>
            <ul className="flex flex-row items-center ">
              {menu.map((menuItem, index) => (
                <li key={index}>
                  <Link to={menuItem.path}>
                    <button
                      className="text-[#f5f5f5] mx-4 font-light text-sm
                hover:text-gray-400"
                    >
                      {menuItem.title}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Menu 2 */}
          <div>
            <ul className="flex flex-row items-center ">
              {menu2.map((menuItem, index) => (
                <li key={index}>
                  <button
                    className="text-[#f5f5f5] mx-4 font-light text-sm
                hover:text-gray-400"
                  >
                    {menuItem}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
