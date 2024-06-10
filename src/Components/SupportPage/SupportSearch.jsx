/* eslint-disable react/no-unknown-property */
export const SupportSearch = () => {
  return (
    <>
      <div className="flex mt-1 flex-row items-center justify-center bg-white ">
        <svg
          className="text-[##141414]"
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.176 13.77c-1.836 1.836-1.857 4.749-.099 6.507s4.671 1.738 6.507-.098c1.836-1.836 1.856-4.75.098-6.507-1.758-1.758-4.67-1.738-6.506.098zm-1.053 7.462c-2.309-2.31-2.241-6.077.098-8.416 2.34-2.34 6.107-2.407 8.416-.099 1.98 1.98 2.212 5.032.764 7.336l3.366 3.366-.955.955-3.257-3.257-.016.016c-2.34 2.34-6.108 2.407-8.416.099z"
            fill="currentColor"
          ></path>
        </svg>
        <input
          className="flex-1 focus:outline-0 placeholder:text-[12px] px-2 -tracking-tighter"
          type="search"
          placeholder="SEARCH HELP CENTER..."
        />
      </div>
    </>
  );
};
