import { useEffect } from "react";
import { useAddtoList } from "../StateManagement/AddtoList";
import { Link } from "react-router-dom";

export const WishlistGames = () => {
  const { addedGames, removeGame } = useAddtoList();

  useEffect(() => {
    // If you have any side effects, handle them here.
  }, [addedGames]);

  return (
    <>
      {addedGames.length === 0 ? (
        <div className="flex items-center justify-center my-auto">
          <span className="flex flex-col items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12"
              viewBox="0 0 45 52"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                  fill="#0078F2"
                ></path>
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                ></path>
              </g>
            </svg>
            <h1 className="text-[#f5f5f5] text-2xl">
              You haven't added anything to your wishlist yet.
            </h1>
            <Link to="/Browse">
              <p className="text-white underline text-xl">
                Shop for Games & Apps
              </p>
            </Link>
          </span>
        </div>
      ) : (
        <div className="">
          {addedGames.map((addedGame, index) => (
            <div
              key={addedGame.id} // Assuming `addedGame` has a unique `id` property
              className="flex flex-row gap-4 my-4 bg-[#202020] p-4 rounded-sm"
            >
              <span className="flex flex-col items-start gap-2">
                <img
                  className="h-[150px] rounded-sm"
                  src={addedGame.image}
                  alt={addedGame.title} // Add alt text for better accessibility
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 ml-1 text-[#636363]"
                  viewBox="0 0 512 512"
                >
                  <title>Windows</title>
                  <g>
                    <path
                      fill="currentColor"
                      d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span className="flex flex-col gap-1">
                <h6 className="text-white text-[10px] uppercase px-2 py-1 w-[30%] bg-[#373737] font-bold">
                  {addedGame.category}
                </h6>
                <h3 className="text-white">{addedGame.title}</h3>
                <span className="flex flex-row items-center mt-10 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.3827 3.07523C10.2512 2.71987 9.74862 2.71987 9.61712 3.07523L8.69694 5.562C8.1595 7.01439 7.01439 8.1595 5.562 8.69694L3.07523 9.61712C2.71987 9.74862 2.71987 10.2512 3.07523 10.3827L5.562 11.3029C7.01439 11.8403 8.1595 12.9855 8.69694 14.4378L9.61712 16.9246C9.74862 17.28 10.2512 17.28 10.3827 16.9246L11.3029 14.4378C11.8403 12.9855 12.9855 11.8403 14.4378 11.3029L16.9246 10.3827C17.28 10.2512 17.28 9.74862 16.9246 9.61712L14.4378 8.69694C12.9855 8.1595 11.8403 7.01439 11.3029 5.562L10.3827 3.07523Z"
                      fill="white"
                    ></path>
                  </svg>
                  <p className="text-[#e8e8e8]">Earn 5% back in Epic Rewards</p>
                </span>
              </span>
              <span className="flex flex-col items-center justify-between ml-auto">
                <p className="text-[#e8e8e8] ml-auto">
                  {addedGame.discounted_price}
                </p>
                <span className="flex items-center gap-4">
                  <button onClick={() => removeGame(index)}
                  className="text-[#959595] underline text-sm hover:no-underline">
                    Remove
                  </button>
                  <button className="text-[#d8d8d8] border border-white px-4 py-1 text-sm font-semibold hover:bg-[#444444]">
                    Add to Cart
                  </button>
                </span>
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
