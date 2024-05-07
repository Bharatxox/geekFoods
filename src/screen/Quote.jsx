import Navbar from "../component/Navbar";
import quote from "../component/json/quote.json";
import QuoteCard from "../component/QuoteCard";
import Footer from "../component/Footer";

const Quote = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-5 p-7 items-center box-border">
        {quote.map((data) => (
          <QuoteCard
            key={data.index}
            quoteData={data.quote}
            author={data.author}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Quote;
