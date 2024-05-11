import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";
import { IconContext } from "react-icons";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalDining } from "react-icons/md";

const ResturantCard = ({
  key,
  name,
  address,
  outcode,
  postcode,
  rating,
  url,
  address2,
  type,
}) => {
  return (
    <div>
      <IconContext.Provider
        value={{ color: "#4B5563", size: 25, className: "global-class-name" }}
      >
        <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-md bg-white">
          <div className=" px-6 py-4 flex flex-col gap-3">
            <div className="flex flex-col">
              <div className=" flex items-center">
                <h1 className="text-gray-800 font-semibold text-xl mr-5">
                  {name}
                </h1>
                <Rating
                  initialValue={rating}
                  readonly={true}
                  size={30}
                  //   SVGstyle={{ display: "flex" }}
                  //   style={{ display: "flex" }}
                  //   tooltipStyle={{ display: "flex" }}
                />
              </div>
            </div>
            <div className="text-gray-600 text-sm flex">
              <div className="icon">
                <FaLocationDot style={{ height: "20px" }} />
              </div>
              <div className="text-gray-600 text-sm">
                <span>{address}, </span>
                <span>{address2}</span>
              </div>
            </div>
            <p className="mb-2">
              <span>{outcode}</span>
              <span>{postcode}</span>
            </p>
          </div>
          <div className="bg bg-neutral-100 px-6 py-4 flex flex-col gap-2">
            <div className="flex gap-1">
              <div className="icon">
                <MdLocalDining style={{ color: "#22C55E" }} />
              </div>
              <div className="foodType text-[#22C55E] font-medium">{type}</div>
            </div>
            <a href={url} className="text-[#7682F6] font-medium">
              Visit Menu
            </a>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};
ResturantCard.propTypes = {
  key: PropTypes.string,
  name: PropTypes.string,
  address: PropTypes.string,
  outcode: PropTypes.string,
  postcode: PropTypes.string,
  rating: PropTypes.number,
  url: PropTypes.string,
  address2: PropTypes.string,
  type: PropTypes.string,
};

export default ResturantCard;
