import { useEffect, useState } from "react";

export const Recommendation = () => {
  const menuList = [
    {
      id: 1,
      title: "Stray",
      image:
        "https://i.pinimg.com/564x/37/a8/23/37a823eaa1611bf2bb5913647f377617.jpg",
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      image:
        "https://i.pinimg.com/564x/f8/a9/50/f8a95098b6ea7851423ba559e3539dbd.jpg",
    },
    {
      id: 3,
      title: "Marvel's Spiderman",
      image:
        "https://i.pinimg.com/564x/e8/7e/4e/e87e4e843a4290c2e1183c7fe9f8cdca.jpg",
    },
    {
      id: 4,
      title: "Deadpool",
      image:
        "https://i.pinimg.com/564x/2c/ed/fa/2cedfaab01b918b0d17fae03b7cf9216.jpg",
    },
    {
      id: 5,
      title: "Sleeping Dogs",
      image:
        "https://i.pinimg.com/564x/01/12/5f/01125faa87a5f4680ed89c87285e46d9.jpg",
    },
  ];

  const menuConent = [
    {
      id: 1,
      title: "Stray",
      image:
        "https://i.pinimg.com/564x/37/a8/23/37a823eaa1611bf2bb5913647f377617.jpg",
    },
    {
      id: 2,
      title: "Red Dead Redemption 2",
      image:
        "https://i.pinimg.com/564x/f8/a9/50/f8a95098b6ea7851423ba559e3539dbd.jpg",
    },
    {
      id: 3,
      title: "Marvel's Spiderman",
      image:
        "https://i.pinimg.com/564x/e8/7e/4e/e87e4e843a4290c2e1183c7fe9f8cdca.jpg",
    },
    {
      id: 4,
      title: "Deadpool",
      image:
        "https://i.pinimg.com/564x/2c/ed/fa/2cedfaab01b918b0d17fae03b7cf9216.jpg",
    },
    {
      id: 5,
      title: "Sleeping Dogs",
      image:
        "https://i.pinimg.com/564x/01/12/5f/01125faa87a5f4680ed89c87285e46d9.jpg",
    },
  ];

  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    const incrementValue = () => {
      setSliderValue((prevValue) => (prevValue + 1) % menuConent.length);
    };

    const intervalID = setInterval(incrementValue, 10000);

    return () => clearInterval(intervalID);
  }, [menuConent.length]);

  const controlSlider = (menu) => {
    console.log(menu.id)
    console.log("Before:",menu.id)
    setSliderValue(menu.id - 1);
    console.log("After:",menu.id)
  };

  return (
    <>
      <div className="flex flex-row item-start gap-8 mt-12 mb-12 ">
        <div
          className={`h-[650px] w-[90%] rounded-xl
                bg-no-repeat
                bg-cover
                bg-right-top
                flex items-end justify-start 
                animate-fade-right animate-once animate-duration-1000 animate-delay-0"
                `}
          style={{ backgroundImage: `url(${menuConent[sliderValue].image})` }}
        >
          <div className="flex flex-col p-8 rounded-lg text-white">
            <h2 className="text-3xl font-bold mb-2">
              {menuConent[sliderValue].title}
            </h2>
            <h3 className="text-xl font-semibold mb-4">Now Available</h3>
            <h2 className="text-lg mb-4 line-clamp-1">
              Download and play this wonderful RPG game and explore this world
              with your friends
            </h2>
            <p className="text-2xl font-bold mb-6">Free</p>
            <div className="flex flex-row gap-4">
              <button className="bg-white hover:bg-gray-400 hover:text-white text-black font-bold px-6 py-3 rounded-lg">
                Buy
              </button>
              <button className="flex justify-start bg-transparent hover:bg-white hover:text-black text-white font-bold px-6 py-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start">
          {menuList.map((menu) => (
            <span
              key={menu.id}
              className="flex flex-col items-center justify-center h-32 w-full rounded-xl px-2 hover:bg-gray-800 transition-colors duration-200"
            >
              <button
                className="flex items-center w-full gap-4 px-3 py-1 transition-colors duration-200"
                onClick={() => controlSlider(menu)}
              >
                <img
                  className="h-20 w-16 object-fill rounded-md"
                  src={menu.image}
                  alt={menu.title}
                />
                <p className="text-left text-white text-lg font-semibold">
                  {menu.title}
                </p>
              </button>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
