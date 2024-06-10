export const SupportEnterprise = () => {
  const enterpriseSection = [
    {
      id: 1,
      img: "https://cdn2.unrealengine.com/unreal-engine-logo-90db7999f5c9.svg",
      bg_img:
        "https://cdn2.unrealengine.com/unreal-engine-5064x933-31a3347cb9c5.jpg",
    },
    {
      id: 2,
      img: "https://cdn2.unrealengine.com/marketplace-logo-1211x513-d6ce81aef324.png",
      bg_img:
        "https://cdn2.unrealengine.com/marketplace-2466x933-9cc14bafeef9.jpg",
    },
    {
      id: 3,
      img: "https://cdn2.unrealengine.com/unreal-editor-for-fortnite-logo-1149x513-c1f4d03241cd.png",
      bg_img:
        "https://cdn2.unrealengine.com/unreal-editor-for-fortnite-bg-2466x933-845bf26a10ac.jpg",
    },
    {
      id: 4,
      img: "https://cdn2.unrealengine.com/twinmotion-logo-1c94fc0b1b0a.svg",
      bg_img:
        "https://cdn2.unrealengine.com/twinmotion-2466x933-f6847b84208f.jpg",
    },
    {
      id: 5,
      img: "https://cdn2.unrealengine.com/epic-online-services-logo-e81431bccf91.svg",
      bg_img:
        "https://cdn2.unrealengine.com/epic-online-services-2466x933-7189521d526c.jpg",
    },
    {
      id: 6,
      img: "https://cdn2.unrealengine.com/kws-full-logo-1149x398-9cb294eb31a3.png",
      bg_img:
        "https://cdn2.unrealengine.com/kws-full-tile-v3-2466x933-9d3eb58868a2.png",
    },
  ];
  return (
    <>
      <div className="my-10">
        <h1 className="text-white my-5">Enterprise</h1>

        <div>
          <ul className="grid grid-cols-6 gap-6 ">
            {enterpriseSection.map((enterpriseSectionItem, index) => (
              <li
                key={index}
                className={`bg-no-repeat bg-center bg-cover rounded-lg ${
                  enterpriseSectionItem.id === 1
                    ? "col-span-6"
                    : enterpriseSectionItem.id === 2
                    ? "col-span-3"
                    : enterpriseSectionItem.id === 3
                    ? "col-span-3"
                    : enterpriseSectionItem.id === 4
                    ? "col-span-2"
                    : enterpriseSectionItem.id === 5
                    ? "col-span-2"
                    : "col-span-2"
                }`}
                style={{
                  backgroundImage: `url(${enterpriseSectionItem.bg_img})`,
                }}
              >
                <span className="flex items-center relative">
                  <img
                    src={enterpriseSectionItem.img}
                    className="h-[200px] px-8 py-5"
                  />
                  <span>
                    <svg
                      className="absolute top-0 right-0 bg-[#ffe600] h-8 p-2 rounded-s-md rounded-b-md rounded-e-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5L19.5 4.5M19.5 4.5H8.25M19.5 4.5V15.75"
                      />
                    </svg>
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
