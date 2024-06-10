import { Header } from "../HomePage/Header";
import { SupportAccounts } from "./SupportAccounts";
import { SupportEnterprise } from "./SupportEnterprise";
import { SupportFooter } from "./SupportFooter";
import { SupportGames } from "./SupportGames";
import { SupportOnline } from "./SupportOnline";
import { SupportSearch } from "./SupportSearch";
import { SupportSection } from "./SupportSection";

export const SupportPage = () => {
  return (
    <>
      <div className="2xl:container w-[90%] mx-auto bg-black">
        <Header />
        <div className="w-[70%] mx-auto ">
          <SupportOnline />
          <SupportSearch />
          <SupportSection />
          <SupportGames />
          <SupportAccounts />
          <SupportEnterprise />
        </div>
        <SupportFooter />
      </div>
    </>
  );
};
