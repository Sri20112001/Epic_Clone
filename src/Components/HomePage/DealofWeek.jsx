import { DealCard } from "./DealCard";

/* eslint-disable react/jsx-key */
export const DealofWeek = () => {
  
  const deals = [
    {
      id: 1,
      title: "UNCHARTED™: Legacy of Thieves Collection",
      img: "https://gmedia.playstation.com/is/image/SIEPDC/uncharted-legacy-of-thieves-hero-keyart-02-en-15sep21?$1600px$",
      discount: "8%",
      price: "3000",
      discount_price: "2500",
    },
    {
      id: 2,
      title: "Days Gone",
      img: "https://gmedia.playstation.com/is/image/SIEPDC/days-gone-listing-thumb-01-ps4-us-10jan19?$1600px$",
      discount: "8%",
      price: "3000",
      discount_price: "2500",
    },
    {
      id: 3,
      title: "Ratchet & Clank: Rift Apart",
      img: "https://gmedia.playstation.com/is/image/SIEPDC/ratchet-and-clank-rift-apart-keyart-01-27jan21$en?$1600px$",
      discount: "8%",
      price: "3000",
      discount_price: "2500",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-3 gap-8 mt-14 mb-14">
        {deals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </>
  );
};
