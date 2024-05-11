import { useState } from "react";
import data from "./json/Resturants.js";
import ResturantCard from "./ResturantCard.jsx";

const ResturantPage = () => {
  const [search, sesearch] = useState("");
  const [rating, setrating] = useState(0);
  const filterData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const ratingData = filterData.filter((star) => star.rating >= rating);

  return (
    <div>
      <div className="flex gap-2 items-baseline px-6 py-4">
        <div className="relative h-11 w-72 max-w-[200px]">
          <input
            placeholder="Search Resturant"
            type="text"
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            onChange={(e) => sesearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <label>Min star:</label>
          <input
            type="number"
            className="border border-blue-gray-200"
            step="0.5"
            min="0"
            max="10"
            onChange={(e) => setrating(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {ratingData.map((e) => (
          <ResturantCard
            key={e._id.$oid}
            name={e.name}
            address={e.address}
            outcode={e.outcode}
            postcode={e.postcode}
            rating={e.rating}
            url={e.URL}
            address2={e["address line 2"]}
            type={e.type_of_food}
          />
        ))}
      </div>
    </div>
  );
};

export default ResturantPage;
{
  /* <div key={e._id.$oid}>
          <div>
            <h1>{e.name}</h1> <span>{e.rating}</span>
            <p>{e.address}</p>
            <p>
              <span>{e.outcode}</span>
              <span>{e.postcode}</span>
            </p>
          </div>
          <div></div>
        </div> */
}
