export const SupportAccounts = () => {

  
  const accountSection = [
    {
      id: 1,
      img: "https://cdn2.unrealengine.com/epic-games-store-logo-cf6ff7693f41.svg",
      bg_img:
        "https://cdn2.unrealengine.com/epic-games-store-bg-1665x933-4e29c08e33b5.jpg",
      title: "Epic Games Store",
    },
    {
      id: 2,
      img: "https://cdn2.unrealengine.com/account-icon-448fa063b491.svg",
      bg_img:
        "https://cdn2.unrealengine.com/accounts-bg-1665x933-5f82f73b48d7.jpg",
      title: "Accounts",
    },
    {
      id: 3,
      img: "https://cdn2.unrealengine.com/support-a-creator-icon-92aeb1d708d9.svg",
      bg_img:
        "https://cdn2.unrealengine.com/our-creator-program-1665x933-361b572eca78.jpg",
      title: "our creator programs",
    },
    {
      id: 4,
      img: "https://cdn2.unrealengine.com/payments-icon-a5db4883bd25.svg",
      bg_img:
        "https://cdn2.unrealengine.com/new-payments-1665x933-6088931d6362.jpg",
      title: "Payments",
    },
    {
      id: 5,
      img: "https://cdn2.unrealengine.com/technical-icon-cf14df109b05.svg",
      bg_img:
        "https://cdn2.unrealengine.com/technical-bg-new-1665x933-6556f996c56b.jpg",
      title: "Technical",
    },
    {
      id: 6,
      img: "https://cdn2.unrealengine.com/parental-icon-103920e2f273.svg",
      bg_img:
        "https://cdn2.unrealengine.com/parental-bg-1665x933-b29f09ed5b37.jpg",
      title: "Parent/Guardian Support",
    },
  ];

  return (
    <>
      <div className="">
        <h3 className="text-white text-lg my-6">Accounts</h3>
        <ul className="grid grid-cols-2 gap-4 h-[500px] p-4">
          {accountSection.map((accountSectionItem) => (
            <li
              key={accountSectionItem.id}
              className="bg-cover bg-no-repeat flex flex-row items-start justify-end rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${accountSectionItem.bg_img})`,
              }}
            >
              <span className="flex flex-col items-end justify-start gap-2 h-full w-[150px] py-2  bg-[#272727] rounded-e-lg overflow-clip ">
                <img src={accountSectionItem.img} className="h-10" />
                <p className="text-white  truncate text-center text-sm">
                  {accountSectionItem.title}
                </p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
