import Slider from "react-slick";
import { GameCard } from "./GameCard";

export const TopSales = () => {
  const games = [
    {
      id: 1,
      title: "Doom 1990",
      category: "Retro Game",
      image_url:
        "https://i.pinimg.com/564x/44/3d/9f/443d9fa49651cbc96f54e9f0a2e16c46.jpg",
      discount: "0%",
      original_price: "₹150",
      discounted_price: "₹148",
    },
    {
      id: 2,
      title: "Horizon Forbidden West™ Complete Edition",
      category: "Action-Adventure",
      image_url:
        "https://i.pinimg.com/564x/2d/f8/62/2df862f688db8c4d4d4ff9a8f4d02219.jpg",
      discount: "10%",
      original_price: "₹200",
      discounted_price: "₹180",
    },
    {
      id: 3,
      title: "Ghost Of Tsushima",
      category: "Action-Adventure",
      image_url:
        "https://i.pinimg.com/564x/cb/45/06/cb45065e128497e45c727008baa62d5b.jpg",
      discount: "5%",
      original_price: "₹120",
      discounted_price: "₹114",
    },
    {
      id: 4,
      title: "Assassin's Creed Shadow",
      category: "Action",
      image_url:
        "https://i.pinimg.com/564x/a6/7f/0e/a67f0e71c00f628a9f3981320b1480f7.jpg",
      discount: "15%",
      original_price: "₹100",
      discounted_price: "₹85",
    },
    {
      id: 5,
      title: "God of War Ragnarok",
      category: "Action-Adventure",
      image_url:
        "https://i.pinimg.com/564x/8a/40/5b/8a405b28e50aa3b6f6f6e738b028d1c4.jpg",
      discount: "20%",
      original_price: "₹250",
      discounted_price: "₹200",
    },
    {
      id: 6,
      title: "The Last of Us 2 Remastered",
      category: "Action-Adventure",
      image_url:
        "https://i.pinimg.com/564x/1c/57/f4/1c57f485510f9c0cf4a3a768f522b4c2.jpg",
      discount: "8%",
      original_price: "₹180",
      discounted_price: "₹165",
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,

  };
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row item-center justify-between text-white">
          <span className="flex flex-row items-center gap-2">
            <h3>Top Sales</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 bg-[#202020] rounded-full p-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 bg-[#202020] rounded-full p-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-1 ">
          <Slider {...settings}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
          </Slider>
        </div>
        
      </div>
    </>
  );
};
