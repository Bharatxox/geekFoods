import React from "react";
import peopleArray from "./json/Page3.json";
import "./Page3.css";
const Page3 = () => {
  return (
    <section className="three">
      <div className="flex mx-auto max-w-screen-xl px-4 py-16 px-8 flex-wrap">
        {peopleArray.map((person, index) => (
          <div key={index} className="box">
            <p className="rounded-xl bg-gray-50 p-6 shadow">{person.review}</p>
            <div className="name">
              <img
                src={person.image}
                alt={person.name}
                className="profileImage"
              />
              <div className="username">
                <p className="bold">{person.name}</p>
                <p>{person.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Page3;
