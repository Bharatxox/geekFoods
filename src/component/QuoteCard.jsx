import PropTypes from "prop-types";

const QuoteCard = ({ quoteData, author }) => {
  return (
    <div className="w-[80%] flex flex-col gap-3 p-5 bg-[#1F2937] text-white rounded-lg mb-10">
      <h1 className="text-center text-[27px] font-bold">{quoteData}</h1>
      <p className="text-center font-medium text-slate-400">{author}</p>
    </div>
  );
};
QuoteCard.propTypes = {
  quoteData: PropTypes.string,
  author: PropTypes.string,
};

export default QuoteCard;
