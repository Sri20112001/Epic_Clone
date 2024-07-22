export const WishListTitle = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="">
          <h1 className="text-white text-3xl">My WishList</h1>
        </div>
        <div className="flex items-center justify-center gap-1 m-2">
          <h1 className="text-[#9a9a9a] ">Epic Rewards</h1>
          <svg
            aria-hidden="true"
            className="h-4"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.25 4a.75.75 0 0 1 .75-.75h5.75V9a.75.75 0 0 1-1.5 0V5.81l-6.72 6.72a.75.75 0 1 1-1.06-1.06l6.72-6.72H16a.75.75 0 0 1-.75-.75M6.5 7.75a.75.75 0 0 0-.75.75v10c0 .414.336.75.75.75h10a.75.75 0 0 0 .75-.75V16a.75.75 0 0 1 1.5 0v2.5a2.25 2.25 0 0 1-2.25 2.25h-10a2.25 2.25 0 0 1-2.25-2.25v-10A2.25 2.25 0 0 1 6.5 6.25H9a.75.75 0 0 1 0 1.5z"
              clipRule="evenodd"
              fill="white"
              fillRule="evenodd"
            ></path>
          </svg>
          <span className="border border-white px-3 py-1.5 rounded-full">
            <p className="text-white text-xs font-bold">₹ 0.00</p>
          </span>
        </div>
      </div>
    </>
  );
};
