/* eslint-disable react/no-unknown-property */

import { useState } from "react";

export const SupportGames = () => {
  const [showMoreItems, setShowMoreItems] = useState(8);
  const [showMoreButton, setshowMoreButton] = useState(true);

  const handleShowMore = () => {
    setShowMoreItems((preVisibleItems) => preVisibleItems + 7);
    setshowMoreButton(false);
  };

  const ShowAllGames = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="23"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.208 0a.75.75 0 0 0-.75.75V3H6.736C4.29 3 2.206 4.531 1.804 6.62L.272 14.589C.096 15.03 0 17.672 0 18.166 0 20.56 0 22.5 5 22.5c1.91 0 3.571-2.815 4.413-5.342.523-1.572 1.93-2.93 3.587-2.93h4c1.657 0 3.064 1.358 3.587 2.93C21.43 19.685 23.09 22.5 25 22.5c5 0 5-1.94 5-4.333 0-.495-.096-3.137-.272-3.58l-1.532-7.966C27.794 4.53 25.71 3 23.264 3h-6.806V.75a.75.75 0 0 0-.75-.75h-1.5ZM8.25 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM24 9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          fill="#fff"
        ></path>
      </svg>
    );
  };

  const gameSection = [
    {
      id: 1,
      title: "Fortnite",
      img: "https://cdn2.unrealengine.com/fn-br-c5s3-tile-2757x1047-6c8c1b8c356f.jpg",
    },
    {
      id: 2,

      title: "LEGO Fortnite",
      img: "https://cdn2.unrealengine.com/juno-tile-783x1047-fc3f8ca1f359.png",
    },
    {
      id: 3,
      title: "Rocket Racing",
      img: "https://cdn2.unrealengine.com/rocket-racing-tile-783x1047-f91b3e789b1a.jpg",
    },
    {
      id: 4,
      title: "Fortnite Festival",
      img: "https://cdn2.unrealengine.com/fn-festival-tile-s3-783x1047-bacad87078eb.jpg",
    },
    {
      id: 5,
      title: "Rocket League",
      img: "https://cdn2.unrealengine.com/rl-epic-support-thumbnail-783x1047-783x1047-b040c42cdfc3.jpg",
    },
    {
      id: 6,
      title: "Fall Guys",
      img: "https://cdn2.unrealengine.com/fall-guys-783x1047-c6adc350bf30.jpg",
    },
    {
      id: 7,
      title: "Rocket League Sideswipe",
      img: "https://cdn2.unrealengine.com/rls-epic-support-thumbnail-783x1047-783x1047-a246396ed9e5.jpg",
    },
    {
      id: 8,
      title: "Show all Games",
      svg: <ShowAllGames />,
    },
    {
      id: 9,
      title: "Alan Wake 2",
      img: "https://cdn2.unrealengine.com/aw2-egs-support-783x1047-cd0fb7119f53.jpg",
    },
    {
      id: 10,
      title: "Horizon Chase 2",
      img: "https://cdn2.unrealengine.com/hc2-hero-783x1047-egs-banner-783x1047-cd1e114543c0.jpg",
    },
    {
      id: 11,
      title: "PC Building Simulator",
      img: "https://cdn2.unrealengine.com/pcbs-support-783x1047-3663f86d79c0.jpg",
    },
    {
      id: 12,
      title: "PC Building Simulator 2",
      img: "https://cdn2.unrealengine.com/pcbs-2-support-783x1047-6e85c954153e.jpg",
    },
    {
      id: 13,
      title: "Alan Wake Remastered",
      img: "https://cdn2.unrealengine.com/deer-playersupport-783x1047-783x1047-ac6b81bd4faa.jpg",
    },
    {
      id: 14,
      title: "Kid A Mnesia Exhibition",
      img: "https://cdn2.unrealengine.com/kid-a-player-support-783x1047-b2489c63bc98.jpg",
    },
    {
      id: 15,
      title: "Shadow Complex",
      img: "https://cdn2.unrealengine.com/epicgamesplayersupportselfserviceportal-shadowcomplex-783x1047-783x1047-348952e464bd.jpg",
    },
    {
      id: 16,
      title: "Postparty",
      img: "https://cdn2.unrealengine.com/postparty-epic-faq-783x1047-bff766570e0d.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center my-12">
        <ul className="grid grid-cols-5 gap-6 h-full">
          {gameSection.slice(0, showMoreItems).map((gameSectionItem) =>
            (gameSectionItem.svg && showMoreButton) || gameSectionItem.img ? (
              <li
                key={gameSectionItem.id}
                className={`h-full ${
                  gameSectionItem.id === 1 ? "grid col-span-3" : ""
                }`}
              >
                <figure className="flex flex-col h-full">
                  {gameSectionItem.svg && showMoreButton ? (
                    <button
                      className="bg-[#272727] h-[90%] w-full hover:bg-[#1878dd] hover:animate-in delay-150 duration-300 flex flex-col items-center justify-center rounded-lg relative"
                      onClick={handleShowMore}
                    >
                      {gameSectionItem.svg}
                      <p className="text-white text-lg mt-4 font-bold">
                        Show All games
                      </p>
                      <svg
                        className="h-8 absolute bottom-0 right-0 p-2 rounded-r-lg rounded-t-xl font-bold bg-[#1878dd]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </button>
                  ) : (
                    <img
                      className="rounded-lg shadow-md h-full"
                      src={gameSectionItem.img}
                      alt={gameSectionItem.title}
                    />
                  )}
                  {gameSectionItem.img && (
                    <figcaption className="text-white text-xs my-2">
                      {gameSectionItem.title}
                    </figcaption>
                  )}
                </figure>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};
