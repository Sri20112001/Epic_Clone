import { Footer } from "../HomePage/Footer";
import { Header } from "../HomePage/Header";
import { SearchBar } from "../HomePage/SearchBar";
import { DisplayGames } from "./DisplayGames";
import { GenreHeader } from "./GenreHeader";
import { Sort } from "./Sort";

export const BrowsePage = () => {
  return (
    <>
      <div className="2xl:container w-[90%] mx-auto bg-black">
        <Header />
        <div className="w-[75%] mx-auto ">
          <SearchBar />
          <GenreHeader/>
          <Sort/>
          <DisplayGames/>
        </div>
        <Footer />
      </div>
    </>
  );
};
