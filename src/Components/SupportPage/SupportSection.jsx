export const SupportSection = () => {
  const options = [
    {
      title: "Games",
      bg_img:
        "https://cdn2.unrealengine.com/games-bg-dec-23-224x200-e05c4dc1e6f7.jpg",
      img: "https://cdn2.unrealengine.com/games-icon-e0db3c848dfd.svg",
    },
    {
      title: "Accounts",
      bg_img:
        "https://cdn2.unrealengine.com/accounts-bg-244x176-2e9c785108bf.jpg",
      img: "https://cdn2.unrealengine.com/accounts-icon-d346f9e011ca.svg",
    },
    {
      title: "Enterprice",
      bg_img:
        "https://cdn2.unrealengine.com/enterprise-bg-244x176-5312c60bde25.jpg",
      img: "https://cdn2.unrealengine.com/enterprise-icon-ba12af4611a7.svg",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-6 items-center mt-12 justify-around ">
        {options.map((item, index) => (
          <ul key={index} className="bg-[#4c4c4c] bg-contain bg-no-repeat">
            <li className="flex flex-row items-center justify-center relative">
              <span
                className="h-16 px-6 py-1 bg-cover flex flex-row items-center justify-center bg-no-repeat "
                style={{ backgroundImage: `url(${item.bg_img})` }}
              >
                <img className="h-20" src={item.img} alt={item.title} />
              </span>

              <span className="w-full">
                <p className="text-white mx-4 font-semibold">{item.title}</p>
              </span>
              <div className="absolute top-0 left-0 w-full h-full transform -skew-y-6 bg-gradient-to-br from-transparent to-black opacity-50"></div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};
