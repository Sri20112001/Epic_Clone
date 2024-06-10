import { GameCard } from "./GameCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MegaSale = () => {
  const games = [
    {
      title: "Argonauts Agency 3: Chair of Hephaestus",
      game_url:
        "https://store.epicgames.com/en-US/p/argonauts-agency-3-chair-of-hephaestus-53311d",
      discount: "",
      discounted_price: "$8.99",
      original_price: "$8.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/f6462b44b04c447282ba2628585673ca/argonauts-agency-3-chair-of-hephaestus-15qe8.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Djinn - The Forbidden Knowledge",
      game_url:
        "https://store.epicgames.com/en-US/p/djinn-the-forbidden-knowledge-1f5924",
      discount: "-11%",
      discounted_price: "$11.56",
      original_price: "$11.56",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/6c67b9f26a5d4c0ea4ab6374575a84f4/djinn--the-forbidden-knowledge-neirc.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Dragon Age™: Origins - Ultimate Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/dragon-age-origins-ultimate-edition-ca4fbf",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/c85211c3d2f64a8ea41fc470362ac665/dragon-age-origins--ultimate-edition-16rzt.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Dragon Age II: Ultimate Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/dragon-age-ii-ultimate-edition-12b171",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/2a6283e82b9b4eb29202a8e64981f023/dragon-age-ii-ultimate-edition-mp359.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Vacation Adventures Park Ranger 16 Collectors Edition",
      game_url:
        "https://store.epicgames.com/en-US/p/vacation-adventures-park-ranger-16-collectors-edition-ce34cb",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/59885bbdb9684ff0a6ab62a4cf1d7ce2/vacation-adventures-park-ranger-16-collectors-edition-11vpm.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Survival: Fountain of Youth",
      game_url:
        "https://store.epicgames.com/en-US/p/survival-fountain-of-youth-e7036f",
      discounted_price: "$27.99",
      original_price: "$27.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/fb4f09ea94024f16ae92765a0e911cb7/survival-fountain-of-youth-1lnsj.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Trust No One",
      game_url: "https://store.epicgames.com/en-US/p/trust-no-one-5d5141",
      discounted_price: "$1.99",
      original_price: "$1.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/15df2995842b4b75a5aa0d4751f49859/trust-no-one-jylwk.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Athenian Rhapsody",
      game_url: "https://store.epicgames.com/en-US/p/athenian-rhapsody-5ef478",
      discounted_price: "$14.99",
      original_price: "$14.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/56b3e4eea8e641e192f809be2505d15d/download-athenian-rhapsody-offer-1uxcp.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Spellbound Survivors",
      game_url:
        "https://store.epicgames.com/en-US/p/spellbound-survivors-4da8c1",
      discounted_price: "$4.99",
      original_price: "$4.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/01bd1b95902f4a73b04267c0e17161a5/spellbound-survivors-v4auq.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Garten of Banban 7",
      game_url: "https://store.epicgames.com/en-US/p/garten-of-banban-7-d0e110",
      discounted_price: "$9.99",
      original_price: "$9.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/c97bd69018fc427d98808d1435bcc503/garten-of-banban-7-170tp.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Revenge of Sardine",
      game_url: "https://store.epicgames.com/en-US/p/revenge-of-sardine-1023c4",
      discounted_price: "$1.99",
      original_price: "$1.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/63cacc0c4d5443afbb7e8bf71c3bdad6/revenge-of-sardine-1g1wz.png?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Lost in Random™",
      game_url: "https://store.epicgames.com/en-US/p/lost-in-random-1804af",
      discounted_price: "$29.99",
      original_price: "$29.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/a4ba9a16b43347b09002ef81b48a32f4/lost-in-random-2eajx.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
    },
    {
      title: "Sea of Solitude",
      game_url: "https://store.epicgames.com/en-US/p/sea-of-solitude-68aef2",
      discounted_price: "$19.99",
      original_price: "$19.99",
      category: "Base Game",
      image:
        "https://cdn1.epicgames.com/spt-assets/1d933e0a80e2466ab190fc5d277a4c66/sea-of-solitude-bldjw.jpg?h=480&amp;quality=medium&amp;resize=1&amp;w=360",
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
            <h3>Mega Sales</h3>
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
            <button>
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
            </button>
            <button>
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
            </button>
          </span>
        </div>

        <div className="grid grid-cols-1 ">
          <Slider {...settings}>
            {games.map((game, index) => (
              <GameCard key={index} game={game} id={index} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
