import {
  EpicLogo,
  Fab,
  FallGuy,
  FortniteIcon,
  KidsWeb,
  MetaHuman,
  RealityCapture,
  RealityScan,
  RocketLeague,
  TwinMotion,
  Unreal,
  artStation,
  sketchFab,
} from "./MenuIcons";
import { useMenuStore } from "../StateManagement/Menu";

export const Menu = () => {
  const getMenuItems = () => [
    {
      heading: "Play",
      subMenu: [
        {
          img: FortniteIcon,
          title: "Fortnite",
        },
        {
          img: RocketLeague,
          title: "Rocket League",
        },
        {
          img: FallGuy,
          title: "Fall Guys",
        },
      ],
    },
    {
      heading: "Discover",
      subMenu: [
        {
          img: EpicLogo,
          title: "Epic Games Store",
        },
        {
          img: Fab,
          title: "Fab",
        },
        {
          img: sketchFab,
          title: "Sketch Fab",
        },
        {
          img: artStation,
          title: "Art Station",
        },
      ],
    },
  ];

  const menuItems = getMenuItems();

  const getMenuItems2 = () => [
    {
      heading: "Create",
      subMenu: [
        {
          img: Unreal,
          title: "Unreal Engine",
        },
        {
          img: FortniteIcon,
          title: "Create in Fortnite",
        },
        {
          img: MetaHuman,
          title: "MetaHuman",
        },
        {
          img: TwinMotion,
          title: "Twinmotion",
        },
        {
          img: RealityScan,
          title: "RealityScan",
        },
        {
          img: RealityCapture,
          title: "RealityCapture",
        },
        {
          img: EpicLogo,
          title: "Epic Online Services",
        },
        {
          img: EpicLogo,
          title: "Publish on Epic Games Store",
        },
        {
          img: KidsWeb,
          title: "Kids Web Service",
        },
        {
          img: EpicLogo,
          title: "Developer Community",
        },
      ],
    },
  ];

  const menuItems2 = getMenuItems2();

  const menuVisible = useMenuStore((state) => state.menuVisible);

  return (
    <div
      className={`flex flex-row item-center gap-4 bg-[#202024] mx-3 my-2 p-8 rounded-lg absolute top-[75px] left-25 z-10
        ${menuVisible ? "animate-in  fade-in-50" : "animate-out  fade-out-50"}
    `}
    >
      <div className=" flex flex-col  gap-8  ">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="text-white flex flex-col items-start mb-6"
          >
            <h1 className="mb-4 text-xl text-center font-semibold">
              {item.heading}
            </h1>
            <ul className="space-y-3">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <button className="flex items-center py-2 px-3 w-full rounded-lg gap-3 hover:bg-[#333335] transition-all duration-100 ease-[cubic-bezier(.47,0,.745,.715)] taos:opacity-0">
                    <img
                      className="h-6"
                      src={subItem.img}
                      alt={`${subItem.title} Logo`}
                    />
                    <p className="text-base text-center">{subItem.title}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className=" flex flex-col">
        {menuItems2.map((item, index) => (
          <div key={index} className="text-white flex flex-col mb-6">
            <h1 className="mb-4 text-xl font-semibold">{item.heading}</h1>
            <ul className="space-y-3">
              {item.subMenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <button className="flex items-center py-2 px-3 w-full rounded-lg gap-3 hover:bg-[#333335] transition-all duration-100 ease-[cubic-bezier(.47,0,.745,.715)] taos:opacity-0">
                    <img
                      className="h-6"
                      src={subItem.img}
                      alt={`${subItem.title} Logo`}
                    />
                    <p className="text-base text-center">{subItem.title}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
