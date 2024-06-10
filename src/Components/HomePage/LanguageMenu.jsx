export const LanguageMenu = () => {
  const language = [
    "English",
    "Arabic",
    "German",
    "Spanish (Spain)",
    "Spanish (Latin America)",
    "French",
    "Italian",
    "Japanese",
    "Korean",
    "Polish",
    "Portuguese",
    "Russian",
    "Thai",
    "Turkish",
    "Simplified Chinese",
    "Traditional Chinese",
  ].sort();
  return (
    <>
      <div className="flex flex-col  max-w-fit bg-[#202024] rounded-lg absolute top-[75px] right-[50px] z-20">
        <ul className="py-2 px-1 mx-1 my-2">
          {language.map((languageItem, index) => (
            <li key={index} className=" hover:bg-[#404044] hover:rounded-lg">
              <button className=" px-2 py-1 text-white text-xs text-center">
                {languageItem}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
