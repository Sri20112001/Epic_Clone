import { Divider } from "@react-md/divider";
import { EpicLogo, Unreal } from "../HomePage/MenuIcons";

export const SupportFooter = () => {
  const menu = [
    {
      id: 1,
      heading: "Resources",
      subHeading: [
        "Support-A-Creator",
        "Distribute on Epic Games",
        "Careers",
        "Company",
        "Fan Art Policy",
        "UX Research",
        "Store EULA",
        "Online Services",
        "Community Rules",
        "Epic Newsroom",
      ],
    },
    {
      id: 2,
      heading: "Made By Epic Games",
      subHeading: [
        "Battle Breakers",
        "Fortnite",
        "Infinity Blade",
        "Robo Recall",
        "Shadow Complex",
        "Unreal Tournament",
      ],
    },
    {
      id: 3,
      heading: "Tools",
      subHeading: [
        " Unreal Engine",
        "UEFN",
        "MetaHuman",
        "Twinmotion",
        "Megascans",
        "RealityScan",
        "Rad Game Tools",
      ],
    },
    {
      id: 4,
      heading: "ONLINE SERVICES",
      subHeading: [
        "Epic Online Services",
        "Kids Web Services",
        "Services Agreement",
        "Acceptable Use Policy",
        "Trust Statement",
        "Subprocessor List",
      ],
    },
    {
      id: 5,
      heading: "RESOURCES",
      subHeading: [
        "Dev Community",
        "MegaGrants",
        "Support-A-Creator",
        "Creator Agreement",
        "Publish on Epic Games Store",
        "Unreal Engine Branding Guidelines",
        "Fan Art Policy",
        "Community Rules",
      ],
    },
    {
      id: 6,
      heading: "COMPANY",
      subHeading: ["About", "Newsroom", "Careers", "Students", "UX Research"],
    },
  ];

  const gridLength = menu.length;
  const menu2 = ["Terms of Service", "Privacy Policy", "Store Refund Policy"];

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="mt-12 bg-[#202020] px-[100px] py-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-2">
            <svg
              className="h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z" />
            </svg>

            <svg
              className="h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
            </svg>

            <svg
              className="h-7 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
            </svg>
          </div>
          <div>
            <button className="border" onClick={ScrolltoTop}>
              <svg
                className="h-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 6.879l-7.061 7.06 2.122 2.122L12 11.121l4.939 4.94 2.122-2.122z" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`grid grid-cols-${gridLength} gap-4 my-4`}>
          {menu.map((menuItem) => (
            <div key={menuItem.id}>
              <h5 className="text-[#5e5e5e] text-xs font-semibold mb-2">
                {menuItem.heading}
              </h5>
              <ul className="text-gray-400">
                {menuItem.subHeading.map((subMenuItem, index) => (
                  <li key={index} className="mb-1 ">
                    <p className="hover:text-[#156af2] transition-colors duration-300 ease-in-out text-xs">
                      {subMenuItem}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Divider />
        <div className="w-1/2 mt-6 mb-8 text-start">
          <p className="text-xs text-white">
            © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
            Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
            the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
            logo are trademarks or registered trademarks of Epic Games, Inc. in
            the United States of America and elsewhere. Other brands or product
            names are the trademarks of their respective owners.
          </p>
          <p className="text-xs text-white">
            Our websites may contain links to other sites and resources provided
            by third parties. These links are provided for your convenience
            only. Epic Games has no control over the contents of those sites or
            resources, and accepts no responsibility for them or for any loss or
            damage that may arise from your use of them.
          </p>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4">
            {menu2.map((item, index) => (
              <p
                className="text-white text-xs hover:text-[#156af2] transition-colors duration-300 ease-in-out"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3">
            <img src={EpicLogo} className="h-6"></img>
            <img src={Unreal} className="h-6"></img>
          </div>
        </div>
      </div>
    </>
  );
};
