
export const WishListSort = () => {
    const sortValue = [
        "All",
        "New Release",
        "Coming Soon",
        "Alphabetical",
        "Price: Hight to Low",
        "Price: Low to High",
      ];
  return (
    <>
    <div className="mt-6 flex flex-row items-start">
        <label htmlFor="sort" className="text-white">
          Show:
        </label>
        <select
          className="bg-transparent text-white focus:outline-white px-2 "
          name="sort"
          id="sort"
        >
          {sortValue.map((sortItem, index) => (
            <option
              className="bg-[#202020] text-sm hover:bg-[#414141]"
              key={index}
              value={sortItem}
            >
              {sortItem}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
