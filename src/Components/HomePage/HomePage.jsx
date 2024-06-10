import { Event } from "./Event";
import { Header } from "./Header";
import { MegaSale } from "./SaleCard";
import { Recommendation } from "./Recommendation";
import { SearchBar } from "./SearchBar";
import { TopSales } from "./TopSales";
import { DealofWeek } from "./DealofWeek";
import { FreeGame } from "./FreeGame";
import { Footer } from "./Footer";

export const HomePage = () => {
  return (
    <>
    <div className="2xl:container w-[90%] mx-auto bg-black">
       <Header/>
        <div className="w-[90%] mx-auto ">
          <SearchBar />
          <Event />
          <Recommendation />
          <MegaSale />
          <TopSales />
          <DealofWeek />
          <FreeGame />
        </div>
        
        <Footer/>
      </div>
    </>
  )
}
