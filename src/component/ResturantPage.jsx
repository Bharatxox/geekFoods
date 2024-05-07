import { useState } from "react";
import data from "./json/Resturants.js";

const ResturantPage = () => {
  const [search, sesearch] = useState("");
  const [rating, setrating] = useState(0);
  const filterData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const ratingData = filterData.filter((star) => star.rating >= rating);

  return (
    <div>
      <input
        type="text"
        className="border-2 border-black"
        onChange={(e) => sesearch(e.target.value)}
      />
      <input
        type="number"
        className="border-2 border-black"
        step="0.5"
        min="0"
        max="10"
        onChange={(e) => setrating(e.target.value)}
      />
      {ratingData.map((e) => (
        <div key={e._id.$oid}>
          <div>
            <h1>{e.name}</h1> <span>{e.rating}</span>
            <p>{e.address}</p>
            <p>
              <span>{e.outcode}</span>
              <span>{e.postcode}</span>
            </p>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default ResturantPage;
