import { Header } from "../HomePage/Header";
import { SearchBar } from "../HomePage/SearchBar";
import { WishListSort } from "./WishListSale";
import { WishListTitle } from "./WishListTitle";
import { WishlistNotification } from "./WishlistNotification";
import { Filter } from "../BrowsePage/Filter";
import { WishlistGames } from "./WishlistGames";
import { SupportFooter } from "../SupportPage/SupportFooter";

export const WishListLayout = () => {
  return (
    <div className="2xl:container w-[90%] mx-auto bg-black">
      <Header />
      <div className="w-[75%] mx-auto">
        <SearchBar />
        <WishListTitle />
        <WishlistNotification />
        <div className="flex flex-row justify-between gap-6">
          <div className="flex flex-col w-full">
            <WishListSort />
            <WishlistGames />
          </div>
          <Filter />
        </div>
      </div>
      <SupportFooter />
    </div>
  );
};
