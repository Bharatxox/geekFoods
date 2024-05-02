import { Button } from "./Button";
import "./Page1.css";

const Page1 = () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat h-[93vh]">
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 ">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right flex flex-col gap-5">
          <h1 className="text-black font-extrabold text-5xl">
            Let us find your <p className="text-[#ff0000]">Forever Food.</p>
          </h1>
          <p className="text-black text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex gap-3">
            <Button
              fontColor={"#FFFFFF"}
              bgColor={"#FF0000"}
              paddingLeft={"12px"}
              paddingRight={"48px"}
              borderRadius={"5px"}
            >
              Search Now
            </Button>
            <Button
              fontColor={"#FF0000"}
              bgColor={"#FFFFFF"}
              paddingLeft={"12px"}
              paddingRight={"48px"}
              borderRadius={"5px"}
            >
              Know More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page1;
