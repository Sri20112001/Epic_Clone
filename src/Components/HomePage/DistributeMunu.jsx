export const DistributeMenu = () => {
  const menu = [
    "Distribute on Epic Game Store",
    "Developer Forums",
    "Documentation",
    "Learning",
  ];
  return (
    <>
      <div className="flex flex-col  max-w-fit bg-[#202024] rounded-lg absolute top-[75px] left-[250px] z-20">
        <ul className="py-2 px-1 mx-1 my-2">
          {menu.map((menuItem, index) => (
            <li key={index} className=" hover:bg-[#404044] hover:rounded-lg">
              <button className=" px-2 py-1 text-white text-xs text-center">{menuItem}</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
