/* eslint-disable react/prop-types */

export const FreeGameCard = ({ free }) => {
  return (
    <>
      <div className="flex flex-col">
        <div
          className={`flex flex-col justify-end h-[350px] bg-center bg-no-repeat bg-cover rounded-md hover:brightness-75
          ${free.status == "Upcoming" ? "opacity-50" : ""}`}
          style={{ backgroundImage: `url(${free.img})` }}
        >
          <h3 className="text-white text-center font-bold py-1 bg-[#6a61fe] rounded-b-lg">
            Free Games
          </h3>
        </div>

        <div className="flex flex-col text-white rounded-lg mt-4">
          <h4 className="text- mb-2">{free.title}</h4>
          <span className="flex flex-row gap-2 text-sm items-center">
            <p
              className={`rounded-sm text-sm px-2 py-1 font-semibold
                    ${
                      free.status == "Upcoming" ? "bg-gray-400" : "bg-[#0071df]"
                    }`}
            >
              {free.status}
            </p>
            {free.endDate == "" ? "" : "-"}
            <p>{free.endDate}</p>
          </span>
        </div>
      </div>
    </>
  );
};
