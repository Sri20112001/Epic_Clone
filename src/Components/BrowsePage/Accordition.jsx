import { useState } from "react";

export const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState('');


  const accordionData = [
    {
      id: 1,
      title: "EVENTS",
      menu: [
        {
          id: 1,
          title: "Deals of the Week",
        },
        {
          id: 2,
          title: "EA Classic Games on Epic",
        },
        {
          id: 3,
          title: "First Run",
        },
        {
          id: 4,
          title: "Future Games Show",
        },
        {
          id: 5,
          title: "Guerilla Collective Showcase",
        },
      ],
    },
    {
      id: 2,
      title: "PRICE",
      menu: [
        {
          id: 1,
          title: "Free",
        },
        {
          id: 2,
          title: "Under ₹750.00",
        },
        {
          id: 3,
          title: "Under ₹1500.00",
        },
        {
          id: 4,
          title: "Under ₹2,250.00",
        },
        {
          id: 5,
          title: "Under ₹1,0,99.00 and above",
        },
        {
          id: 6,
          title: "Discounted",
        },
      ],
    },
    {
      id: 3,
      title: "GENRE",
      menu: [
        {
          id: 1,
          title: "Action",
        },
        {
          id: 2,
          title: "Action-Adventure",
        },
        {
          id: 3,
          title: "Adventure",
        },

        {
          id: 4,
          title: "Fantasy",
        },
        {
          id: 5,
          title: "Fighting",
        },
        {
          id: 6,
          title: "First Person",
        },

        {
          id: 7,
          title: "Indie",
        },

        { id: 8, title: "Narration" },
        { id: 9, title: "Open World" },

        { id: 10, title: "RPG" },

        { id: 11, title: "Shooter" },

        {
          id: 12,
          title: "Space",
        },

        { id: 13, title: "Survival" },
      ],
    },
    {
      id: 4,
      title: "TYPES",
      menu: [
        {
          id: 1,
          title: "Apps",
        },
        {
          id: 2,
          title: "Editor",
        },
        {
          id: 3,
          title: "Experience",
        },
        {
          id: 4,
          title: "Game",
        },
        {
          id: 5,
          title: "Game Add-On",
        },
        {
          id: 6,
          title: "Game Bundle",
        },
        {
          id: 7,
          title: "Game Demo",
        },
        {
          id: 8,
          title: "Game Edition",
        },
      ],
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" my-4">
      {accordionData.map((accordionDataItem, index) => (
        <div key={accordionDataItem.id} className="">
          <div
            className="flex flex-row items-center justify-between"
            onClick={() => handleToggle(index)}
          >
            <span
              className="flex flex-row items-center justify-between text-gray-100 border-y-[0.5px] transform transition-transform duration-200
                border-y-[#292929] w-full text-[10px] py-6 leading-tight font-semibold  active:border-white "
            >
              {accordionDataItem.title}
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="">
              <ol className="flex flex-col ">
                {accordionDataItem.menu.map((menuItem) => (
                  <li key={menuItem.id} className="">
                    <button className="w-full text-left py-4 px-2 text-gray-100 text-xs hover:bg-[#353535]">
                      {menuItem.title}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
