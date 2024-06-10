export const GenreHeader = () => {
  const genre = [
    {
      id: 1,
      title: "Adventure Games",
      img: [
        "https://cdn1.epicgames.com/spt-assets/a39e2271cd9a48a882b8c956205bc01f/plants-vs-zombies-gw2-deluxe-edition-m13gm.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/f994d75247134fb0a4ce6f9c831cad99/astor-blade-of-the-monolith-5wl48.png?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/51523992a6f846a98c62799e146617e3/western-chapter-1p9um.jpg?h=480&quality=medium&resize=1&w=360",
      ],
    },
    {
      id: 2,
      title: "Action-Adventure Games",
      img: [
        "https://cdn1.epicgames.com/spt-assets/e684626eb90547808cce6b8026f839c1/mirrors-edge-catalyst-1wxp0.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/f994d75247134fb0a4ce6f9c831cad99/astor-blade-of-the-monolith-5wl48.png?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/b396dd6c8d544d508f6a671d249cd9a3/cyberpunk-sfx-xffe2.jpg?h=480&quality=medium&resize=1&w=360",
      ],
    },
    {
      id: 3,
      title: "Adventure Games",
      img: [
        "https://cdn1.epicgames.com/spt-assets/f6462b44b04c447282ba2628585673ca/argonauts-agency-3-chair-of-hephaestus-15qe8.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/offer/b07d832be3a04f14a59574831edcdee3/EGST_StorePortrait_1200x1600_1200x1600-3008d8e4407e691dd2dfd48209324712?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/81a464ca86bf406c818ab36bf96d4810/indika-1mcbm.jpg?h=480&quality=medium&resize=1&w=360",
      ],
    },
    {
      id: 4,
      title: "Casual Games",
      img: [
        "https://cdn1.epicgames.com/spt-assets/5fc9dda70ac94dfd8ba636ada8e041b4/my-corp-cargo-simulator--prologue-fyvrn.png?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/1c577cae2cf7462b81b109dcb659f123/campfire--cozy-ai-villagers-6j259.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/24a58932c76e4e5ab83979a68811aadc/new-lands-16ejx.jpg?h=480&quality=medium&resize=1&w=360",
      ],
    },
    {
      id: 5,
      title: "City Builder Games",
      img: [
        "https://cdn1.epicgames.com/spt-assets/9618212ee65745f8b61c932898b151dd/manor-lords-9hoxy.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/296ff987f5f544ba8a78897c91b3612e/sweet-transit-1wcrv.jpg?h=480&quality=medium&resize=1&w=360",
        "https://cdn1.epicgames.com/spt-assets/21babf40eb40466d984da90c24bc3aea/the-tribe-must-survive-oc3xi.jpg?h=480&quality=medium&resize=1&w=360",
      ],
    },
  ];
  return (
    <>
      <div className="mt-6">
        <div className="flex flex-row justify-between ">
          <span className="flex flex-row items-center gap-2 my-2">
            <h3 className="text-white text-lg">Popular Genre</h3>
          </span>
          <span className="flex flex-row gap-2">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
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
                stroke="white"
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
        <div className="flex flex-row gap-4 ">
          {genre.map((genreItem) => (
            <div
              key={genreItem.id}
              className="flex flex-col items-center bg-[#292929]  px-8 py-4 rounded-md hover:brightness-75"
            >
              <span className="flex flex-row justify-center relative ">
                <img className="h-[125px]" src={genreItem.img[0]} />
                <img className="h-[125px]" src={genreItem.img[1]} />
                <img className="h-[125px] absolute" src={genreItem.img[2]} />
              </span>
              <span>
                <p className="text-white text-center mt-2 font-semibold ">
                  {genreItem.title}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
